import React from 'react'
import AdminPanelLayout from '@/Component/layouts/AdminPanelLayout'
import Users from '@/Component/templates/p-admin/Users/Users'
export default function page() {
  return (
    <AdminPanelLayout>
        <Users/>
    </AdminPanelLayout>
  )
}
