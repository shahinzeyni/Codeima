import React from 'react'
import s from "./Notice.module.css"
export default function Notice() {
  return (
    <div className={s.noticeMain}>
        <div className={s.noticeImg}>
            <img src="/jango.png" alt="picNotice" />
        </div>
    </div>
  )
}
