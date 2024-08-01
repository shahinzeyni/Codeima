import React from "react";
import s from "./Topbar.module.css";
export default function Topbar() {
  return (
    <div className={s.topbarMain}>
      <div className={s.topbarMenuIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
      <div className={s.topbar_right}>شاهین عزیز،خوش آمدید</div>
      <div className={s.topbar_left}>
        <div className={s.notification}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            >
              <path strokeDasharray="4" strokeDashoffset="4" d="M12 3V5">
                <animate
                  fill="freeze"
                  attributeName="strokeDashoffset"
                  dur="0.2s"
                  values="4;0"
                />
              </path>
              <path
                fill="currentColor"
                fillOpacity="0"
                strokeDasharray="28"
                strokeDashoffset="28"
                d="M12 5C8.68629 5 6 7.68629 6 11L6 17C5 17 4 18 4 19H12M12 5C15.3137 5 18 7.68629 18 11L18 17C19 17 20 18 20 19H12"
              >
                <animate
                  fill="freeze"
                  attributeName="strokeDashoffset"
                  begin="0.2s"
                  dur="0.4s"
                  values="28;0"
                />
                <animate
                  fill="freeze"
                  attributeName="fillOpacity"
                  begin="0.8s"
                  dur="0.15s"
                  values="0;0.3"
                />
              </path>
              <path
                strokeDasharray="8"
                strokeDashoffset="8"
                d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20"
              >
                <animate
                  fill="freeze"
                  attributeName="strokeDashoffset"
                  begin="0.6s"
                  dur="0.2s"
                  values="8;0"
                />
              </path>
            </g>
          </svg>
        </div>
        <div className={s.profile}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="6" r="4" fill="currentColor" />
            <path
              fill="currentColor"
              d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
