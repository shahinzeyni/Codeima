import React from 'react'
import UserPanelLayout from '@/Component/layouts/UserPanelLayout'
import Profile from '@/Component/templates/index/p-user/Profile/Profile'
export default function page() {
  return (
    <UserPanelLayout>
        <Profile />
    </UserPanelLayout>
  )
}
