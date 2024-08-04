"use client"
import Swal from 'sweetalert2'
import { showSwal } from '@/utils/swalHelper'
import React, { useContext, useState } from 'react'
import s from "./Login.module.css"
import { useRouter } from 'next/navigation';
// import { redirect } from 'next/navigation'
import AuthContext from '@/AuthContext/AuthContext';
import Link from 'next/link'
export default function Login() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const router = useRouter()
    const authContext = useContext(AuthContext)

    console.log(authContext.token);

    const userlogin = async (event) =>  {
        event.preventDefault()


        let userData = {
          phone: "+989331847663",
          password: "1234"
        };

         fetch("http://codeima.ir/api/token/", {
           method: "POST",
           headers: {
             "Content-Type": "application/json"
           },
           body: JSON.stringify(userData)
         })
         .then((res) => {
          if(!res.ok) {
            return res.text().then((text) => {
              throw new Error(text)
            })
          }else{
            return res.json()
          }
         })
         .then((result) => {
          Swal.fire({
            title: "با موفقیت وارد شدید.",
            text: "",
            icon: "success",
            confirmButtonText: "بزن بریم"
          }).then(() => {
            router.push('/p-user')
          })
            console.log(result.access)
            authContext.login({},result.access)
            console.log(authContext.token)
         })
         .catch(err => {
          console.log(err);
          showSwal("نام کاربری ویا رمز عبور صحیح نمی باشد!","",'error',"تلاش مجدد!")
         })
    }





  return (
    <div className={s.loginMain}>
      <div className={s.login_right}>
        <img
          className={s.login_right_img}
          src="/image/svgs/Logos/logo.svg"
          alt="logo"
        />
        <div className={s.login_left_main}>
        <div className={s.login_tight_title}>
          <h1>ورود به کدیما آکادمی</h1>
        </div>
        <form action="#" className={s.form_login}>
          <div className={s.loginInputData}>
            <div className={s.username_input}>
              <div className={s.input_content}>
                <input
                  type="text"
                  value={username}
                  placeholder='نام کاربری'
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
            </div>
            <div className={s.password_input}>
              <div className={s.input_content}>
                <input
                  type="text"
                  value={password}
                  placeholder='رمز عبور'
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={s.loginBtn}>
            <button type='submit'
            onClick={userlogin}
             >ورود</button>
             <div>ثبت نام</div>
          </div>
        </form>
        </div>
      </div>
      <div className={s.login_left}>
        <img src="/image//svgs/login/login-person.svg" alt="pic_login" />
      </div>
    </div>
  );
}
