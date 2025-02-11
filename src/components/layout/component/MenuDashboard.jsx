"use client";

import React, { useState, useEffect, useTransition } from "react";
import {Link} from '@/src/i18n/routing';
import Image from "next/image";
import { signOut } from "next-auth/react";
import {useParams} from 'next/navigation';
import { useTranslations, useLocale } from "next-intl";
import {usePathname, useRouter} from '@/src/i18n/routing'; 



export default function Menu({ allClasses, headerPosition }) {

  const [menuItem, setMenuItem] = useState("");
  const [submenu, setSubmenu] = useState("");
  const pathname = usePathname();

  const t = useTranslations('Dashboard');
  const locale = useLocale();



  const [ isPending, startTransition ] = useTransition();
  const router = useRouter();
  const params = useParams();

  const changeLang = (e) => {
    e.preventDefault();
    const nextLocale = e.target.getAttribute('data-locale');
    startTransition(() => {
      router.replace(
        {pathname, params},
        {locale: nextLocale}
      );
    })
  }


  const handleSignOut = async () => {
    try {
      await signOut({ callbackUrl: "/" });  
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div
      className={`header-menu js-mobile-menu-toggle ${
        headerPosition ? headerPosition : ""
      }`}
    >
      <div className="header-menu__content">
        <div className="mobile-bg js-mobile-bg"></div>

        <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
          <Link href="/login" className="text-dark-1">
            {t('signin')}
          </Link>
          <Link href="/signup" className="text-dark-1 ml-30">
            {t('signup')}
          </Link>
        </div>

        <div className="menu js-navList">
          <ul className={`${allClasses ? allClasses : ""}`}>
            <li>
              <Link
                data-barba
                href="/"
                className={menuItem == "Home" ? "activeMenu" : ""}
              >
                {t('home')} <i className="text-13 ml-10"></i>
              </Link>
            </li>

            <li>
              <Link
                data-barba 
                href="/dashboard"
                className={menuItem == "dashboard" ? "activeMenu" : ""}
              >
               {t('sidebar_dashboard')} 
              </Link>
            </li>

            <li>
              <Link
                data-barba
                href="/dshb-courses"
                className={menuItem == "dshb-courses" ? "activeMenu" : ""}
              >
                {t('sidebar_courses')} <i className="text-13 ml-10"></i>
              </Link>
            </li>

            <li>
              <Link
                data-barba
                href="/dshb-settings"
                className={menuItem == "dshb-settings" ? "activeMenu" : ""}
              >
                {t('sidebar_settings')} <i className="text-13 ml-10"></i>
              </Link>
            </li>

            

            <li>
              <Link
                data-barba
                href="/dshb-calendar"
                className={menuItem == "dshb-calendar" ? "activeMenu" : ""}
              >
                {t('sidebar_calender')} <i className="text-13 ml-10"></i>
              </Link>
            </li>

            <li>
              <Link
                href="#"
                onClick={handleSignOut} 
                className={menuItem == "dshb-courses" ? "activeMenu" : ""}
              >
                {t('sidebar_logout')} <i className="text-13 ml-10"></i>
              </Link>
            </li>

            <li className="menu-item-has-children">
              <Link
                data-barba
                href="#"
                className={menuItem == "Language" ? "activeMenu" : ""}
              >
                {locale == 'en' ? (
                  <>
                    <Image width={20}
                      height={20}
                      className={locale == 'en' ? 'mr-8' : 'ml-8'}
                      src={locale == 'en' ? '/assets/img/general/uk.png' : '/assets/img/general/uae.png'}
                      alt="icon"
                    />
                    <i className="icon-chevron-right text-13 ml-10"></i>
                  </>
                ) : (
                  <>
                    <i className="icon-chevron-right text-13 ml-10"></i>
                    <Image width={20}
                      height={20}
                      className={locale == 'en' ? 'mr-8' : 'ml-8'}
                      src={locale == 'en' ? '/assets/img/general/uk.png' : '/assets/img/general/uae.png'}
                      alt="icon"
                    />
                  </>
                )}
              </Link>

              <ul className={`subnav ${ locale == 'en' ? 'subnav-en' : 'subnav-ar' }`}>
                <li className="menu__backButton js-nav-list-back">
                  <Link href="#">
                    <i className="icon-chevron-left text-13 mr-10"></i> {t('lang')}
                  </Link>
                </li>
                <li>
                  <Link href="#" data-locale="en"  onClick={changeLang}>
                  {t('english')} 
                  <div className="text-11"></div>
                  </Link>
                </li>

                <li>
                  <Link href="#" data-locale="ar" onClick={changeLang}>
                  {t('arabic')}
                  <div className="text-11"></div>
                  </Link>
                </li>
              </ul>
            </li>

          </ul>
        </div>

    
      </div>

      <div
        className="header-menu-close"
        data-el-toggle=".js-mobile-menu-toggle"
      >
        <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
          <div className="icon-close text-dark-1 text-16"></div>
        </div>
      </div>

      <div className="header-menu-bg"></div>
    </div>
  );
}
