"use client";
import React, { useEffect } from 'react'
import s from "./RoadLevelBox.module.css"
import Link from 'next/link';
import { cn } from '@/utils/cn'
export default function RoadLevelBox({img,title,level,age,exersice}) {
  useEffect(()=>{
    console.log(img);

  },[])
  return (
    <div className={s.box}>
      <div className={s.boxTop}>
        <Link href="">
          <img src={`/image/svgs/LevelRoadGrade/${img}.svg`} alt="pic" />
        </Link>
      </div>
      <div className={s.boxBottom}>
        <div className={s.boxBottom_up}>
          <h5>مسیر برنامه نویسی {title}</h5>
          <div>
            <p>
              با پایتون، وارد دنیای برنامه‌نویسی میشی و برنامه‌های کاربردی
              می‌سازی و در آینده بازی‌سازی، طراحی سایت، هوش مصنوعی، برنامه‌نویسی
              ربات و… جدی‌تر دنبال می‌کنی!
            </p>
          </div>
        </div>
        <div className={s.boxBottom_down}>
          <div>مناسب کدآموزان {age}</div>
          <div>{level} گام</div>
          <div>{exersice} تمرین ، فعالیت و پروژه</div>
          <Link href="/pathLearning/1" className={s.navbar_btn1}>
            <span>شروع دوره</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
