"use client";

import React, { useState, useEffect, useTransition } from "react";
import {Link} from '@/src/i18n/routing';
import Image from "next/image";

import {useParams} from 'next/navigation';
import { useTranslations, useLocale } from "next-intl";
import {usePathname, useRouter} from '@/src/i18n/routing'; 

import { menuList } from "@/data/menu";


export default function Menu({ allClasses, headerPosition }) {

  const [menuItem, setMenuItem] = useState("");
  const [submenu, setSubmenu] = useState("");
  const pathname = usePathname(); 

  const t = useTranslations('MainMenu');
  const locale = useLocale();

  useEffect(() => {
    menuList.forEach((elm) => {
      elm?.links?.forEach((elm2) => {
        if (elm2.href?.split('/')[1]  == pathname.split('/')[1] ) {
          setMenuItem(elm.title);
        } else {
          elm2?.links?.map((elm3) => {
            if (elm3.href?.split('/')[1]  == pathname.split('/')[1] ) {
              setMenuItem(elm.title);
              setSubmenu(elm2.title);
            }
          });
        }
      });
    });
  }, []); 


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


  return (
    <div
      className={`header-menu js-mobile-menu-toggle ${
        headerPosition ? headerPosition : ""
      }`}
    >
      <div className="header-menu__content">
        <div className="mobile-bg js-mobile-bg"></div>

        <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
          <Link href="/login" className="text-white">
            {t('signin')}
          </Link>
          <Link href="/signup" className="text-white ml-30">
            {t('signup')}
          </Link>
        </div>

        <div className="menu js-navList"> 
          <ul className={`${allClasses ? allClasses : ""}`}>
            <li>
              <Link
                data-barba
                href="/"
                className={`text-white ${menuItem == "Home" ? "activeMenu" : ""}`}
              >
                {t('home')} <i className="text-13 ml-10"></i>
              </Link>
            </li>

            <li>
              <Link
                data-barba
                href="/courses-list"
                className={`text-white ${menuItem == "Courses" ? "activeMenu" : ""}`}>
               {t('courses')} 
              </Link>
            </li>

            <li>
              <Link
                data-barba
                href="/blog-list"
                className={`text-white ${menuItem == "Blogs" ? "activeMenu" : ""}`}>
                {t('blog')} <i className="text-13 ml-10"></i>
              </Link>
            </li>

            <li className="menu-item-has-children">
              <Link
                data-barba
                href="#"
                className={`text-white ${menuItem == "Pages" ? "activeMenu" : ""}`}>
                {locale == 'en' ? (
                  <>
                    {t('pages')}
                    <i className="icon-chevron-right text-13 ml-10"></i>
                  </>
                ) : (
                  <>
                    <i className="icon-chevron-right text-13 ml-10"></i>
                    {t('pages')}
                  </>
                )}
              </Link>

              <ul className="subnav">
                <li className="menu__backButton js-nav-list-back">
                  <Link href="#">
                    <i className="icon-chevron-left text-13 mr-10"></i> {t('pages')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={
                      submenu == "About Us" ? "activeMenu" : "inActiveMenu"
                    }
                  >
                    {t('about_us')}<div className="text-11"></div>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className={
                      submenu == "Contact" ? "activeMenu" : "inActiveMenu"
                    }
                  >
                    {t('contact')}<div className="text-11"></div>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/shop-list"
                    className={
                      submenu == "Shop" ? "activeMenu" : "inActiveMenu"
                    }
                  >
                    {t('shop')}<div className="text-11"></div>
                  </Link>
                </li>
              </ul>
            </li>

            <li
              
            >
              <Link data-barba href="/contact"  className={`text-white ${pathname == "/contact" ? "activeMenu" : "inActiveMenuTwo"}`}>
                {t('contact')}
              </Link>
            </li>

            <li className="menu-item-has-children">
              <Link
                data-barba
                href="#"
                className={`text-white ${menuItem == "Language" ? "activeMenu" : ""}`}
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
