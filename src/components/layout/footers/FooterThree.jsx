"use client";

import React from "react";
import Links from "../component/Links";
import Socials from "@/src/components/common/Socials";
import { useTranslations, useLocale } from "next-intl";

export default function FooterThree() {

  const t = useTranslations("Footer");
  const locale = useLocale();

  return (
    <footer className="footer -type-5 pt-60">
      <div className="container"> 
        <div className="py-30 border-top-light">
          <div className="row justify-between items-center y-gap-20">
            <div className="col-auto">
              <div className="footer-footer__copyright d-flex items-center h-100">
                © {new Date().getFullYear()} {t('copyRight')}
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex x-gap-20 y-gap-20 items-center flex-wrap">
                <div>
                  <div className="d-flex x-gap-15">
                    <Links />
                  </div>
                </div>

                <div>
                  <a
                    href="#"
                    className="button -md -light-4 px-20 -purple-3 text-purple-1"
                  >
                    <i className={`icon-worldwide ${ locale == 'en' ? 'mr-5' : 'ml-5' }`}></i> {t('lang')}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" pt-30">
            <Socials  />
          </div>
        </div>
      </div>
    </footer>
  );
}
