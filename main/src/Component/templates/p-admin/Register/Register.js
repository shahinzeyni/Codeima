"use client";
import React, { useState } from "react";
import s from "./Register.module.css";
import { Dialog } from "primereact/dialog";
import ReactCrop from "react-image-crop";
import { cn } from "@/utils/cn";
import Avatar from "react-avatar-edit";
import Swal from "sweetalert2";
import { showSwal } from "@/utils/swalHelper";

export default function Register() {
  const [dialog, setDialog] = useState(false);
  const [imageCrop, setImageCrop] = useState(false);
  const [storeImage, setstoreImage] = useState([]);

  const [radioIsSuperUser, setradioIsSuperUser] = useState(false);
  const [radioIsStaffUser, setradioIsStaffUser] = useState(false);

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

  const addUser = event => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("password", "123");
    formData.append("first_name", "شاهین");
    formData.append("last_name", "ali");
    formData.append("email", "zeynishahinn@gmail.com");
    formData.append("phone", "+989211231224");
    formData.append("parents_phone", "+989144064291");
    formData.append("student_name", "شاهین");
    formData.append("profile_photo", profileImageShow);
    formData.append("is_superuser", radioIsSuperUser);
    formData.append("is_staff", radioIsStaffUser);
    formData.append("grade", "first");

    fetch("http://codeima.ir/api/v1/users/", {
      method: "POST",
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
          title: "کاربر جدید با موفقیت ایجاد شد",
          text: "",
          icon: "success",
          confirmButtonText: "تایید"
        });
      })
      .catch(err => {
        console.log(err);
        showSwal("خطا،فیلد ها را مجدد بررسی کنید!", "", "error", "تلاش مجدد!");
      });
  };

  return (
    <div className={s.RegisterMain}>
      <div className={s.nameSection}>
        <span>درسنامه پایتون ترم اول</span>
      </div>
      <form action="POST" onSubmit={addUser}>
        <div className={s.formTop}>
          <div className={s.formTop_avatar}>
            <img
              src={
                profileImageShow.length
                  ? profileImageShow
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
                className={cn("flex", "flex-col", "items-center", "bg-[#eee]")}
              >
                <Avatar onClose={onClose} onCrop={onCrop} />
                <button onClick={saveImage}>Save</button>
              </div>
            </Dialog>
          </div>
        </div>
        <div className={s.formBottom}>
          <div className={s.formbottom_form}>
            <div className={s.formbottom_names_head}>
              <span>اطلاعات پایه</span>
            </div>
          </div>
          <div className={s.formbottom_form}>
            <div className={s.formbottom_names_contents}>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">نام</label>
                <input type="text" id="first_name" autoComplete="family-name" />
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">نام خانوادگی</label>
                <input type="text" id="last_name" autoComplete="family-name" />
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">تاریخ تولد</label>
                <input type="text" id="birthdat" autoComplete="family-name" />
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">شماره تماس اول</label>
                <input type="text" id="birthdat" autoComplete="family-name" />
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">شماره تماس دوم</label>
                <input type="text" id="birthdat" autoComplete="family-name" />
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="پایه تحصیلی">پایه تحصیلی </label>
                <input type="text" id="grade_edu" autoComplete="family-name" />
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">استان </label>
                <input
                  type="text"
                  id="place_location"
                  autoComplete="family-name"
                />
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor=""> شهر</label>
                <input type="text" id="city_name" autoComplete="family-name" />
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
                <label htmlFor="">کد ملی</label>
                <input type="text" id="Id_card" autoComplete="family-name" />
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
                  <input
                    type="checkbox"
                    value={radioIsSuperUser}
                    onClick={() => setradioIsSuperUser(prev => !prev)}
                  />
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
                      value={radioIsStaffUser}
                      onInput={() => setradioIsStaffUser(true)}
                    />
                  </div>
                  <div>
                    <span>فراگیر</span>
                    <input
                      type="radio"
                      name="isStaff"
                      value={radioIsStaffUser}
                      onInput={() => setradioIsStaffUser(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className={s.addUserBtn} type="submit" onClick={addUser}>
          افزودن کاربر جدید
        </button>
      </form>
    </div>
  );
}
