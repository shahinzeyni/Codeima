import React from 'react'
import s from "./AboutBoxes.module.css";
import AboutBoxCard from '@/Component/modules/AboutBoxCard/AboutBoxCard';
import { cn } from '@/utils/cn';
export default function AboutBoxes() {
  return (
    <section className={s.aboutSection}>
    <h4 className={s.AboutTitle}>
      چرا کدیما؟
    </h4>
      <div className={cn("sm:container")}>
        <div className={s.aboutMain}>
          <AboutBoxCard
            icon="1"
            w="70"
            h=""
            title="مربی‌های توانمند"
            decs="بهترین مربی‌ها از بین معلمان باتجربه مدارس و برگزیدگان دانشگاه‌های برتر"
          />
          <AboutBoxCard
            icon="2"
            w="60"
            h="100"
            title="مربی‌های توانمند"
            decs="بهترین مربی‌ها از بین معلمان باتجربه مدارس و برگزیدگان دانشگاه‌های برتر"
          />
          <AboutBoxCard
            icon="3"
            w="60"
            h="100"
            title="مربی‌های توانمند"
            decs="بهترین مربی‌ها از بین معلمان باتجربه مدارس و برگزیدگان دانشگاه‌های برتر"
          />
          <AboutBoxCard
            icon="4"
            title="مربی‌های توانمند"
            decs="بهترین مربی‌ها از بین معلمان باتجربه مدارس و برگزیدگان دانشگاه‌های برتر"
          />
                    <AboutBoxCard
            icon="5"
            title="مربی‌های توانمند"
            decs="بهترین مربی‌ها از بین معلمان باتجربه مدارس و برگزیدگان دانشگاه‌های برتر"
          />

<AboutBoxCard
            icon="6"
            title="مربی‌های توانمند"
            decs="بهترین مربی‌ها از بین معلمان باتجربه مدارس و برگزیدگان دانشگاه‌های برتر"
          />
        </div>
      </div>
    </section>
  );
}
