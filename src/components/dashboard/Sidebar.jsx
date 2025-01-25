"use client";

// import { sidebarItems } from "@/data/dashBoardSidebar";
import React from "react";
import {Link} from '@/src/i18n/routing';
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useTranslations, useLocale } from "next-intl";

export default function Sidebar() {

  const pathname = usePathname();
  const t = useTranslations('Dashboard');
  const locale = useLocale();
  const handleSignOut = async () => {
    try {
      await signOut({ callbackUrl: "/" });  
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  const sidebarItems = [
    {
      id: 1,
      href: "/dashboard",
      iconClass: "text-20 icon-discovery",
      text: t("sidebar_dashboard"),
      logoutBtn: false
    },
    {
      id: 2,
      href: "/dshb-courses",
      iconClass: "text-20 icon-play-button",
      text: t("sidebar_courses"),
      logoutBtn: false
    },
    {
      id: 3,
      href: "/dshb-settings",
      iconClass: "text-20 icon-setting",
      text: t("sidebar_settings"),
      logoutBtn: false
    },
    {
      id: 4,
      href: "/dshb-calendar",
      text: t("sidebar_calender"),
      iconClass: "text-20 icon-calendar",
      logoutBtn: false
    },
    {
      id: 5,
      href: "#",
      iconClass: "text-20 icon-power",
      text: t("sidebar_logout"),
      logoutBtn: true
    },
  ]

  return (
    <div className="sidebar -dashboard">
      {sidebarItems.map((elm, i) => (
        <div
          key={i}
          className={`sidebar__item   ${
            pathname == elm.href ? "-is-active" : ""
          } `} 
        >
          {elm.logoutBtn ? 
          <Link
            key={i}
            href={elm.href}
            onClick={handleSignOut} 
            className="d-flex items-center text-17 lh-1 fw-500 "
          >
            <i className={`${elm.iconClass} ${ locale == 'en' ? 'mr-15' : 'ml-15' }`}></i>
            {elm.text}
          </Link>
          :
            <Link
              key={i}
              href={elm.href}
              className="d-flex items-center text-17 lh-1 fw-500 "
            >
              <i className={`${elm.iconClass} ${ locale == 'en' ? 'mr-15' : 'ml-15' }`}></i>
              {elm.text}
            </Link>
          }
        </div>
      ))}
      
    </div>
  );
}
