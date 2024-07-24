"use client"
import React from 'react'
import s from "./Slidebar.module.css"
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const sidebarItems = [
    {
      id: 1,
      linkTo: "/p-user",
      text: "دوره های من",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="m326.1 231.9l-47.5 75.5a31 31 0 0 1-7 7a30.11 30.11 0 0 1-35-49l75.5-47.5a10.23 10.23 0 0 1 11.7 0a10.06 10.06 0 0 1 2.3 14"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={41.55}
            d="M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0 0 56.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0 0 37.1-.1a173.13 173.13 0 0 1 254.8 0a25.19 25.19 0 0 0 37.1.1l3.2-3.5A223.18 223.18 0 0 0 480 287.9C480 164.2 379.7 64 256 64"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={41.55}
            d="M256 128v32m160 128h-32m-256 0H96m69.49-90.51l-22.63-22.63m203.65 22.63l22.63-22.63"
          ></path>
        </svg>
      )
    },
    {
      id: 2,
      linkTo: "/p-user/profile",
      text: "پروفایل من",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.307 1.25c-.801 0-1.35 0-1.84.133a3.75 3.75 0 0 0-2.36 1.936c-.227.452-.334.991-.491 1.777l-.62 3.098a3.79 3.79 0 0 0 .754 3.117v2.745c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.748.748 1.697 1.08 2.87 1.238c1.139.153 2.595.153 4.432.153h1.113c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433v-2.744a3.79 3.79 0 0 0 .753-3.118l-.62-3.098c-.156-.786-.264-1.325-.49-1.777a3.75 3.75 0 0 0-2.361-1.936c-.489-.133-1.038-.133-1.84-.133zm10.961 11.5a3.8 3.8 0 0 0 1.482-.298V14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008c-.423.423-1.003.677-2.01.812a15.6 15.6 0 0 1-1.538.114v-2.756c0-.44 0-.82-.028-1.13c-.03-.33-.096-.656-.274-.963a2.25 2.25 0 0 0-.823-.824c-.307-.177-.633-.243-.963-.273c-.31-.028-.69-.028-1.13-.028h-.065c-.44 0-.819 0-1.13.028c-.33.03-.655.096-.962.273a2.25 2.25 0 0 0-.824.824c-.177.307-.243.633-.273.962c-.028.312-.028.691-.028 1.13v2.757a15.6 15.6 0 0 1-1.54-.114c-1.005-.135-1.585-.389-2.008-.812c-.424-.423-.677-1.003-.812-2.009c-.139-1.027-.14-2.382-.14-4.289v-1.548a3.807 3.807 0 0 0 4.588-1.306A3.908 3.908 0 0 0 12 12.75a3.908 3.908 0 0 0 3.162-1.604a3.807 3.807 0 0 0 3.106 1.604m-8.018 8.498c.388.002.804.002 1.25.002h1c.446 0 .861 0 1.25-.002V18.5c0-.481-.001-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.041-.024-.123-.058-.348-.079A12.831 12.831 0 0 0 12 16.75c-.481 0-.792 0-1.027.022c-.226.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027zM8.67 2.75H7.418c-.954 0-1.285.007-1.553.08a2.25 2.25 0 0 0-1.416 1.161c-.125.249-.196.571-.383 1.507l-.598 2.99a2.31 2.31 0 1 0 4.562.683l.069-.686l.004-.042zm.921 5.875l.588-5.875h3.642l.584 5.842a2.417 2.417 0 1 1-4.814.033m8.544-5.795c-.268-.073-.599-.08-1.553-.08h-1.254l.643 6.42a2.309 2.309 0 1 0 4.561-.682l-.597-2.99c-.188-.936-.259-1.258-.383-1.507a2.25 2.25 0 0 0-1.417-1.161"
            clipRule="evenodd"
          />
        </svg>
      )
    },
    {
      id: 3,
      linkTo: "/p-user/notification",
      text: "پیام ها",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <circle
            cx={17}
            cy={15.5}
            r={1.12}
            fill="currentColor"
            fillRule="evenodd"
          ></circle>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M17 17.5c-.73 0-2.19.36-2.24 1.08c.5.71 1.32 1.17 2.24 1.17s1.74-.46 2.24-1.17c-.05-.72-1.51-1.08-2.24-1.08"
          ></path>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M18 11.09V6.27L10.5 3L3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82c.55-.13 1.08-.32 1.6-.55A5.973 5.973 0 0 0 17 23c3.31 0 6-2.69 6-6c0-2.97-2.16-5.43-5-5.91M11 17c0 .56.08 1.11.23 1.62c-.24.11-.48.22-.73.3c-3.17-1-5.5-4.24-5.5-7.74v-3.6l5.5-2.4l5.5 2.4v3.51c-2.84.48-5 2.94-5 5.91m6 4c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"
          ></path>
        </svg>
      )
    },
    {
      id: 4,
      linkTo: "/p-user/tickets",
      text: "تیکت ها",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M5.006 5.007A4 4 0 0 1 5.25 5h10.5A4.25 4.25 0 0 1 20 9.25v2.248a6.5 6.5 0 0 1 1.5.878V9.25a5.75 5.75 0 0 0-5.75-5.75h-8a3.25 3.25 0 0 0-2.744 1.507M19 9.25v1.924A6.5 6.5 0 0 0 17.5 11V9.25a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 9.25v6.5c0 .966.784 1.75 1.75 1.75H6.5v2.758l3.756-2.758H11q.002.776.174 1.5h-.426L6.99 21.76A1.25 1.25 0 0 1 5 20.752v-1.761a3.25 3.25 0 0 1-3-3.241v-6.5A3.25 3.25 0 0 1 5.25 6h10.5A3.25 3.25 0 0 1 19 9.25m4 8.25a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-2.146-2.354a.5.5 0 0 0-.708 0L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708"
          ></path>
        </svg>
      )
    },
  ];
export default function Slidebar() {
    const pathname = usePathname()
    return (
      <>
        <div className={s.sidebarMain}>

          <div className={s.sidebar_menu_userpanel}>
     
            <ul>
            <div className={s.sidebarHeader}>
            <img src="/image/svgs/Logos/logo.svg" alt="" />
          </div>
              <li className={s.sideBar_itemEff1}>
                <Link className={s.sidebarItemLink} href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
                      <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
                    </g>
                  </svg>
                  <span>صفحه ی اصلی</span>
                </Link>
              </li>

              {sidebarItems.map((item) => {
                {
                  /* const isUrlActive = location.pathname.endsWith(); */
                }

                return (
                  <li
                    className={`${
                      pathname === item.linkTo
                        ? s.sideBar_itemEff
                        : s.sideBar_itemEff1
                    }`}
                    key={item.id}
                  >
                    <Link
                      href={`${item.linkTo}`}
                      className={s.sidebarItemLink}
                    >
                      {item.icon}
                      <span>{item.text}</span>
                    </Link>
                  </li>
                );
              })}

              <li className={s.sideBar_itemEff1}>
                <Link href="/" className={s.sidebarItemLink}>
                  <span>خروج</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}
