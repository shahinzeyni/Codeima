import React from 'react'
import UserPanelLayout from '@/Component/layouts/UserPanelLayout'
import Notification from '@/Component/templates/index/p-user/Notification/Notification'
export default function page() {
  return (
    <UserPanelLayout>
        <Notification />
    </UserPanelLayout>
  )
}
