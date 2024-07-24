import React from 'react'
import s from "./AddTicket.module.css"
export default function AddTicket() {
  return (
    <div className={s.AddTicketMain}>
      <div className={s.nameSection}>
        <span>ثبت در خواست پشتیبانی</span>
      </div>
      <div className={s.addTicketContent}>
        <div className={s.inputTitle}>
            <label htmlFor="">موضوع تیکت</label>
            <input type="text" />
        </div>
        <div className={s.selectMain}>
          <label htmlFor="">دپارتمان</label>
          <select name="" id="departman">
            <option value="-1">انتخاب کنید</option>
            <option value="1">دوره های آموزشی </option>
            <option value="2">امور مالی </option>
            <option value="3">تغییرات پروفایل </option>
            <option value="4">درخواست مشاوره </option>
            <option value="5">ارسال مدارک </option>
          </select>
        </div>
        <div className={s.inputDescription}>
            <label htmlFor="">متن تیکت</label>
            <textarea name="" id=""></textarea>
        </div>
      </div>
    </div>
  );
}
