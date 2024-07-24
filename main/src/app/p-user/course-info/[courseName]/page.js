import UserPanelLayout from '@/Component/layouts/UserPanelLayout'
import Topbar from '@/Component/modules/p-user/Topbar'
import CourseItems from '@/Component/templates/index/p-user/CourseItems/CourseItems'
import React from 'react'
UserPanelLayout
export default function page() {
  return (
    <div>
        <Topbar />
        
        <CourseItems />
    </div>
  )
}
