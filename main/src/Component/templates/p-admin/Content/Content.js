"use client"
import React, { useState,useEffect,useRef } from 'react'
import s from "./Content.module.css"
import Link from 'next/link';
export default function Content() {
    const [allDataClasses, setAllDataClasses] = useState([]);
    console.log(allDataClasses);


    const [titleContent,setTitleContent]  = useState("")
    const [courseCover, setCourseCover] = useState({});
    const [addedContentSet,setAddedContentSet] = useState(-1)

    const [openClassSelect,setOpenClassSelect]  = useState(false)
    const [selected, setSelected] = useState("");
    const [inputValue, setInputValue] = useState("");

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
          })
          .catch(err => console.log(err))
      }

      useEffect(() => {
          getAllClasses();
      },[])

    const addContentBtn = (event) => {
        event.preventDefault();
    
    
        let formBody = {
          title : titleClass,
          image:courseCover,
          teacher:userIsTeacher,
          students: addedStudent
        }
        
        const localStorageData = JSON.parse(localStorage.getItem("user"));
    
        fetch("http://codeima.ir/api/v1/Content/", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorageData.token}`,
              'Content-Type':'application/json'
            },
            credentials:'same-origin',
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
    
  const convertToBase64 = (event,setSTate) => {
    let reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = () => {
      setCourseCover(reader.result)
    }
    reader.onerror = error => {
      console.log("Error",error);
    }
  }

    let menuRefContent = useRef()
    useEffect(()=>{
      let handler = (e) => {
        if(e.target !== null){
          if( !menuRefContent.current.contains(e.target)){
            setOpenClassSelect(false)
          }
        }
      }
      document.addEventListener("mousedown",handler)
    },[])


  return (
    <div className={s.RegisterMain}>
      <div className={s.nameSection}>
        <span>ایجاد کلاس جدید</span>
        <Link
          href="/p-admin/classes"
          className="bg-title text-white flex items-center rounded-[7px] px-4 py-2 "
        >
          برگشت
        </Link>
      </div>
      <form action="POST" onSubmit={addContentBtn}>
        <div className={s.formBottom}>
          <div className={s.formbottom_form}>
            <div className={s.formbottom_names_contents}>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">عنوان فاز</label>
                <input
                  type="text"
                  className="rounded-[7px] bg-slate-200 p-2"
                  id="title"
                  onChange={(e) => setTitleContent(e.target.value)}
                  value={titleContent}
                  autoComplete="title-name"
                  placeholder="اسم کلاس را وارد کنید"
                />
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">کلاس ها</label>

                <div className="w-[100%] relative   font-medium "
                    ref={menuRefContent}>
              
                  <div
                    onClick={() => setOpenClassSelect(!openClassSelect)}
                    
                    className={`bg-slate-200 rounded-[7px]  w-full p-2 flex items-center justify-between  ${
                      !selected && "text-gray-700"
                    }`}
                  >
                    <div>
                    
                      {selected
                        ? selected?.length > 25
                          ? selected?.substring(0, 25) + "..."
                          : selected
                        : "انتخاب کلاس"}
                    </div>
                    <div className="flex items-center">
                      <div
                        onClick={() => {
                            setAddedContentSet(-1);
                            setInputValue("")
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
                      openClassSelect ? "max-h-60" : "max-h-0"
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
                    {allDataClasses?.map((item, index) => (
                      <li
                        key={item.id}
                        className={` w-[100%] rounded-[10px] p-2 flex items-center  justify-between  text-sm hover:bg-sky-600 hover:text-white
                      ${
                        (item.title)
                          .toLowerCase()
                          .includes(inputValue)
                          ? "block"
                          : "hidden"
                      }`}
                        onClick={() => {
                          if (
                            item.title.toLowerCase() !==
                            selected.toLowerCase()
                          ) {
                            setSelected(item.title);
                            setAddedContentSet(item.content_set);
                            setInputValue("");
                          }
                        }}
                      >
                        <p>
                          {" "}
                          {index + 1}. {item.title}
                        </p>
                        {addedContentSet == item.content_set && (
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
                <label htmlFor="">فایل تمرین</label>
                <div className="flex items-center">
                  <input
                    type="file"
                    className={s.formbottom_names_content_file}
                    onChange={convertToBase64}
                  />
                  
                </div>
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">عکس</label>
                <div className="flex items-center">
                  <input
                    type="file"
                    className={s.formbottom_names_content_file}
                    onChange={convertToBase64}
                  />
                  {courseCover && (
                    <img
                      className="rounded-[7px] w-[70%]"
                      src={courseCover}
                      alt="picContent"
                    />
                  )}
                </div>
              </div>
            
            </div>
          </div>
        </div>
        <button className={s.addUserBtn} type="submit">
          افزودن محتوای جدید
        </button>
      </form>
    </div>
  );
}
