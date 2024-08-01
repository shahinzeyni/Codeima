import React from 'react'
import UserPanelLayout from '@/Component/layouts/UserPanelLayout'
import Courses from '@/Component/templates/index/p-user/index/Courses'
import Notice from '@/Component/templates/index/p-user/index/Notice'
export default function page() {
  return (
    <UserPanelLayout>
        <main>
          <Notice />
          <Courses />
        </main>
    </UserPanelLayout>
  )
}