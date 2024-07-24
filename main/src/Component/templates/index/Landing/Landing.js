"use client";
import React, { useEffect , useState} from "react";

import s from "./Landing.module.css";
import { cn } from "@/utils/cn";

import CountUp, { useCountUp } from 'react-countup';
 import ScrollTrigger from "react-scroll-trigger";
// import { ScrollTrigger } from "react-scroll-trigger";
import LandingCounter from "@/Component/modules/LandingCounter/LandingCounter";
export default function Landing() {

  const [counterState,setCounterState] = useState(false)

  return (
    <section className={s.landingSection}>
      <div className={s.landingBox1}>
        <div className={s.landingBox_right}>
          <div className={s.landingBoxContent}>
            <h1 className={s.landingBoxTitle1}>
              رویای برنامه نویسی
              <br />
              هوش مصنوعی و رباتیک
            </h1>
            <p className={s.landingBoxDescrip1}>
              برنامه نویسی کودکان و آموزش حرفه ای
            </p>
          </div>
          <div className={s.landingBtns}>
            <button className={s.navbar_btn1}>رایگان شروع کن</button>
            <button className={s.navbar_btn2}>مشاوره تخصصی رایگان</button>
          </div>
        </div>
        <div className={s.landingBox_left}>
          <img src="/image/svgs/Landing/bg-landing.svg" alt="photo" />
        </div>
      </div>

      <div className={s.LandingMainBox2}>
        <h4
          className={cn(
            "text-center",
            "text-[25px]",
            "font-DanaDemiBold",
            "text-title",
            "mt-40"
          )}
        >
          کدیما تا به امروز ...
        </h4>
        <ScrollTrigger
          onEnter={()=>setCounterState(true)}
          onExit={()=>setCounterState(false)}
        >
          <div className={s.landingBox2}>
            <div
              className={cn(s.landingBox2_content1, s.landingBox2_content1_0)}
            >
              <span className={s.landingBox2_content1_number}>
              
              {
                counterState && (

                <CountUp start={0} end={100} duration={2.75}>
                
                </CountUp>
                )
              }
              </span>
              <span className={s.landingBox2_content1_desc}>
                کدآموز خلاقاز سراسر کشور
              </span>
            </div>
            <div
              className={cn(s.landingBox2_content1, s.landingBox2_content1_1)}
            >
              <span className={s.landingBox2_content1_number}>
              {
                counterState && (

                <CountUp start={0} end={1100} duration={2}>
                  
                </CountUp>
                )
              }
              </span>
              <span className={s.landingBox2_content1_desc}>
                کدآموز خلاقاز سراسر کشور
              </span>
            </div>
            <div
              className={cn(s.landingBox2_content1, s.landingBox2_content1_2)}
            >
              <span className={s.landingBox2_content1_number}>
              {
                counterState && (

                <CountUp start={0} end={1200} duration={2.75}>
                  
                </CountUp>
                )
              }
              </span>
              <span className={s.landingBox2_content1_desc}>
                کدآموز خلاقاز سراسر کشور
              </span>
            </div>
            <div
              className={cn(s.landingBox2_content1, s.landingBox2_content1_3)}
            >
              <span className={s.landingBox2_content1_number}>
              {
                counterState && (

                <CountUp start={0} end={100} duration={2.75}>
                  100
                </CountUp>
                )
              }
              </span>
              <span className={s.landingBox2_content1_desc}>
                کدآموز خلاقاز سراسر کشور
              </span>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
}
