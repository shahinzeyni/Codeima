import React from 'react'
import Slidebar from '../modules/p-user/Slidebar'
import Topbar from "../modules/p-user/Topbar";
import s from "./UserPanelLayout.module.css"

export default function UserPanelLayout({children}) {
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
