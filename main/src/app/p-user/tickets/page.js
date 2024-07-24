import React from 'react'
import UserPanelLayout from '@/Component/layouts/UserPanelLayout'
import Tickets from '@/Component/templates/index/p-user/Tickets/Tickets'
export default function page() {
  return (
    <UserPanelLayout>
        <Tickets />
    </UserPanelLayout>
  )
}
