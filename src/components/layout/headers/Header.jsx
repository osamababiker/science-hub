"use client";
import React from "react";
import { HeaderExplore } from "../component/header-explore";

import SearchToggle from "../component/SearchToggle";
import CartToggle from "../component/CartToggle";
import Menu from "../component/Menu";
import {Link} from '@/src/i18n/routing';
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import MobileMenu from "../component/MobileMenu";

export default function Header() {

  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const t = useTranslations('MainMenu');

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
                      src="/assets/img/general/logo-white.png"
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <Menu allClasses={"menu__nav text-white -is-active"} />
            <MobileMenu
              setActiveMobileMenu={setActiveMobileMenu}
              activeMobileMenu={activeMobileMenu}
            />

            <div className="col-auto">
              <div className="header-right d-flex items-center">
                <div className="header-right__icons text-white d-flex items-center">
                  <SearchToggle color={"text-white"} />
                  <CartToggle
                    parentClassess={"relative pr-30 sm:pl-15"}
                    allClasses={"d-flex items-center text-white"}
                  />

                  <div className="d-none xl:d-block pr-30 sm:pl-15">
                    <button
                      className="text-dark-1 items-center"
                      data-el-toggle=".js-mobile-menu-toggle"
                      onClick={() => setActiveMobileMenu(true)}
                    >
                      <i className="text-11 icon icon-mobile-menu"></i>
                    </button>
                  </div>
                </div>

                <div className="header-right__buttons d-flex items-center mr-30 xl:ml-20 lg:d-none">
                <Link href="/login" className="button -underline text-white">
                  {t('signin')}
                </Link>
                <Link
                  href="/signup"
                  className="button h-50 px-40 -purple-1 -rounded text-white mr-30 xl:ml-20"
                >
                  {t('signup')}
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
