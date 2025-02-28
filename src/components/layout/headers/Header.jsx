"use client";
import React from "react";

import SearchToggle from "../component/SearchToggle";
import CartToggle from "../component/CartToggle";
import Menu from "../component/Menu";
import {Link} from '@/src/i18n/routing';
import Image from "next/image";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import MobileMenu from "../component/MobileMenu";
import { useSession } from "next-auth/react";

export default function Header() {

  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const t = useTranslations('MainMenu');
  const locale = useLocale();
  const { data: session, status } = useSession();

  return (
    <>
      <header className="header -type-1 ">
        <div className="header__container">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="header-left">
                <div className="header__logo pl-30 xl:pr-20 md:pr-0 ">
                  <Link href="/">
                    <Image
                      width={140}
                      height={50} 
                      src="/assets/img/general/logo.png"
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <Menu allClasses={"menu__nav text-dark-1 -is-active"} />
            <MobileMenu
              setActiveMobileMenu={setActiveMobileMenu}
              activeMobileMenu={activeMobileMenu}
            /> 

            <div className="col-auto">
              <div className="header-right d-flex items-center">
                <div className="header-right__icons text-white d-flex items-center">
                  {/* <SearchToggle color={"text-white"} /> */}
                  <CartToggle
                    parentClassess={`relative sm:pl-15 ${ locale == 'en' ? 'pl-30' : 'pr-30' }`}
                    allClasses={"d-flex items-center text-dark-1"}
                  />

                  <div className={`d-none xl:d-block sm:pl-15 ${ locale == 'en' ? 'pl-30' : 'pr-30' }`}>
                    <button
                      className="text-dark-1 items-center"
                      data-el-toggle=".js-mobile-menu-toggle"
                      onClick={() => setActiveMobileMenu(true)}
                    >
                      <i className="text-11 icon icon-mobile-menu text-white"></i> 
                    </button>
                  </div>
                </div>

                <div className={`header-right__buttons d-flex items-center  xl:ml-20 lg:d-none ${ locale == 'en' ? 'ml-30' : 'mr-30' }`}>
                {!session ?
                <>
                  <Link href="/login" className="button -underline text-dark-1">
                    {t('signin')}
                  </Link>
                  <Link
                    href="/courses-list"
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
    </>
  );
}
