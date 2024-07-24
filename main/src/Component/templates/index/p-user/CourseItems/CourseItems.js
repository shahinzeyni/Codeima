"use client"
import React, { useState } from 'react'
import s from "./CourseItems.module.css"
import CourseItem from '@/Component/modules/p-user/CourseItem';
import Link from 'next/link';
export default function CourseItems() {
    const [showModalCourseItem,setShowModalCourseItem] = useState(false)

    return (
    <div className={s.CourseItemsMain}>
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
      <div className={s.courseItemsContent}>
        <div className={s.courseItem}>
          <Link href="/p-user/session/python/1" className={s.courseItemLink}>
            <div className={s.modalBackDropFilter}></div>
            <div className={s.courseItemLink_title}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M5.25 10.055V8a6.75 6.75 0 0 1 13.5 0v2.055c1.115.083 1.84.293 2.371.824C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16c0-2.828 0-4.243.879-5.121c.53-.531 1.256-.741 2.371-.824M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004C16.867 10 16.451 10 16 10H8c-.452 0-.867 0-1.25.004z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>نمره دهی انجام نشده است</p>
            </div>

            <div className={s.courseImage}>
              <img src="/js_project.png" alt="picItem" />
            </div>
          </Link>
        </div>

        <div className={s.courseItem}>
          <Link className={s.courseItemLink} href="">
            <div className={s.modalBackDropFilter}></div>
            <div className={s.courseItemLink_title}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.75 8a5.25 5.25 0 0 1 10.335-1.313a.75.75 0 0 0 1.452-.374A6.75 6.75 0 0 0 5.25 8v2.055c-1.115.083-1.84.293-2.371.824C2 11.757 2 13.172 2 16c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16c0-2.828 0-4.243-.879-5.121C20.243 10 18.828 10 16 10H8c-.452 0-.867 0-1.25.004z"
                />
              </svg>
              <p>مشاهده فاز</p>
            </div>

            <div className={s.courseImage}>
              <img src="/js_project.png" alt="picItem" />
            </div>
          </Link>
        </div>

        <div className={s.courseItem}>
          <Link className={s.courseItemLink} href="">
            <div className={s.modalBackDropFilter}></div>
            <div className={s.courseItemLink_title}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M5.25 10.055V8a6.75 6.75 0 0 1 13.5 0v2.055c1.115.083 1.84.293 2.371.824C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16c0-2.828 0-4.243.879-5.121c.53-.531 1.256-.741 2.371-.824M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004C16.867 10 16.451 10 16 10H8c-.452 0-.867 0-1.25.004z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>آزمون جامع</p>
            </div>

            <div className={s.courseImage}>
              <img src="/js_project.png" alt="picItem" />
            </div>
          </Link>
        </div>

        <div className={s.courseItem}>
          <Link className={s.courseItemLink} href="">
            <div className={s.modalBackDropFilter}></div>
            <div className={s.courseItemLink_title}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M5.25 10.055V8a6.75 6.75 0 0 1 13.5 0v2.055c1.115.083 1.84.293 2.371.824C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16c0-2.828 0-4.243.879-5.121c.53-.531 1.256-.741 2.371-.824M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004C16.867 10 16.451 10 16 10H8c-.452 0-.867 0-1.25.004z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>جلسه آنلاین</p>
            </div>

            <div className={s.courseImage}>
              <img src="/js_project.png" alt="picItem" />
            </div>
          </Link>
        </div>

       ح قسمت کامنت//////////////////////////////////
      </div>
    </div>
  );
}

