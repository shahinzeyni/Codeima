import React from 'react'
import s from "./AdminPanelLayout.module.css"
import Slidebar from '../modules/p-admin/Sidebar'
import Topbar from '../modules/p-admin/Topbar'
export default function AdminPanelLayout({children}) {
  return (
    <div>
    <section className={s.mainPanelUser}>
    <div className={s.UserPanelSidebar}>

      <Slidebar />
    </div>
      <div className={s.PanelUserContent}>
        <div className={s.panelUserContentChild}>
        <Topbar />
        {children}
        </div>
      </div>
    </section>
  </div>
  )
}
