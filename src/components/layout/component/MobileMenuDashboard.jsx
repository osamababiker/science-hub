"use client";

import {Link} from '@/src/i18n/routing';
import { useEffect, useState, useTransition } from "react";
import { useTranslations, useLocale } from "next-intl";
import {useParams} from 'next/navigation';
import { signOut } from "next-auth/react";
import {usePathname, useRouter } from '@/src/i18n/routing'; 
import Image from "next/image";
import { dashMenuList, dashArMenuList } from "@/data/menu";

export default function MobileMenu({ setActiveMobileMenu, activeMobileMenu }) {

  const [showMenu, setShowMenu] = useState(false);
  const [menuNesting, setMenuNesting] = useState([]);
  const [menuItem, setMenuItem] = useState("");
  const [submenu, setSubmenu] = useState("");

  const [ isPending, startTransition ] = useTransition();
  const router = useRouter();
  const params = useParams();
  const t = useTranslations('Dashboard');
  const locale = useLocale();

  const menu = locale == "en" ? dashMenuList : dashArMenuList;
  

  useEffect(() => {
    dashMenuList.forEach((elm) => {
      elm?.links?.forEach((elm2) => {
        if (elm2.href?.split('/')[1] == pathname?.split('/')[1]) {
          setMenuItem(elm.title);
        } else {
          elm2?.links?.map((elm3) => {
            if (elm3.href?.split('/')[1] == pathname?.split('/')[1]) {
              setMenuItem(elm.title);
              setSubmenu(elm2.title);
            }
          });
        }
      });
    });
  }, []);
  useEffect(() => {
    setShowMenu(true);
  }, []);
  const pathname = usePathname();
  
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
        activeMobileMenu ? "-is-el-visible" : ""
      }`}
    >
      <div className="header-menu__content">
        <div className="mobile-bg js-mobile-bg"></div>

        <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
          <Link
            href="/login"
            className={`text-dark-1 ${
              pathname == "/login" ? "activeMenu" : "inActiveMenu"
            } `}
          >
            {t('signin')}
          </Link>
          <Link
            href="/signup"
            className={`text-dark-1 ${ locale == 'en' ? 'ml-30' : 'mr-20' } ${
              pathname == "/signup" ? "activeMenu" : "inActiveMenu"
            } `}
          >
            {t('signup')}
          </Link>
          <Link className={`text-dark-1 ${ locale == 'en' ? 'ml-30' : 'mr-20' }`} href="#" data-locale={locale == 'en' ? 'ar' : 'en'}  onClick={changeLang}>
            { locale == 'en' ?  t('arabic') :  t('english') } 
            <Image width={20}
              height={20}
              className={locale == 'en' ? 'mr-2' : 'ml-2'}
              src={locale == 'en' ? '/assets/img/general/uae.png' : '/assets/img/general/uk.png'}
              alt="icon"
            />
          </Link>
        </div>

        {showMenu && activeMobileMenu && (
          <div className="mobileMenu text-dark-1">
            {menu.map((elm, i) => {
              if (elm.href) {
                return (
                  <div key={i} className="submenuOne">
                    <div className="title">
                      <Link
                        key={i}
                        className={
                          pathname?.split('/')[1] == elm.href?.split('/')[1]
                            ? "activeMenu link"
                            : "link inActiveMenu"
                        }
                        href={elm.href}
                      >
                        {elm.label}
                      </Link>
                    </div>
                  </div>
                );
              }else if(elm.title) {
                return (
                  <div key={i} className="submenuOne">
                    <div
                      className="title"
                      onClick={() =>
                        setMenuNesting((pre) =>
                          pre[0] == elm.title ? [] : [elm.title],
                        )
                      }
                    >
                      <span
                        className={
                          elm.title == menuItem ? "activeMenu" : "inActiveMenu"
                        }
                      >
                        {elm.title}
                      </span>
                      <i
                        className={
                          menuNesting[0] == elm.title
                            ? "icon-chevron-right text-13 ml-10 active"
                            : "icon-chevron-right text-13 ml-10"
                        }
                      ></i>
                    </div>

                    {elm.links &&
                      elm.links.map((itm, index) => (
                        <div
                          key={index}
                          className={
                            menuNesting[0] == elm.title
                              ? "toggle active"
                              : "toggle"
                          }
                        >
                          {itm.href && (
                            <Link
                              key={i}
                              className={
                                pathname?.split('/')[1] == itm.href?.split('/')[1]
                                  ? "activeMenu link"
                                  : "link inActiveMenu"
                              }
                              href={itm.href}
                            >
                              {itm.label}
                            </Link>
                          )}
                        </div>
                      ))}
                  </div>
                );
              }
             
            })}
          </div>
        )}
      </div>

      <div
        className="header-menu-close"
        onClick={() => {
          setActiveMobileMenu(false);
        }}
        data-el-toggle=".js-mobile-menu-toggle"
      >
        <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
          <div className="icon-close text-dark-1 text-16"></div>
        </div>
      </div>

      <div
        className="header-menu-bg"
        onClick={() => setActiveMobileMenu(false)}
      ></div>
    </div>
  );
}
