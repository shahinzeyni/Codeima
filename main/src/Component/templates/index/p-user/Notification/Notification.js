"use client"
import React, { useState } from 'react'
import s from "./Notification.module.css"
import { cn } from '@/utils/cn';
export default function Notification() {
  const[BtnToggle,setBtnToggle] = useState("read")
  return (
    <div className={s.notifMain}>
      <div className={s.nameSection}>
        <span> پیام های مــــن</span>
      </div>

      <div className={s.notifList}>
        <ul>
          <li className={`${s.notifItem} ${BtnToggle === "unread" ? s.active : null}`}
          onClick={()=>{
            setBtnToggle("unread")
          }}>

          پیام های خوانده نشده</li>
          <li className={`${s.notifItem} ${BtnToggle === "read" ? s.active : null}`}
          onClick={()=>{
            setBtnToggle("read")
          }}
          >پیام های خوانده شده</li>
        </ul>
        <div className={s.notifContents}>
          {
            BtnToggle === "read" ? (
              <div> پیام جدیدی وجود ندارد!</div>
            ):(
             <div> پیام خوانده نشده ای وجود ندارد!</div>
            )
          }
        </div>
      </div>
    </div>
  );
}
