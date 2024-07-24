import React from 'react'
import s from "./IdeaIcons.module.css"
import { cn } from '@/utils/cn'

export default function IdeaIcons() {
  return (
    <section className={s.IdeaIconsSection}>
        <div className={cn(s.ideaMain,"container")}>
            <div className={s.ideaBoxes}>
                <div className={s.ideaBox}>
                    <img src="/image/svgs/AboutIcons/Vector1.svg" alt="icon" />
                    <p className={s.ideaBox_desc}>رشد و خلاقیت </p>
                </div>

                <div className={s.ideaBox}>
                    <img src="/image/svgs/AboutIcons/Vector2.svg" alt="icon" />
                    <p className={s.ideaBox_desc}>رشد و خلاقیت </p>
                </div>

                <div className={s.ideaBox}>
                    <img src="/image/svgs/AboutIcons/Vector3.svg" alt="icon" />
                    <p className={s.ideaBox_desc}>رشد و خلاقیت </p>
                </div>

                <div className={s.ideaBox}>
                    <img src="/image/svgs/AboutIcons/Vector4.svg" alt="icon" />
                    <p className={s.ideaBox_desc}>رشد و خلاقیت </p>
                </div>

                <div className={s.ideaBox}>
                    <img src="/image/svgs/AboutIcons/Vector5.svg" alt="icon" />
                    <p className={s.ideaBox_desc}>رشد و خلاقیت </p>
                </div>
            </div>
        </div>
    </section>
  )
}
