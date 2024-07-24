import React from 'react'
import s from "./FriendsLanding.module.css"
import { cn } from '@/utils/cn'
export default function FriendsLanding() {
  return (
    <section className={s.sectionFriends}>
      <div className={cn("sm:container","sm:px-0","px-7")}>
        <div className={s.FriendsLanding_main}>
          <div className={s.friendsRight}>
            <img src="/image/svgs/Landing/friendsCodePerson.svg" alt="" />
          </div>
          <div className={s.friendsLeft}>
            <div className={s.friendsLeft_content}>
              <h4>کدیما رو به دوست‌هات معرفی کن</h4>
              <p>
                یادگیری با دوست‌ها جذاب‌تره! پس دوست‌هات رو به جونیورا دعوت کن
                تا در کنار هم برنامه‌نویسی یاد بگیرید. هر کدوم از دوست‌هات که
                عضو جونیورا بشه، هم خودت کد تخفیف ثبت‌نام در دوره‌های جونیورا رو
                می‌گیری و هم دوستت.
              </p>
            </div>
            <button>دوستاتو معرفی کن</button>
          </div>
        </div>
      </div>
    </section>
  );
}
