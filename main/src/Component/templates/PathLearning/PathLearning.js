import React from 'react'
import s from "./PathLearning.module.css"
import InfoBox from '@/Component/modules/PathLearning/InfoBox/InfoBox';
import Link from 'next/link';
import { cn } from '@/utils/cn'
export default function PathLearning() {
  return (
    <div className={cn(s.PathLearningMain,s.PathLearningMain2)}>
      <div className={s.courseHeader}>
        <div className={s.courseHeader_right}>
          <div className={s.courseHeader_right_contents}>
            <h1>دوره پایتون هوش مصنوعی</h1>
            <p>
              یکی از دوره هایی که در مسیر یادگیری هک و امنیت باید بهش مراجعه
              کنید. "دوره ceh" هست ! CEH مخفف Certificate Ethical Hacking هستش و
              در این دوره شما بر اساس یک سری استاندارد ها نه تنها با یک سری از
              مفاهیم پایه اشنا میشید. بلکه با یادگیری سناریو های مختلف بصورت
              تجربی. اون
            </p>
          </div>

          <div className={s.courseHeader_right_btns}>
            <Link className={s.courseHeader_right_btnRegister} href="">
              ثبت نام رایگان
            </Link>
            <span>4 جلسه ی رایگان بی قید و شرط!</span>
          </div>
        </div>
        <div className={s.courseHeader_left}>
          <img src="/js_project.png" alt="pic" />
        </div>
      </div>
      <div className={s.courseBoxInfos}>
      <div className={s.InfoBox}>
          <div className={s.infoBoxHeader}>
            <span className={s.infoBoxHeader_title}>کلاس همگانی</span>
          </div>
          <div className={s.infoBoxBottom}>
            <div className={s.infoBoxBottom_content}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 2048 2048"
                  >
                <path
                  fill="currentColor"
                  d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z"
                />
              </svg>
              3 جلسه آفلاین
            </div>
            <div className={s.infoBoxBottom_content}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="currentColor"
                  d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z"
                />
              </svg>
              3 جلسه آفلاین
            </div>
            <div className={s.infoBoxBottom_content}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="currentColor"
                  d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z"
                />
              </svg>
              3 جلسه آفلاین
            </div>
            <div className={s.infoBoxBottom_content}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="currentColor"
                  d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z"
                />
              </svg>
              3 جلسه آفلاین
            </div>
            <div className={s.infoBoxBottom_content}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="currentColor"
                  d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z"
                />
              </svg>
              3 جلسه آفلاین
            </div>
            <div className={s.infoBoxBottom_content}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="currentColor"
                  d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z"
                />
              </svg>
              3 جلسه آفلاین
            </div>
          </div>
          <div className={s.infoBoxBottom_price}>
            <span>450000</span>
          </div>
          <div className={s.infoBoxBottom_btns}>
            <Link className={s.infoBoxBottom_btn} href="">ثبت نام</Link>
          </div>
        </div>
        <div className={s.InfoBox}>
          <div className={s.infoBoxHeader}>
            <span className={s.infoBoxHeader_title}>کلاس همگانی</span>
          </div>
          <div className={s.infoBoxBottom}>
            <div className={s.infoBoxBottom_content}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="currentColor"
                  d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z"
                />
              </svg>
              3 جلسه آفلاین
            </div>
            <div className={s.infoBoxBottom_content}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="currentColor"
                  d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z"
                />
              </svg>
              3 جلسه آفلاین
            </div>
            <div className={s.infoBoxBottom_content}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="currentColor"
                  d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z"
                />
              </svg>
              3 جلسه آفلاین
            </div>
            <div className={s.infoBoxBottom_content}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="currentColor"
                  d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z"
                />
              </svg>
              3 جلسه آفلاین
            </div>
            <div className={s.infoBoxBottom_content}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="currentColor"
                  d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z"
                />
              </svg>
              3 جلسه آفلاین
            </div>
            <div className={s.infoBoxBottom_content}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="currentColor"
                  d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z"
                />
              </svg>
              3 جلسه آفلاین
            </div>
          </div>
          <div className={s.infoBoxBottom_price}>
            <span>450000</span>
          </div>
          <div className={s.infoBoxBottom_btns}>
            <Link className={s.infoBoxBottom_btn} href="">ثبت نام</Link>
          </div>
        </div>
        <div className={s.InfoBox}>
          <div className={s.infoBoxHeader}>
            <span className={s.infoBoxHeader_title}>کلاس همگانی</span>
          </div>
          <div className={s.infoBoxBottom}>
            <div className={s.infoBoxBottom_content}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="currentColor"
                  d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z"
                />
              </svg>
              3 جلسه آفلاین
            </div>
            <div className={s.infoBoxBottom_content}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="currentColor"
                  d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z"
                />
              </svg>
              3 جلسه آفلاین
            </div>
            <div className={s.infoBoxBottom_content}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="currentColor"
                  d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z"
                />
              </svg>
              3 جلسه آفلاین
            </div>
            <div className={s.infoBoxBottom_content}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="currentColor"
                  d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z"
                />
              </svg>
              3 جلسه آفلاین
            </div>
            <div className={s.infoBoxBottom_content}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="currentColor"
                  d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z"
                />
              </svg>
              3 جلسه آفلاین
            </div>
            <div className={s.infoBoxBottom_content}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="currentColor"
                  d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z"
                />
              </svg>
              3 جلسه آفلاین
            </div>
          </div>
          <div className={s.infoBoxBottom_price}>
            <span>450000</span>
          </div>
          <div className={s.infoBoxBottom_btns}>
            <Link className={s.infoBoxBottom_btn} href="">ثبت نام</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
