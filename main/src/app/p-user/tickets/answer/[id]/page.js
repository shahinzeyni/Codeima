import React from 'react'
import UserPanelLayout from '@/Component/layouts/UserPanelLayout'
import s from "@/styles/answerTickets.module.css"
export default function page() {
  return (
    <UserPanelLayout>
      <div className={s.answerMain}>
        <div className={s.nameSection}>
          <span className={s.nameSectionSpan1}>عنوان دوره</span>
          <span className={s.nameSectionSpan2}>123#</span>
        </div>
        <div className={s.ticketContents}>
          <div className={s.ticketContentUser}>
            <h4>شاهین زینی</h4>
            <span>1402/04/24 19:51</span>
            <p>
              با سلام و وقت بخیر خدمت شما اول از همه یک تشکر ویژه از شما و تیم
              خوبتون میکنم 🙏 در مورد دوره سوکت و گراف کیو ال که قراره دوره های
              جدید سبزلرن باشن هم یک انتقادی دارم، هر دو دوره برای دانشجوهای نود
              جی اس رایگان هست و واقعا هم درسته چون اصلا جزو سرفصل هاست، اما ای
              کاش حداقل دروه سوکت رو برای دانشجوهای نکست هم رایگان میشد، درسته
              نودجی اس جامع تر هست اما خب دوره نکست هم کنار اونا تکمیل تر میشه و
              خروجی بهتری میده... با تشکر فراوان 🙏❤️
            </p>
          </div>
          <div className={s.ticketContentAdmin}>
            <h4>پشتیبانی</h4>
            <span>1402/04/24 19:51</span>
            <p>
              با سلام و وقت بخیر خدمت شما اول از همه یک تشکر ویژه از شما و تیم
              خوبتون میکنم 🙏 در مورد دوره سوکت و گراف کیو ال که قراره دوره های
              جدید سبزلرن باشن هم یک انتقادی دارم، هر دو دوره برای دانشجوهای نود
              جی اس رایگان هست و واقعا هم درسته چون اصلا جزو سرفصل هاست، اما ای
              کاش حداقل دروه سوکت رو برای دانشجوهای نکست هم رایگان میشد، درسته
              نودجی اس جامع تر هست اما خب دوره نکست هم کنار اونا تکمیل تر میشه و
              خروجی بهتری میده... با تشکر فراوان 🙏❤️
            </p>
          </div>
        </div>
      </div>
    </UserPanelLayout>
  );
}
