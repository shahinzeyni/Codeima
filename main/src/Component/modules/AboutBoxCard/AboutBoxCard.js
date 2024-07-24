import React from 'react'
import s from "./AboutBoxCard.module.css"
export default function AboutBoxCard({icon,title,decs,w,h}) {
  return (
    <div className={s.aboutCardMain}>
        <div className={s.cardTop}>
            <img src={`/image/svgs/AboutIcons/${icon}.svg`} width={`${w}`} height={`${h}`} alt="icon" />
        </div>
        <div className={s.cardBottom}>
            <p className={s.cardBottom_top}>{title}</p>
            <p className={s.cardBottom_bottom}>{decs}</p>
        </div>
    </div>
  )
}
