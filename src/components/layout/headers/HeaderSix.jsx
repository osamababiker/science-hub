"use client";

import React, { useState, useEffect } from "react";
import CartToggle from "../component/CartToggle";
import Menu from "../component/MenuHome";
import MobileMenu from "../component/MobileMenu";
import SearchToggle from "../component/SearchToggle";
import Image from "next/image"; 
import {Link} from '@/src/i18n/routing';
import { useTranslations, useLocale } from "next-intl";
import { useSession } from "next-auth/react";

export default function HeaderSix() {

  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { data: session, status } = useSession();

  const t = useTranslations('MainMenu');
  const locale = useLocale(); 
 
  useEffect(() => { 
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`header -type-4 js-header ${
        scrollPosition > 40 ? "bg-white nav-dark-color" : ""
      } `}
    >
      <div className="header__container py-5 border-bottom-dark">
        <div className="row justify-between items-center">
          <div className="col-auto">
            <div className="header-left d-flex items-center">
              <div className={`header__logo xl:pr-20 md:pr-0 ${ locale == 'en' ? 'pr-30' : 'pl-30' }`}>
                <Link href="/">
                  <Image
                    width={140}
                    height={50}
                    src="/assets/img/general/logo.png"
                    alt="logo"
                  />
                </Link>
              </div>

              <Menu allClasses="menu__nav text-dark-1 -is-active" />
              <MobileMenu
                setActiveMobileMenu={setActiveMobileMenu}
                activeMobileMenu={activeMobileMenu}
              />
            </div>
          </div>

          <div className="col-auto">
            <div className="header-right d-flex items-center">
              <div className="header-right__icons text-white d-flex items-center">
                {/* <SearchToggle color={"text-dark-1"} /> */}
                <CartToggle
                  parentClassess={`relative sm:pl-15 ${ locale == 'en' ? 'pl-30' : 'pr-30' }`}
                  allClasses={"d-flex items-center text-white"}
                />

                <div className={`d-none xl:d-block sm:pl-15 ${ locale == 'en'  ? 'pl-30'  : 'pr-30' }`}>
                  <button
                    className="text-dark-1 items-center"
                    data-el-toggle=".js-mobile-menu-toggle"
                    onClick={() => setActiveMobileMenu(true)}
                  >
                    <i id="icon-mobile-menu" className="text-11 icon icon-mobile-menu text-white"></i>
                  </button>
                </div>
              </div>

              <div className={`header-right__buttons d-flex items-center xl:ml-20 lg:d-none ${ locale == 'en' ? 'ml-30' : 'mr-30 ' }`}>
                {!session ?
                  <>
                  <Link href="/login" className="button -underline text-white">
                    {t('signin')}
                  </Link>
                  <Link
                    href="/courses-list"
                    id="nav_call_action_btn"
                    className={`button h-50 px-40 -purple-1 -rounded text-white xl:ml-20 ${ locale == 'en' ? 'ml-30' : 'mr-30' }`}
                  > 
                    {t('start_Learning')}
                  </Link>
                  </>
                : 
                <Link href="/dashboard" className="button -underline text-white">
                  {t('dashboard')}
                </Link>
                }
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
