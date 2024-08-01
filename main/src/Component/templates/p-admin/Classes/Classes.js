"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import s from "./Classes.module.css";
import Swal from "sweetalert2";
import { showSwal } from "@/utils/swalHelper";

export default function Classes() {
  const [allUsers, setAllUsers] = useState([]);
  const [titleClass, setTitleClass] = useState("");
  const [userIsTeacher, setuserIsTeacher] = useState(-1);
  const [courseCover, setCourseCover] = useState({});
  const [addedStudent, setAddedStudent] = useState([]);
  console.log(userIsTeacher);

  const [allDataClasses, setAllDataClasses] = useState([]);

  const [getClassId, setGetClassId] = useState();
  const [isShowModalEdit,setIsShowModalEdit] = useState(false)



  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const [inputValueTeacher, setInputValueTeacher] = useState("");
  const [openTeacher, setOpenTeacher] = useState(false);

  console.log(addedStudent);
  
  const convertToBase64 = (event) => {
    let reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = () => {
      console.log(reader.result);
      setCourseCover(reader.result)
    }
    reader.onerror = error => {
      console.log("Error",error);
    }
  }

  const addUserStudents = (studentID) => {
    let NewOption = Number(studentID);
    console.log(NewOption);
    
    setAddedStudent(prevList => {
      let filteredOption = prevList.includes(NewOption);
      if (!filteredOption) {
        console.log(typeof NewOption);
        return [...prevList, NewOption];
      }
      return [...prevList];
    });
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
        setAllUsers(result);
      });
  }

  useEffect(() => {
    getAllUsers();
    getAllClasses();
  }, []);

  const filteredUserTeacher = allUsers.filter(item => item.is_staff);
  const filteredUserStudent = allUsers.filter(item => item.is_staff == false);

  const addClassBtn = (event) => {
    event.preventDefault();

    // const formData = new FormData();
    // formData.append("title", titleClass);
    // formData.append("image", courseCover);
    // formData.append("teacher", userIsTeacher);
    // formData.append("students", addedStudent);

    let formBody = {
      title : titleClass,
      image:courseCover,
      teacher:userIsTeacher,
      students: addedStudent
    }
    
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    console.log(localStorageData.token);

    fetch("http://codeima.ir/api/v1/klass/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
          'Access-Control-Allow-Origin': 'http://localhost:3001',
          'Content-Type':'application/json'
        },
        credentials:true,
        body: JSON.stringify(formBody)
      
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          return res.json();
        }
      })
      .then((result) => {
        Swal.fire({
          title: "کلاس جدید ایجاد شد.",
          text: "",
          icon: "success",
          confirmButtonText: "تایید"
        }).then(() => getAllClasses());
      })
      .catch((err) => {
        console.log(err);
        showSwal("خطا،فیلد ها را مجدد بررسی کنید!", "", "error", "تلاش مجدد!");
      });

  };

  function getAllClasses() {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    fetch("http://codeima.ir/api/v1/klass/", {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`
      }
    })
      .then(res => res.json())
      .then(result => {
        setAllDataClasses(result);
      });
  }


  const findTecherName = (teaherId) => {
    const teacherData =   allUsers.filter(user => user.id == teaherId);
    return teacherData

  }
  
  const findStudents = (studentId) => {
    const studentsData = allUsers.filter(user => user.id == studentId.id)
    return studentsData
  }

  const editUser = (event) => {
    event.preventDefault();
    const formData = new FormData();
    if (titleClass != "") {
      formData.append("title", titleClass);
    }
    if (userIsTeacher != -1) {
      formData.append("teacher", userIsTeacher);
    }
    if (courseCover == "[object File]") {
      formData.append("image", courseCover);
    }
    if (addedStudent) {
      formData.append("students", addedStudent);
    }

    fetch(`http://codeima.ir/api/v1/klass/${getClassId}/`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`
      },
      body: formData
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          return res.json();
        }
      })
      .then((result) => {
        Swal.fire({
          title: "تغییرات با موفقیت انجام شد.",
          text: "",
          icon: "success",
          confirmButtonText: "تایید"
        }).then(() => {
          setIsShowModalEdit(false)
          getAllClasses()
        });
      })
      .catch((err) => {
        console.log(err);
        showSwal("خطا،فیلد ها را مجدد بررسی کنید!", "", "error", "تلاش مجدد!");
      });

      getAllClasses()
  };

  const deleteClassBtn = (classID) => {
    Swal.fire({
      title: "آیا از حذف مطمئن هستید؟",
      icon: "warning",
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
      showCancelButton: true,
      showCloseButton: true
    }).then((result)=>{
      if(result.isConfirmed){
            const localStorageData = JSON.parse(localStorage.getItem("user"));
            fetch(`http://codeima.ir/api/v1/klass/${classID}/`, {
              method: "DELETE",
              headers: {
                Authorization: `Bearer ${localStorageData.token}`
              }
            }).then(res => {
              if(res.ok){
                Swal.fire({
                  title: "با موفقیت حذف شد.",
                  text: "",
                  icon: "success",
                  confirmButtonText: "تایید"
                }).then(() => getAllClasses());
              }else{
                Swal.fire({
                  title:"خطایی رخ داد!",
                  text: "",
                  icon: "error",
                  confirmButtonText: "تلاش مجدد"
                })
              }
            })
      }
    })

    getAllClasses()
  }

  let menuRef = useRef()
  useEffect(()=>{
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)){
        setOpen(false)
      
      }
    }
    document.addEventListener("mousedown",handler)
  },[])
  
  let menuRefTeacher = useRef()
  useEffect(()=>{
    let handlerTeacher = (e) => {
      if(!menuRefTeacher.current.contains(e.target)){
        setOpenTeacher(false)
      
      }
    }
    document.addEventListener("mousedown",handlerTeacher)
  },[])

  
  return (
    <div className={s.RegisterMain}>
      <div className={s.nameSection}>
        <span>ایجاد گروه جدید</span>
      </div>
      <form action="POST" onSubmit={addClassBtn}>
        <div className={s.formBottom}>
          <div className={s.formbottom_form}>
            <div className={s.formbottom_names_contents}>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">عنوان کلاس</label>
                <input
                  type="text"
                  className="rounded-[7px] bg-slate-200 p-2"
                  id="title"
                  onChange={(e) => setTitleClass(e.target.value)}
                  value={titleClass}
                  autoComplete="title-name"
                  placeholder="اسم کلاس را وارد کنید"
                />
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">مربی</label>

                <div className="w-[100%] relative   font-medium "  
                  ref={menuRefTeacher} >
                  <div
                    onClick={() => setOpenTeacher(!open)}
                    className={`bg-slate-200 rounded-[7px]  w-full p-2 flex items-center justify-between `}
                  >
                    <div>انتخاب مربی</div>
                    <div className="flex items-center">
                      <div
                        onClick={() => {
                          setuserIsTeacher(-1);
                        }}
                      >
                        <svg
                          className="text-[18px]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M8.47 8.47a.75.75 0 0 1 1.06 0L12 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L13.06 12l2.47 2.47a.75.75 0 0 1-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 1 1-1.06-1.06L10.94 12L8.47 9.53a.75.75 0 0 1 0-1.06"
                          />
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M7.317 3.769a42.502 42.502 0 0 1 9.366 0c1.827.204 3.302 1.643 3.516 3.48c.37 3.157.37 6.346 0 9.503c-.215 1.837-1.69 3.275-3.516 3.48a42.5 42.5 0 0 1-9.366 0c-1.827-.205-3.302-1.643-3.516-3.48a40.903 40.903 0 0 1 0-9.503c.214-1.837 1.69-3.276 3.516-3.48m9.2 1.49a41.001 41.001 0 0 0-9.034 0A2.486 2.486 0 0 0 5.29 7.424a39.402 39.402 0 0 0 0 9.154a2.486 2.486 0 0 0 2.193 2.164c2.977.332 6.057.332 9.034 0a2.486 2.486 0 0 0 2.192-2.164a39.401 39.401 0 0 0 0-9.154a2.486 2.486 0 0 0-2.192-2.163"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <svg
                        className="text-[20px] text-title"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m7 10l5 5l5-5"
                        />
                      </svg>
                    </div>
                  </div>
                  <ul
                    className={`bg-slate-200 w-full mt-2  absolute   overflow-y-auto rounded-[7px] ${
                      openTeacher ? "max-h-60" : "max-h-0"
                    } `}
                  >
                    <div className="flex w-full items-center px-2 sticky top-0 rounded-[10px] bg-blue-600">
                      <input
                        type="text"
                        value={inputValueTeacher}
                        onChange={(e) =>
                          setInputValueTeacher(e.target.value.toLowerCase())
                        }
                        placeholder="جستجو "
                        className="placeholder:text-white bg-blue-600 text-white w-full p-2 outline-none"
                      />
                      <svg
                        className="text-white text-[25px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="m16.31 15.561l4.114 4.115l-.848.848l-4.123-4.123a7 7 0 1 1 .857-.84M16.8 11a5.8 5.8 0 1 0-11.6 0a5.8 5.8 0 0 0 11.6 0"
                        />
                      </svg>
                    </div>
                    {filteredUserTeacher?.map((item, index) => (
                      <li
                        key={item.id}
                        className={` w-[100%] rounded-[10px] p-2 flex items-center  justify-between  text-sm hover:bg-sky-600 hover:text-white
                        ${
                          (item.first_name + item.last_name)
                            .toLowerCase()
                            .includes(inputValueTeacher)
                            ? "block"
                            : "hidden"
                        }`}
                        onClick={() => {
                          setuserIsTeacher(item.id);
                          setInputValueTeacher("");
                        }}
                      >
                        <p>
                          {" "}
                          {index + 1}. {item.first_name} {item.last_name}
                        </p>
                        {item.id == userIsTeacher && (
                          <div>
                            <svg
                              className="text-[15px] text-blue-800"
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 48 48"
                            >
                              <g
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2.7"
                              >
                                <path d="M42 20v19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21" />
                                <path d="m16 20l10 8L41 7" />
                              </g>
                            </svg>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">فراگیران</label>

                <div
                  className="w-[100%] relative   font-medium "
                  ref={menuRef}
                >
                  <div
                    onClick={() => setOpen(!open)}
                    className={`bg-slate-200 rounded-[7px]  w-full p-2 flex items-center justify-between  ${
                      !selected && "text-gray-700"
                    }`}
                  >
                    <div>
                      {selected
                        ? selected?.length > 25
                          ? selected?.substring(0, 25) + "..."
                          : selected
                        : "انتخاب فراگیران"}
                    </div>
                    <div className="flex items-center">
                      <div
                        onClick={() => {
                          setAddedStudent([]);
                        }}
                      >
                        <svg
                          className="text-[18px]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M8.47 8.47a.75.75 0 0 1 1.06 0L12 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L13.06 12l2.47 2.47a.75.75 0 0 1-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 1 1-1.06-1.06L10.94 12L8.47 9.53a.75.75 0 0 1 0-1.06"
                          />
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M7.317 3.769a42.502 42.502 0 0 1 9.366 0c1.827.204 3.302 1.643 3.516 3.48c.37 3.157.37 6.346 0 9.503c-.215 1.837-1.69 3.275-3.516 3.48a42.5 42.5 0 0 1-9.366 0c-1.827-.205-3.302-1.643-3.516-3.48a40.903 40.903 0 0 1 0-9.503c.214-1.837 1.69-3.276 3.516-3.48m9.2 1.49a41.001 41.001 0 0 0-9.034 0A2.486 2.486 0 0 0 5.29 7.424a39.402 39.402 0 0 0 0 9.154a2.486 2.486 0 0 0 2.193 2.164c2.977.332 6.057.332 9.034 0a2.486 2.486 0 0 0 2.192-2.164a39.401 39.401 0 0 0 0-9.154a2.486 2.486 0 0 0-2.192-2.163"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <svg
                        className="text-[20px] text-title"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m7 10l5 5l5-5"
                        />
                      </svg>
                    </div>
                  </div>
                  <ul
                    className={`bg-slate-200 w-full mt-2  absolute   overflow-y-auto rounded-[7px] ${
                      open ? "max-h-60" : "max-h-0"
                    } `}
                  >
                    <div className="flex w-full items-center px-2 sticky top-0 rounded-[10px] bg-blue-600">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) =>
                          setInputValue(e.target.value.toLowerCase())
                        }
                        placeholder="جستجو "
                        className="placeholder:text-white bg-blue-600 text-white w-full p-2 outline-none"
                      />
                      <svg
                        className="text-white text-[25px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="m16.31 15.561l4.114 4.115l-.848.848l-4.123-4.123a7 7 0 1 1 .857-.84M16.8 11a5.8 5.8 0 1 0-11.6 0a5.8 5.8 0 0 0 11.6 0"
                        />
                      </svg>
                    </div>
                    {filteredUserStudent?.map((item, index) => (
                      <li
                        key={item.id}
                        className={` w-[100%] rounded-[10px] p-2 flex items-center  justify-between  text-sm hover:bg-sky-600 hover:text-white
                        ${
                          (item.first_name + item.last_name)
                            .toLowerCase()
                            .includes(inputValue)
                            ? "block"
                            : "hidden"
                        }`}
                        onClick={() => {
                          if (
                            item.first_name.toLowerCase() !==
                            selected.toLowerCase()
                          ) {
                            setSelected(item.first_name + " " + item.last_name);
                            addUserStudents(item.id);
                            setInputValue("");
                          }
                        }}
                      >
                        <p>
                          {" "}
                          {index + 1}. {item.first_name} {item.last_name}
                        </p>
                        {addedStudent.includes(item.id) && (
                          <div>
                            <svg
                              className="text-[15px] text-blue-800"
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 48 48"
                            >
                              <g
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2.7"
                              >
                                <path d="M42 20v19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21" />
                                <path d="m16 20l10 8L41 7" />
                              </g>
                            </svg>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">عکس</label>
                <input
                  type="file"
                  className={s.formbottom_names_content_file}
                  onChange={convertToBase64}
                />
                <img src={courseCover} alt="" />
              </div>
            </div>
          </div>
        </div>
        <button className={s.addUserBtn} type="submit">
          افزودن کاربر جدید
        </button>
      </form>

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
                  <p>عنوان درس</p>
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
                  <p>مربی</p>
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
                  <p>پوستر دوره</p>
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
                  <p>فراگیران</p>
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
                  <p>تغییرات</p>
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
                  <p>حذف</p>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {allDataClasses.map((classData, index) => (
              <tr key={classData.id}>
                <td>
                  <div>
                    <p>{index + 1}</p>
                  </div>
                </td>
                <td>
                  <div className={s.tdSituationTicket}>
                    <p>{classData.title}</p>
                  </div>
                </td>
                <td>
                  <div className={s.tdSituationTicket}>
                    {findTecherName(classData.teacher).map((item) => (
                      <p>
                        {item.first_name} {item.last_name}
                      </p>
                    ))}
                  </div>
                </td>
                <td>
                  <div className={s.imageDivTable}>
                    <img
                      className={s.imageTableClass}
                      src={classData.image}
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <div className={s.tdSituationTicket}>
                    {findStudents(classData.students).map((item) => (
                      <p>
                        {item.first_name} {item.last_name}
                      </p>
                    ))}
                  </div>
                </td>
                <td>
                  <div>
                    <button
                      onClick={() => {
                        setGetClassId(classData.id);
                        setIsShowModalEdit(true);
                        setAddedStudent([])
                        setTitleClass("")
                        setuserIsTeacher(-1)
                      }}
                    >
                      <svg
                        className="text-[20px] text-title"
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
                <td>
                  <div>
                    <button
                      onClick={() => {
                        deleteClassBtn(classData.id);
                     
                      }}
                    >
                      <svg
                        className="text-[20px] text-title"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.3"
                          d="m19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128c-.957.584-2.24.584-4.806.584c-2.57 0-3.855 0-4.814-.585a4 4 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5M9 11.735h6m-4.5 3.919h3M3 5.5h18m-4.945 0l-.682-1.408c-.454-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.034 2c-1.065 0-1.598 0-2.039.234a2 2 0 0 0-.278.18c-.396.303-.617.788-1.059 1.757L8.053 5.5"
                          color="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* {isShowModalEdit && (
        <div className={s.mainNewRegister}>
          <div className={s.RegisterMainModal}>
            <div className={s.nameSection}>
              <span>ادیت کاربر</span>
              <div onClick={() => setIsShowModalEdit(false)}>
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
        <div className={s.formBottom}>
          <div className={s.formbottom_form}>
            <div className={s.formbottom_names_contents}>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">عنوان کلاس</label>
                <input
                  type="text"
                  className="rounded-[7px] bg-slate-200 p-2"
                  id="title"
                  onChange={(e) => setTitleClass(e.target.value)}
                  value={titleClass}
                  autoComplete="title-name"
                  placeholder="اسم کلاس را وارد کنید"
                />
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">مربی</label>

                <div className="w-[100%] relative   font-medium " ref={menuRef}>
                  <div
                    onClick={() => setOpenTeacher(!open)}
                    className={`bg-slate-200 rounded-[7px]  w-full p-2 flex items-center justify-between `}
                  >
                    <div>انتخاب مربی</div>
                    <div className="flex items-center">
                      <div
                        onClick={() => {
                          setuserIsTeacher(-1);
                        }}
                      >
                        <svg
                          className="text-[18px]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M8.47 8.47a.75.75 0 0 1 1.06 0L12 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L13.06 12l2.47 2.47a.75.75 0 0 1-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 1 1-1.06-1.06L10.94 12L8.47 9.53a.75.75 0 0 1 0-1.06"
                          />
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M7.317 3.769a42.502 42.502 0 0 1 9.366 0c1.827.204 3.302 1.643 3.516 3.48c.37 3.157.37 6.346 0 9.503c-.215 1.837-1.69 3.275-3.516 3.48a42.5 42.5 0 0 1-9.366 0c-1.827-.205-3.302-1.643-3.516-3.48a40.903 40.903 0 0 1 0-9.503c.214-1.837 1.69-3.276 3.516-3.48m9.2 1.49a41.001 41.001 0 0 0-9.034 0A2.486 2.486 0 0 0 5.29 7.424a39.402 39.402 0 0 0 0 9.154a2.486 2.486 0 0 0 2.193 2.164c2.977.332 6.057.332 9.034 0a2.486 2.486 0 0 0 2.192-2.164a39.401 39.401 0 0 0 0-9.154a2.486 2.486 0 0 0-2.192-2.163"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <svg
                        className="text-[20px] text-title"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m7 10l5 5l5-5"
                        />
                      </svg>
                    </div>
                  </div>
                  <ul
                    className={`bg-slate-200 w-full mt-2  absolute   overflow-y-auto rounded-[7px] ${
                      openTeacher ? "max-h-60" : "max-h-0"
                    } `}
                  >
                    <div className="flex w-full items-center px-2 sticky top-0 rounded-[10px] bg-blue-600">
                      <input
                        type="text"
                        value={inputValueTeacher}
                        onChange={(e) =>
                          setInputValueTeacher(e.target.value.toLowerCase())
                        }
                        placeholder="جستجو "
                        className="placeholder:text-white bg-blue-600 text-white w-full p-2 outline-none"
                      />
                      <svg
                        className="text-white text-[25px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="m16.31 15.561l4.114 4.115l-.848.848l-4.123-4.123a7 7 0 1 1 .857-.84M16.8 11a5.8 5.8 0 1 0-11.6 0a5.8 5.8 0 0 0 11.6 0"
                        />
                      </svg>
                    </div>
                    {filteredUserTeacher?.map((item, index) => (
                      <li
                        key={item.id}
                        className={` w-[100%] rounded-[10px] p-2 flex items-center  justify-between  text-sm hover:bg-sky-600 hover:text-white
                        ${
                          (item.first_name + item.last_name)
                            .toLowerCase()
                            .includes(inputValueTeacher)
                            ? "block"
                            : "hidden"
                        }`}
                        onClick={() => {
                          setuserIsTeacher(item.id);
                          setInputValueTeacher("");
                        }}
                      >
                        <p>
                          {" "}
                          {index + 1}. {item.first_name} {item.last_name}
                        </p>
                        {item.id == userIsTeacher && (
                          <div>
                            <svg
                              className="text-[15px] text-blue-800"
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 48 48"
                            >
                              <g
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2.7"
                              >
                                <path d="M42 20v19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21" />
                                <path d="m16 20l10 8L41 7" />
                              </g>
                            </svg>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">فراگیران</label>

                <div
                  className="w-[100%] relative   font-medium "
                  ref={menuRefTeacher}
                >
                  <div
                    onClick={() => setOpen(!open)}
                    className={`bg-slate-200 rounded-[7px]  w-full p-2 flex items-center justify-between  ${
                      !selected && "text-gray-700"
                    }`}
                  >
                    <div>
                      {selected
                        ? selected?.length > 25
                          ? selected?.substring(0, 25) + "..."
                          : selected
                        : "انتخاب فراگیران"}
                    </div>
                    <div className="flex items-center">
                      <div
                        onClick={() => {
                          setAddedStudent([]);
                        }}
                      >
                        <svg
                          className="text-[18px]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M8.47 8.47a.75.75 0 0 1 1.06 0L12 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L13.06 12l2.47 2.47a.75.75 0 0 1-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 1 1-1.06-1.06L10.94 12L8.47 9.53a.75.75 0 0 1 0-1.06"
                          />
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M7.317 3.769a42.502 42.502 0 0 1 9.366 0c1.827.204 3.302 1.643 3.516 3.48c.37 3.157.37 6.346 0 9.503c-.215 1.837-1.69 3.275-3.516 3.48a42.5 42.5 0 0 1-9.366 0c-1.827-.205-3.302-1.643-3.516-3.48a40.903 40.903 0 0 1 0-9.503c.214-1.837 1.69-3.276 3.516-3.48m9.2 1.49a41.001 41.001 0 0 0-9.034 0A2.486 2.486 0 0 0 5.29 7.424a39.402 39.402 0 0 0 0 9.154a2.486 2.486 0 0 0 2.193 2.164c2.977.332 6.057.332 9.034 0a2.486 2.486 0 0 0 2.192-2.164a39.401 39.401 0 0 0 0-9.154a2.486 2.486 0 0 0-2.192-2.163"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <svg
                        className="text-[20px] text-title"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m7 10l5 5l5-5"
                        />
                      </svg>
                    </div>
                  </div>
                  <ul
                    className={`bg-slate-200 w-full mt-2  absolute   overflow-y-auto rounded-[7px] ${
                      open ? "max-h-60" : "max-h-0"
                    } `}
                  >
                    <div className="flex w-full items-center px-2 sticky top-0 rounded-[10px] bg-blue-600">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) =>
                          setInputValue(e.target.value.toLowerCase())
                        }
                        placeholder="جستجو "
                        className="placeholder:text-white bg-blue-600 text-white w-full p-2 outline-none"
                      />
                      <svg
                        className="text-white text-[25px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="m16.31 15.561l4.114 4.115l-.848.848l-4.123-4.123a7 7 0 1 1 .857-.84M16.8 11a5.8 5.8 0 1 0-11.6 0a5.8 5.8 0 0 0 11.6 0"
                        />
                      </svg>
                    </div>
                    {filteredUserStudent?.map((item, index) => (
                      <li
                        key={item.id}
                        className={` w-[100%] rounded-[10px] p-2 flex items-center  justify-between  text-sm hover:bg-sky-600 hover:text-white
                        ${
                          (item.first_name + item.last_name)
                            .toLowerCase()
                            .includes(inputValue)
                            ? "block"
                            : "hidden"
                        }`}
                        onClick={() => {
                          if (
                            item.first_name.toLowerCase() !==
                            selected.toLowerCase()
                          ) {
                            setSelected(item.first_name + " " + item.last_name);
                            addUserStudents(item.id);
                            setInputValue("");
                          }
                        }}
                      >
                        <p>
                          {" "}
                          {index + 1}. {item.first_name} {item.last_name}
                        </p>
                        {addedStudent.includes(item.id) && (
                          <div>
                            <svg
                              className="text-[15px] text-blue-800"
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 48 48"
                            >
                              <g
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2.7"
                              >
                                <path d="M42 20v19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21" />
                                <path d="m16 20l10 8L41 7" />
                              </g>
                            </svg>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">عکس</label>
                <input
                  type="file"
                  className={s.formbottom_names_content_file}
                  onChange={(event) => {
                    setCourseCover(event.target.files[0]);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <button className={s.addUserBtn} type="submit">
          افزودن کاربر جدید
        </button>
      </form>
            <form action="POST" onSubmit={editUser}>
              <div className={s.formBottom}>
                <div className={s.formbottom_form}>
                  <div className={s.formbottom_names_contents}>
                    <div className={s.formbottom_names_content}>
                      <label htmlFor="">عنوان کلاس</label>
                      <input
                        type="text"
                        id="title"
                        className="rounded-[7px] bg-slate-200 p-2"
                        onChange={(e) => setTitleClass(e.target.value)}
                        value={titleClass}
                        autoComplete="title-name"
                      />
                    </div>
                    <div className={s.formbottom_names_content}>
                      <label htmlFor="">مربی</label>
                      <select
                        name="teacher"
                        id="teacher"
                        value={userIsTeacher}
                        onChange={(e) =>
                          setuserIsTeacher(parseInt(e.target.value))
                        }
                      >
                        <option value="-1">انتخاب مربی</option>
                        {filteredUserTeacher.map((items) => (
                          <option key={items.id} value={items.id}>
                            {items.first_name} {items.last_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={s.formbottom_names_content}>
                      <label htmlFor="">فراگیران</label>
                      <select
                        name="teacher"
                        id="teacher"
                        value={addedStudent}
                        onChange={addUserStudents}
                      >
                        <option value="-1">انتخاب فراگیر</option>
                        {filteredUserStudent.map((items) => (
                          <option key={items.id} value={items.id}>
                            {items.first_name} {items.last_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={s.formbottom_names_content}>
                      <label htmlFor="">عکس</label>
                      <input
                        type="file"
                        className={s.formbottom_names_content_file}
                        onChange={(event) => {
                          setCourseCover(event.target.files[0]);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button className={s.addUserBtn} type="submit">
                افزودن کاربر جدید
              </button>
            </form>
          </div>
        </div>
      )} */}
    </div>
  );
}