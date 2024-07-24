import React from 'react'
import s from "./CourseBox.module.css"
import { cn } from '@/utils/cn';
import Link from 'next/link';
export default function CourseBox() {
  return (
    <div className={s.courseBoxMain}>
      <div className={s.boxTop}>
        <Link href="/p-user/course-info/python">
        <img src="/js_project.png" alt="coursePic" />
        </Link>
      </div>
      <div className={s.boxBottom}>
        <div className={s.boxBottomContent}>
          <Link href="/p-user/python">پایتون ترم اول</Link>
        </div>
        <div className={s.progressBar}>
          <div
            className={cn("bg-gray-200", "rounded-full", "dark:bg-gray-200")}
          >
            <div
              className={cn(
                "bg-blue-600",
                "blue-100",
                "pt-1",
                "text-[10px]",
                "leading-none",
                "rounded-[10px]",
                "h-[5px]"
              )}
              style={{ width: "45%" }}
            >
              {" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
