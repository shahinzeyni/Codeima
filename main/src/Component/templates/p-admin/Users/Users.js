"use client";
import React, { useEffect, useState } from "react";
import s from "./Users.module.css";
import { cn } from "@/utils/cn";
import { Dialog } from "primereact/dialog";
import Avatar from "react-avatar-edit";
import Swal from "sweetalert2";
import { showSwal } from "@/utils/swalHelper";

export default function Users() {
  const [usersData, setusersData] = useState([]);
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [parentPhone, setparentPhone] = useState("");
  // const [studentName, setstudentName] = useState("شاهین")
  const [profilePhoto, setprofilePhoto] = useState("");

  const [isNewSuperUser, setIsNewSuperUser] = useState();
  const [isNewStaff, setIsNewStaff] = useState();

  const [grade, setGrade] = useState("-1");

  console.log(isNewStaff, isNewSuperUser);

  const [dialog, setDialog] = useState(false);
  const [imageCrop, setImageCrop] = useState(false);
  const [storeImage, setstoreImage] = useState([]);

  const onClose = () => {
    setImageCrop(null);
  };
  const onCrop = view => {
    setImageCrop(view);
  };

  const saveImage = () => {
    setstoreImage([...storeImage, { imageCrop }]);
    setDialog(false);
  };
  const profileImageShow = storeImage.map(item => item.imageCrop);
  console.log(profileImageShow);

  console.log(usersData);

  let dateTimeConverted;
  const dateTime = Time => {
    return (dateTimeConverted = new Date(Time.slice(0, 10)).toLocaleDateString(
      "fa-IR"
    ));
  };

  function getAllUsers() {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    fetch("http://codeima.ir/api/v1/users/", {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`
      }
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setusersData(result);
      });
  }
  useEffect(() => {
    getAllUsers();
  }, []);

  const editUser = (event) => {
    event.preventDefault();
    const formData = new FormData();
    if (password != "") {
      formData.append("password", password);
    }
    if (firstName != "") {
      formData.append("first_name", firstName);
    }
    if (lastName != "") {
      formData.append("last_name", lastName);
    }
    if (email != "") {
      formData.append("email", email);
    }
    if (phone != "") {
      formData.append("phone", phone);
    }
    if (parentPhone != "") {
      formData.append("parents_phone", parentPhone);
    }
    if (profilePhoto != "") {
      formData.append("profile_photo", profileImageShow);
    }
    if (grade != "-1") {
      formData.append("grade", grade);
    }
    if (isNewStaff != undefined) {
      formData.append("is_staff", isNewStaff);
    }
    if (isNewSuperUser != undefined) {
      formData.append("is_superuser", isNewSuperUser);
    }

    fetch(`http://codeima.ir/api/v1/users/${userId}/`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))
          .token}`
      },
      body: formData
    })
      .then(res => {
        if (!res.ok) {
          return res.text().then(text => {
            throw new Error(text);
          });
        } else {
          return res.json();
        }
      })
      .then(result => {
        console.log(result);
        Swal.fire({
          title: "تغییرات با موفقیت انجام شد.",
          text: "",
          icon: "success",
          confirmButtonText: "تایید"
        }).then(() => setIsShowEditModal(false));
      })
      .catch(err => {
        console.log(err);
        showSwal("خطا،فیلد ها را مجدد بررسی کنید!", "", "error", "تلاش مجدد!");
      });
  };


  return (
    <div className={s.UsersRegisterMain}>
      <div className={s.nameSection}>
        <span>اسامی کاربران</span>
      </div>
      <div className={s.ticketsContents}>
        <table>
          <thead>
            <tr>
              <th>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M17.75 4h-1.764a2.25 2.25 0 0 0-2.236-2h-3.5a2.25 2.25 0 0 0-2.236 2H6.25A2.25 2.25 0 0 0 4 6.25v13.5A2.25 2.25 0 0 0 6.25 22h2.419a1.74 1.74 0 0 1-.169-.75v-2.268a1.75 1.75 0 0 1-1.141-3.238c.349-.207.694-.577.976-.969c.625-.871 1.616-.914 2.194-.75c.414.116.985.45 1.28 1.052c.734-.657 1.593-1.027 2.49-1.073a3.62 3.62 0 0 1 2.602.92c.18.163.35.35.499.56q.04-.05.085-.097c.761-.796 1.646-1.223 2.515-1.348V6.25A2.25 2.25 0 0 0 17.75 4m-7.5 1a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 0 1.5zM11 15.938c0-.562-.433-.864-.742-.951s-.804-.056-1.111.371c-.317.443-.759.939-1.279 1.247a.75.75 0 0 0 .764 1.29c.323-.19.613-.42.868-.662v4.017a.75.75 0 0 0 1.5 0zm3.425.563c-.306.016-.704.159-1.124.611a.75.75 0 0 1-1.1-1.02c.65-.7 1.402-1.051 2.149-1.089a2.62 2.62 0 0 1 1.882.665c.472.425.803 1.054.754 1.748c-.05.726-.502 1.35-1.253 1.758c-.95.516-1.496.976-1.808 1.326h2.325a.75.75 0 0 1 0 1.5h-3.499a.75.75 0 0 1-.745-.666v-.007l-.002-.008l-.001-.017a1 1 0 0 1-.002-.14c.004-.079.014-.175.039-.287a2.6 2.6 0 0 1 .352-.828c.398-.637 1.168-1.4 2.625-2.191c.402-.218.465-.434.473-.544c.01-.142-.058-.346-.263-.53a1.12 1.12 0 0 0-.802-.28m4.867.614c.878-.918 1.76-.628 2.076-.282c.16.176.14.294.11.357c-.05.103-.285.393-1.135.576a.75.75 0 0 0 0 1.466c.85.183 1.086.473 1.135.577c.03.063.05.182-.11.358c-.316.346-1.197.636-2.075-.284a.75.75 0 0 0-1.086 1.036c1.456 1.525 3.345 1.271 4.269.26c.46-.505.716-1.268.354-2.02a2 2 0 0 0-.52-.66c.223-.188.4-.407.52-.659c.362-.751.105-1.515-.354-2.018c-.924-1.012-2.812-1.266-4.268.257a.75.75 0 1 0 1.084 1.036"
                    />
                  </svg>
                  <p>شماره</p>
                </div>
              </th>
              <th>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M9.952 6.25c-.43 0-.832 0-1.16.049c-.371.055-.752.186-1.057.525c-.294.327-.398.717-.443 1.089c-.042.348-.042.78-.042 1.267v.57a.75.75 0 0 0 1.5 0v-.528c0-.543.001-.882.031-1.129a.976.976 0 0 1 .046-.22a.133.133 0 0 1 .023-.046h.001c.001-.002.002-.003.011-.008a.592.592 0 0 1 .152-.037c.204-.03.491-.032.986-.032h1.25v8.5H9.5a.75.75 0 0 0 0 1.5H15a.75.75 0 0 0 0-1.5h-2.25v-8.5H14c.495 0 .782.002.986.032c.092.014.135.03.152.037l.011.007v.001a.13.13 0 0 1 .024.045c.014.038.032.105.046.221c.03.247.031.586.031 1.13v.527a.75.75 0 0 0 1.5 0v-.57c0-.488 0-.919-.042-1.267c-.045-.372-.149-.762-.443-1.09c-.305-.338-.686-.469-1.057-.524c-.328-.05-.73-.05-1.16-.049z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>نام</p>
                </div>
              </th>
              <th>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M16 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a1 1 0 1 1 2 0h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2a1 1 0 1 1-2 0m1 5.001a1 1 0 0 0 1-1V8a1 1 0 1 0-2 0v.001a1 1 0 0 0 1 1m1 3a1 1 0 1 1-2 0V12a1 1 0 1 1 2 0zm-1 5a1 1 0 0 0 1-1V16a1 1 0 1 0-2 0v.001a1 1 0 0 0 1 1m-3.168-7.446a1 1 0 0 0-1.664-1.11L8.845 13.43l-1.138-1.137a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.54-.152l4-6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>خانوادگی</p>
                </div>
              </th>
              <th>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013z"
                    />
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M22 12c0-.839 0-1.585-.013-2.25H2.013C2 10.415 2 11.161 2 12v2c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14zm-8 .25A1.75 1.75 0 0 0 12.25 14v2a1.75 1.75 0 1 0 3.5 0v-2A1.75 1.75 0 0 0 14 12.25m0 1.5a.25.25 0 0 0-.25.25v2a.25.25 0 1 0 .5 0v-2a.25.25 0 0 0-.25-.25m-3.213-1.443a.75.75 0 0 1 .463.693v4a.75.75 0 0 1-1.5 0v-2.19l-.22.22a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 .817-.163"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>فراگیر</p>
                </div>
              </th>
              <th>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 26.3c-19.924 0-36.076 18.7-36.076 41.768c.014 17.119 9.05 32.494 22.797 38.795C223.827 117.95 206 149.828 206 172.488h100c0-22.65-17.813-54.508-36.695-65.61c13.741-6.312 22.766-21.693 22.771-38.81c0-23.067-16.152-41.767-36.076-41.767zm-9 165.212v41H61v83h18v-65h168v65h18v-65h168v65h18v-83H265v-41zm-177 148c-19.924 0-36.076 18.7-36.076 41.767c.014 17.119 9.05 32.494 22.797 38.795C37.827 431.161 20 463.04 20 485.7h100c0-22.65-17.813-54.51-36.695-65.611c13.741-6.313 22.766-21.692 22.771-38.809c0-23.067-16.152-41.768-36.076-41.767zm186 0c-19.924 0-36.076 18.7-36.076 41.767c.014 17.119 9.05 32.494 22.797 38.795C223.827 431.161 206 463.04 206 485.7h100c0-22.65-17.813-54.51-36.695-65.611c13.741-6.313 22.766-21.692 22.771-38.809c0-23.067-16.152-41.768-36.076-41.767zm186 0c-19.924 0-36.076 18.7-36.076 41.767c.014 17.119 9.05 32.494 22.797 38.795C409.827 431.161 392 463.04 392 485.7h100c0-22.65-17.813-54.51-36.695-65.611c13.741-6.313 22.766-21.692 22.771-38.809c0-23.067-16.152-41.768-36.076-41.767z"
                    />
                  </svg>
                  <p>شماره تماس</p>
                </div>
              </th>
              <th>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 26.3c-19.924 0-36.076 18.7-36.076 41.768c.014 17.119 9.05 32.494 22.797 38.795C223.827 117.95 206 149.828 206 172.488h100c0-22.65-17.813-54.508-36.695-65.61c13.741-6.312 22.766-21.693 22.771-38.81c0-23.067-16.152-41.767-36.076-41.767zm-9 165.212v41H61v83h18v-65h168v65h18v-65h168v65h18v-83H265v-41zm-177 148c-19.924 0-36.076 18.7-36.076 41.767c.014 17.119 9.05 32.494 22.797 38.795C37.827 431.161 20 463.04 20 485.7h100c0-22.65-17.813-54.51-36.695-65.611c13.741-6.313 22.766-21.692 22.771-38.809c0-23.067-16.152-41.768-36.076-41.767zm186 0c-19.924 0-36.076 18.7-36.076 41.767c.014 17.119 9.05 32.494 22.797 38.795C223.827 431.161 206 463.04 206 485.7h100c0-22.65-17.813-54.51-36.695-65.611c13.741-6.313 22.766-21.692 22.771-38.809c0-23.067-16.152-41.768-36.076-41.767zm186 0c-19.924 0-36.076 18.7-36.076 41.767c.014 17.119 9.05 32.494 22.797 38.795C409.827 431.161 392 463.04 392 485.7h100c0-22.65-17.813-54.51-36.695-65.611c13.741-6.313 22.766-21.692 22.771-38.809c0-23.067-16.152-41.768-36.076-41.767z"
                    />
                  </svg>
                  <p>شماره والدین</p>
                </div>
              </th>
              <th>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 26.3c-19.924 0-36.076 18.7-36.076 41.768c.014 17.119 9.05 32.494 22.797 38.795C223.827 117.95 206 149.828 206 172.488h100c0-22.65-17.813-54.508-36.695-65.61c13.741-6.312 22.766-21.693 22.771-38.81c0-23.067-16.152-41.767-36.076-41.767zm-9 165.212v41H61v83h18v-65h168v65h18v-65h168v65h18v-83H265v-41zm-177 148c-19.924 0-36.076 18.7-36.076 41.767c.014 17.119 9.05 32.494 22.797 38.795C37.827 431.161 20 463.04 20 485.7h100c0-22.65-17.813-54.51-36.695-65.611c13.741-6.313 22.766-21.692 22.771-38.809c0-23.067-16.152-41.768-36.076-41.767zm186 0c-19.924 0-36.076 18.7-36.076 41.767c.014 17.119 9.05 32.494 22.797 38.795C223.827 431.161 206 463.04 206 485.7h100c0-22.65-17.813-54.51-36.695-65.611c13.741-6.313 22.766-21.692 22.771-38.809c0-23.067-16.152-41.768-36.076-41.767zm186 0c-19.924 0-36.076 18.7-36.076 41.767c.014 17.119 9.05 32.494 22.797 38.795C409.827 431.161 392 463.04 392 485.7h100c0-22.65-17.813-54.51-36.695-65.611c13.741-6.313 22.766-21.692 22.771-38.809c0-23.067-16.152-41.768-36.076-41.767z"
                    />
                  </svg>
                  <p>تاریخ ثبت نام</p>
                </div>
              </th>
              <th>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 26.3c-19.924 0-36.076 18.7-36.076 41.768c.014 17.119 9.05 32.494 22.797 38.795C223.827 117.95 206 149.828 206 172.488h100c0-22.65-17.813-54.508-36.695-65.61c13.741-6.312 22.766-21.693 22.771-38.81c0-23.067-16.152-41.767-36.076-41.767zm-9 165.212v41H61v83h18v-65h168v65h18v-65h168v65h18v-83H265v-41zm-177 148c-19.924 0-36.076 18.7-36.076 41.767c.014 17.119 9.05 32.494 22.797 38.795C37.827 431.161 20 463.04 20 485.7h100c0-22.65-17.813-54.51-36.695-65.611c13.741-6.313 22.766-21.692 22.771-38.809c0-23.067-16.152-41.768-36.076-41.767zm186 0c-19.924 0-36.076 18.7-36.076 41.767c.014 17.119 9.05 32.494 22.797 38.795C223.827 431.161 206 463.04 206 485.7h100c0-22.65-17.813-54.51-36.695-65.611c13.741-6.313 22.766-21.692 22.771-38.809c0-23.067-16.152-41.768-36.076-41.767zm186 0c-19.924 0-36.076 18.7-36.076 41.767c.014 17.119 9.05 32.494 22.797 38.795C409.827 431.161 392 463.04 392 485.7h100c0-22.65-17.813-54.51-36.695-65.611c13.741-6.313 22.766-21.692 22.771-38.809c0-23.067-16.152-41.768-36.076-41.767z"
                    />
                  </svg>
                  <p>وضعیت</p>
                </div>
              </th>
              <th>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 26.3c-19.924 0-36.076 18.7-36.076 41.768c.014 17.119 9.05 32.494 22.797 38.795C223.827 117.95 206 149.828 206 172.488h100c0-22.65-17.813-54.508-36.695-65.61c13.741-6.312 22.766-21.693 22.771-38.81c0-23.067-16.152-41.767-36.076-41.767zm-9 165.212v41H61v83h18v-65h168v65h18v-65h168v65h18v-83H265v-41zm-177 148c-19.924 0-36.076 18.7-36.076 41.767c.014 17.119 9.05 32.494 22.797 38.795C37.827 431.161 20 463.04 20 485.7h100c0-22.65-17.813-54.51-36.695-65.611c13.741-6.313 22.766-21.692 22.771-38.809c0-23.067-16.152-41.768-36.076-41.767zm186 0c-19.924 0-36.076 18.7-36.076 41.767c.014 17.119 9.05 32.494 22.797 38.795C223.827 431.161 206 463.04 206 485.7h100c0-22.65-17.813-54.51-36.695-65.611c13.741-6.313 22.766-21.692 22.771-38.809c0-23.067-16.152-41.768-36.076-41.767zm186 0c-19.924 0-36.076 18.7-36.076 41.767c.014 17.119 9.05 32.494 22.797 38.795C409.827 431.161 392 463.04 392 485.7h100c0-22.65-17.813-54.51-36.695-65.611c13.741-6.313 22.766-21.692 22.771-38.809c0-23.067-16.152-41.768-36.076-41.767z"
                    />
                  </svg>
                  <p>کاربر</p>
                </div>
              </th>
              <th>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 26.3c-19.924 0-36.076 18.7-36.076 41.768c.014 17.119 9.05 32.494 22.797 38.795C223.827 117.95 206 149.828 206 172.488h100c0-22.65-17.813-54.508-36.695-65.61c13.741-6.312 22.766-21.693 22.771-38.81c0-23.067-16.152-41.767-36.076-41.767zm-9 165.212v41H61v83h18v-65h168v65h18v-65h168v65h18v-83H265v-41zm-177 148c-19.924 0-36.076 18.7-36.076 41.767c.014 17.119 9.05 32.494 22.797 38.795C37.827 431.161 20 463.04 20 485.7h100c0-22.65-17.813-54.51-36.695-65.611c13.741-6.313 22.766-21.692 22.771-38.809c0-23.067-16.152-41.768-36.076-41.767zm186 0c-19.924 0-36.076 18.7-36.076 41.767c.014 17.119 9.05 32.494 22.797 38.795C223.827 431.161 206 463.04 206 485.7h100c0-22.65-17.813-54.51-36.695-65.611c13.741-6.313 22.766-21.692 22.771-38.809c0-23.067-16.152-41.768-36.076-41.767zm186 0c-19.924 0-36.076 18.7-36.076 41.767c.014 17.119 9.05 32.494 22.797 38.795C409.827 431.161 392 463.04 392 485.7h100c0-22.65-17.813-54.51-36.695-65.611c13.741-6.313 22.766-21.692 22.771-38.809c0-23.067-16.152-41.768-36.076-41.767z"
                    />
                  </svg>
                  <p>ایمیل</p>
                </div>
              </th>
              <th>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 26.3c-19.924 0-36.076 18.7-36.076 41.768c.014 17.119 9.05 32.494 22.797 38.795C223.827 117.95 206 149.828 206 172.488h100c0-22.65-17.813-54.508-36.695-65.61c13.741-6.312 22.766-21.693 22.771-38.81c0-23.067-16.152-41.767-36.076-41.767zm-9 165.212v41H61v83h18v-65h168v65h18v-65h168v65h18v-83H265v-41zm-177 148c-19.924 0-36.076 18.7-36.076 41.767c.014 17.119 9.05 32.494 22.797 38.795C37.827 431.161 20 463.04 20 485.7h100c0-22.65-17.813-54.51-36.695-65.611c13.741-6.313 22.766-21.692 22.771-38.809c0-23.067-16.152-41.768-36.076-41.767zm186 0c-19.924 0-36.076 18.7-36.076 41.767c.014 17.119 9.05 32.494 22.797 38.795C223.827 431.161 206 463.04 206 485.7h100c0-22.65-17.813-54.51-36.695-65.611c13.741-6.313 22.766-21.692 22.771-38.809c0-23.067-16.152-41.768-36.076-41.767zm186 0c-19.924 0-36.076 18.7-36.076 41.767c.014 17.119 9.05 32.494 22.797 38.795C409.827 431.161 392 463.04 392 485.7h100c0-22.65-17.813-54.51-36.695-65.611c13.741-6.313 22.766-21.692 22.771-38.809c0-23.067-16.152-41.768-36.076-41.767z"
                    />
                  </svg>
                  <p>ویرایش</p>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {usersData.map(userData =>
              <tr key={userData.id}>
                <td>
                  <div>
                    <p>
                      {1}
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p>
                      {userData.first_name ? userData.first_name : "بدون نام"}
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p>
                      {userData.last_name ? userData.last_name : "تعیین نشده"}
                    </p>
                  </div>
                </td>
                <td>
                  <div className={s.tdSituationTicket}>
                    <p>
                      {userData.student_name
                        ? userData.student_name
                        : "تعیین نشده"}
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p className={s.numberPhone}>
                      {userData.phone ? userData.phone : "تعیین نشده"}
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p className={s.numberPhone}>
                      {userData.parents_phone
                        ? userData.parents_phone
                        : "تعیین نشده"}
                    </p>
                  </div>
                </td>
                <td>
                  <div className={s.tdSituationTicket}>
                    <p>
                      {dateTime(userData.date_joined)}
                    </p>
                  </div>
                </td>
                <td>
                  <div className={s.tdSituationTicket}>
                    <p>
                      {userData.is_superuser ? "ادمین" : "عادی"}
                    </p>
                  </div>
                </td>
                <td>
                  <div className={s.tdSituationTicket}>
                    <p>
                      {userData.is_staff ? "مربی" : "فراگیر"}
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p>
                      {userData.email ? userData.email : "تعیین نشده"}
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <button
                      className={s.editDataBtn}
                      onClick={() => {
                        setIsShowEditModal(true);
                        setUserId(userData.id);
                        setprofilePhoto(userData.profile_photo);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M21.455 5.416a.75.75 0 0 1-.096.943l-9.193 9.192a.75.75 0 0 1-.34.195l-3.829 1a.75.75 0 0 1-.915-.915l1-3.828a.778.778 0 0 1 .161-.312L17.47 2.47a.75.75 0 0 1 1.06 0l2.829 2.828a.756.756 0 0 1 .096.118m-1.687.412L18 4.061l-8.518 8.518l-.625 2.393l2.393-.625z"
                          clipRule="evenodd"
                        />
                        <path
                          fill="currentColor"
                          d="M19.641 17.16a44.4 44.4 0 0 0 .261-7.04a.403.403 0 0 1 .117-.3l.984-.984a.198.198 0 0 1 .338.127a45.91 45.91 0 0 1-.21 8.372c-.236 2.022-1.86 3.607-3.873 3.832a47.77 47.77 0 0 1-10.516 0c-2.012-.225-3.637-1.81-3.873-3.832a45.922 45.922 0 0 1 0-10.67c.236-2.022 1.86-3.607 3.873-3.832a47.75 47.75 0 0 1 7.989-.213a.2.2 0 0 1 .128.34l-.993.992a.402.402 0 0 1-.297.117a46.164 46.164 0 0 0-6.66.255a2.89 2.89 0 0 0-2.55 2.516a44.421 44.421 0 0 0 0 10.32a2.89 2.89 0 0 0 2.55 2.516c3.355.375 6.827.375 10.183 0a2.89 2.89 0 0 0 2.55-2.516"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {isShowEditModal &&
        <div className={s.mainNewRegister}>
          <div className={s.RegisterMain}>
            <div className={s.nameSection}>
              <span>ادیت کاربر</span>
              <div onClick={() => setIsShowEditModal(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"
                  />
                  <path
                    fill="currentColor"
                    d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                  />
                </svg>
              </div>
            </div>
            <form action="POST" onSubmit={editUser}>
              <div className={s.formTop}>
                <div className={s.formTop_avatar}>
                  <img
                    src={
                      profilePhoto
                        ? profilePhoto
                        : "/image/programing-logos/python.svg"
                    }
                    onClick={() => setDialog(true)}
                    alt="Avatar"
                  />
                  <Dialog
                    visible={dialog}
                    onHide={() => setDialog(false)}
                    header={() =>
                      <p htmlFor="" className={cn("text-2xl", "text-cyan-700")}>
                        آپلود پروفایل
                      </p>}
                  >
                    <div
                      className={cn(
                        "flex",
                        "flex-col",
                        "items-center",
                        "bg-[#eee]"
                      )}
                    >
                      <Avatar onClose={onClose} onCrop={onCrop} />
                      <button onClick={saveImage}>Save</button>
                    </div>
                  </Dialog>
                </div>
              </div>
              <div className={s.formBottom}>
                <div className={s.formbottom_form}>
                  <div className={s.formbottom_names_contents}>
                    <div className={s.formbottom_names_content}>
                      <label htmlFor="">نام</label>
                      <input
                        type="text"
                        id="first_name"
                        autoComplete="family-name"
                        value={firstName}
                        onChange={e => setfirstName(e.target.value)}
                      />
                    </div>
                    <div className={s.formbottom_names_content}>
                      <label htmlFor="">نام خانوادگی</label>
                      <input
                        type="text"
                        id="last_name"
                        autoComplete="family-name"
                        value={lastName}
                        onChange={e => setlastName(e.target.value)}
                      />
                    </div>
                    <div className={s.formbottom_names_content}>
                      <label htmlFor="">تاریخ تولد</label>
                      <input
                        type="text"
                        id="birthdat"
                        autoComplete="family-name"
                      />
                    </div>
                    <div className={s.formbottom_names_content}>
                      <label htmlFor="">رمز</label>
                      <input
                        type="text"
                        id="password"
                        autoComplete="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                    </div>
                    <div className={s.formbottom_names_content}>
                      <label htmlFor="">شماره تماس اول</label>
                      <input
                        type="text"
                        id="birthdat"
                        autoComplete="family-name"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                      />
                    </div>
                    <div className={s.formbottom_names_content}>
                      <label htmlFor="">شماره تماس دوم</label>
                      <input
                        type="text"
                        id="birthdat"
                        autoComplete="family-name"
                        value={parentPhone}
                        onChange={e => setparentPhone(e.target.value)}
                      />
                    </div>
                    <div className={s.formbottom_names_content}>
                      <label htmlFor="پایه تحصیلی">پایه تحصیلی </label>
                      <input
                        type="text"
                        id="grade_edu"
                        autoComplete="family-name"
                      />
                    </div>
                    <div className={s.formbottom_names_content}>
                      <label htmlFor="">استان</label>
                      <input
                        type="text"
                        id="place_location"
                        autoComplete="family-name"
                      />
                    </div>
                    <div className={s.formbottom_names_content}>
                      <label htmlFor=""> شهر</label>
                      <input
                        type="text"
                        id="city_name"
                        autoComplete="family-name"
                      />
                    </div>
                    <div className={s.formbottom_names_content}>
                      <label htmlFor="">نام مدرسه</label>
                      <input
                        type="text"
                        id="school_name"
                        autoComplete="family-name"
                      />
                    </div>
                    <div className={s.formbottom_names_content}>
                      <label htmlFor="">نام مدرسه</label>
                      <select
                        name="gradeSchool"
                        onChange={e => setGrade(event.target.value)}
                      >
                        <option value="-1">انتخاب کنید</option>
                        <option value="first">اول</option>
                        <option value="second">دوم</option>
                        <option value="third">سوم</option>
                        <option value="fourth">چهارم</option>
                        <option value="fifth">پنجم</option>
                        <option value="sixth">ششم</option>
                        <option value="seventh">هفتم</option>
                        <option value="eighth">هشتم</option>
                        <option value="ninth">نهم</option>
                        <option value="tenth">دهم</option>
                        <option value="eleventh">یازدهم</option>
                        <option value="twelfth">دوازدهم</option>
                        <option value="bachelors">بالاتر از دوازدهم</option>
                      </select>
                    </div>
                    <div className={s.formbottom_names_content}>
                      <label htmlFor="">کد ملی</label>
                      <input
                        type="text"
                        id="Id_card"
                        autoComplete="family-name"
                      />
                    </div>
                    <div className={s.formbottom_names_content}>
                      <label htmlFor="">ایمیل</label>
                      <input
                        type="text"
                        id="email_addres"
                        autoComplete="email_addres"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>
                    <div className={s.formbottom_names_content}>
                      <label htmlFor="جنسیت"> جنسیت</label>
                      <input type="text" id="sex" autoComplete="family-name" />
                    </div>
                    <div className={s.formbottom_names_content}>
                      <label htmlFor=""> نشانی</label>
                      <textarea name="" id="addres" />
                    </div>
                    <div className={s.formbottom_names_content}>
                      <div className={s.radioSuperUser}>
                        <span>بعنوان آدمین:</span>
                        <div>
                          <span>بله</span>
                          <input
                            type="radio"
                            name="isSuperUser"
                            value={isNewSuperUser}
                            onInput={() => setIsNewSuperUser(true)}
                          />
                        </div>
                        <div>
                          <span>خیر</span>
                          <input
                            type="radio"
                            name="isSuperUser"
                            value={isNewSuperUser}
                            onInput={() => setIsNewSuperUser(false)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={s.formbottom_names_content}>
                      <div className={s.radioSuperUser}>
                        <span>بعنوان :</span>
                        <div>
                          <span>مربی</span>
                          <input
                            type="radio"
                            name="isStaff"
                            value={isNewStaff}
                            onInput={() => setIsNewStaff(true)}
                          />
                        </div>
                        <div>
                          <span>فراگیر</span>
                          <input
                            type="radio"
                            name="isStaff"
                            value={isNewStaff}
                            onInput={() => setIsNewStaff(false)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className={s.addUserBtn} type="submit" onClick={editUser}>
                اعمال تغییرات
              </button>
            </form>
          </div>
        </div>}
    </div>
  );
}
