import React from 'react'
import UserPanelLayout from '@/Component/layouts/UserPanelLayout'
import AddTicket from '@/Component/templates/index/p-user/Tickets/AddTicket'
export default function page() {
  return (
    <UserPanelLayout>
      <AddTicket />
    </UserPanelLayout>
  )
}
