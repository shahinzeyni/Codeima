import React from "react";
import s from "./Profile.module.css";

export default function Profile() {
  return (
    <div className={s.profileMain}>
      <div className={s.nameSection}>
        <span> پروفایل من</span>
      </div>
      <form action="">
        <div className={s.formTop}>
          <div className={s.formTop_avatar}>
            <img src="/image/programing-logos/python.svg" alt="Avatar" />
          </div>
          <input type="file" />
        </div>
        <div className={s.formBottom}>
          <div className={s.formbottom_form}>
            <div className={s.formbottom_names_head}>
              <span>اطلاعات پایه</span>
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
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6M11.4 10h1.2v7h-1.2zm.6-1a1 1 0 1 1 0-2a1 1 0 0 1 0 2"
                  />
                </svg>
                <p>برای تغییر اطلاعات پایه با پشتیبانی تماس بگیرید.</p>
              </div>
            </div>
          </div>
          <div className={s.formbottom_form}>
            <div className={s.formbottom_names_contents}>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">تاریخ تولد</label>
                <input
                  type="text"
                  id="birthdat"
                  disabled
                  autoComplete="family-name"
                />
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">شماره تماس اول</label>
                <input
                  type="text"
                  id="birthdat"
                  disabled
                  value="09331847663"
                  autoComplete="family-name"
                />
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">شماره تماس دوم</label>
                <input
                  type="text"
                  id="birthdat"
                  disabled
                  value="09331847663"
                  autoComplete="family-name"
                />
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">استان </label>
                <input
                  type="text"
                  id="place_location"
                  disabled
                  value="آذربایجان شرقی"
                  autoComplete="family-name"
                />
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">نام مدرسه</label>
                <input
                  type="text"
                  id="school_name"
                  disabled
                  value="فردوسی"
                  autoComplete="family-name"
                />
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">کد ملی</label>
                <input
                  type="text"
                  id="Id_card"
                  disabled
                  value="136001564156"
                  autoComplete="family-name"
                />
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor=""> شهر</label>
                <input
                  type="text"
                  id="city_name"
                  value="تبریز"
                  disabled
                  autoComplete="family-name"
                />
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">نام</label>
                <input
                  type="text"
                  id="first_name"
                  value="شاهین"
                  disabled
                  autoComplete="family-name"
                />
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="">نام خانوادگی</label>
                <input
                  type="text"
                  id="last_name"
                  value="زینی"
                  disabled
                  autoComplete="family-name"
                />
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="پایه تحصیلی">پایه تحصیلی </label>
                <input
                  type="text"
                  id="grade_edu"
                  value="نهم"
                  disabled
                  autoComplete="family-name"
                />
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor="جنسیت"> جنسیت</label>
                <input
                  type="text"
                  id="sex"
                  value="پسر"
                  disabled
                  autoComplete="family-name"
                />
              </div>
              <div className={s.formbottom_names_content}>
                <label htmlFor=""> نشانی</label>
                <textarea value={"باغمیشه"} name="" id="addres" />
              </div>
            </div>
          </div>
        </div>
        <button>برای تغییر اطلاعات با پشتیبانی تماس بگیرید.</button>
      </form>
    </div>
  );
}
