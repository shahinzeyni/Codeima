import React from 'react'
import s from "./Courses.module.css"
import CourseBox from '@/Component/modules/p-user/CourseBox'
export default function Courses() {
  return (
    <div className={s.CoursesMain}>
        <CourseBox />
        <CourseBox />
        <CourseBox />
    </div>
  )
}
