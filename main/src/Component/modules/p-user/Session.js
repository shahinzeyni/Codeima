import React from 'react'
import s from "./Session.module.css"
import Link from 'next/link';
export default function Session() {
  return (
    <div className={s.sessionMain}>
    BreadCramp-------------
      <div className={s.nameSection}>
        <span>درسنامه پایتون ترم اول</span>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20.93 14A7 7 0 0 1 14 20H5.5v-2H14a5 5 0 1 0 0-10H6.914l2.5 2.5L8 11.914L3.086 7L8 2.086L9.414 3.5L6.914 6H14a7 7 0 0 1 7 7v1z"
            />
          </svg>
          <span> برگشت به عقب</span>
        </div>
      </div>
      <div className={s.sessionContents}>
        <div className={s.sessionVideo}>
            <video src="/React291-session-intro.mp4">1</video>
        </div>
        <div className={s.sessionDownload}>
            <Link href="">دانلود جزوه</Link>
            <Link href="">دانلود گواهی دوره</Link>
            <Link href="">تمرین های دوره</Link>
            <Link href="">تمارین بیشتر </Link>
            <Link href="">دانلود جواب هر تمرین (نمایش برای مربی)</Link>
        </div>

        <div className={s.sessionUplaodFile}>
            آپلود فایل
        </div>
      </div>
    </div>
  );
}
