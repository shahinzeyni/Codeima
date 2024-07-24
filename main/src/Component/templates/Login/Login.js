"use client"
import React, { useState } from 'react'
import s from "./Login.module.css"
import Link from 'next/link'
export default function Login() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")


    const userlogin = async (event) =>  {
        event.preventDefault()

        const userData = {
          phone: username,
          password: password
        };
        console.log(userData);
        const res = await fetch("http://localhost:8000/api/token/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userData)
        })
        // const data = await res.json()
        console.log(res);
        // console.log(data);
        // console.log(res.status);
        //   .then((res) => res.json())
        //   .then((result) => {
        //     console.log(result);
        //   });
    }





  return (
    <div className={s.loginMain}>
      <div className={s.login_right}>
        <img
          className={s.login_right_img}
          src="/image/svgs/Logos/logo.svg"
          alt="logo"
        />
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
          </div>
        </form>
      </div>
      <div className={s.login_left}>
        <img src="/image//svgs/login/login-person.svg" alt="pic_login" />
      </div>
    </div>
  );
}
