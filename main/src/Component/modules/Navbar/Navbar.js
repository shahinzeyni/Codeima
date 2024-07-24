import React from 'react'
import styles from  "./Navbar.module.css";
import { cn } from '@/utils/cn';

export default function Navbar() {
  return (
    <header className={styles.main_Navbar}>
      <div className={cn(styles.containerNav, "container")}>
        <nav className={styles.nav}>
          <div className={styles.navbarIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
          <div className={styles.navBar_right}>
            <div className={styles.navbar_rightLogo}>
              <img src="/image/svgs/Logos/logo.svg" alt="logo" />
              
            </div>
            <ul className={styles.navbarUlList}>
              <li className="relative">مسیر برنامه نویسی</li>
              <li>دوره های آموزشی</li>
              <li>آموزش کلاسی</li>
              <li>بلاگ</li>
            </ul>
          </div>
          {/* <div className={styles.navBar_left}>
            <button className={styles.btnNavbar1}>ثبت نام رایگان</button>
            <button className={styles.btnNavbar2}></button>

          </div> */}
          <div className={styles.landingBtns}>
                    <button className={styles.navbar_btn1}> ثبت نام رایگان </button>
                    <button className={styles.navbar_btn2}>  ورود</button>

                </div>
        </nav>
      </div>
    </header>
  );
}

// {cn(styles.main_Navbar,"mt-9","mt-8")}