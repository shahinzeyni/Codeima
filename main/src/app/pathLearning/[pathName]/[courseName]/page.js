import React from 'react'
import PathLearning from '@/Component/templates/PathLearning/PathLearning'
import s from "@/styles/PathLearning.module.css"
import { cn } from '@/utils/cn'
import Navbar from '@/Component/modules/Navbar/Navbar'
export default function page() {
  return (
    <div>
 
      <div className={s.MainCoursePath}>
      <Navbar />
      <div className={cn("sm:container")}>
        <PathLearning />
      </div>
    </div>
    </div>
  );
}
