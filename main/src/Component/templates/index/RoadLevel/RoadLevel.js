"use client";
import React from "react";
import s from "./RoadLevel.module.css";
import RoadLevelBox from '@/Component/modules/RoadLevelCard/RoadLevelBox';

import { cn } from '@/utils/cn'

export default function RoadLevel() {
  return (
    <section className={cn("container", "mt-28","px-8")}>
      <div className={s.titleSection}>
        یادگیری برنامه‌نویسی از این مسیرها می‌گذره
      </div>
      <div className={s.boxesLevel}>
        <RoadLevelBox
          level="6"
          age="16 به بالا"
          exersice="150"
          title="پیشرفته"
          img="gradeCourseAdvance"
        />
        <RoadLevelBox
          level="4"
          age="12 تا 16"
          exersice="120"
          title="مقدماتی"
          img="gradeCourseMid"
        />
        <RoadLevelBox
          level="2"
          age="8 به بالا"
          exersice="100"
          title="کودکان"
          img="gradeCourseBignner"
        />
      </div>
    </section>
  );
}
