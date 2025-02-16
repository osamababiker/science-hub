"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/src/i18n/routing";
import { useTranslations, useLocale } from "use-intl";

export default function BecomeInstactor() {

  const t = useTranslations("BecomeTeacher");
  const locale = useLocale();

  return (
    <section  dir={locale == "ar" ? "ltr" : ""} className="layout-pt-lg layout-pb-md">
      <div className="container">
        <div className="row items-center">
          <div className="col-xl-5 offset-xl-1 col-lg-6">
            <Image
              width={730}
              height={530}
              className="w-1/1"
              src="/assets/img/general/teacher.jpg"
              alt="image"
            />
          </div>

          <div  dir={locale == "ar" ? "rtl" : ""} className="col-xl-4 offset-xl-1 col-lg-6 pt-4">
            <h3 className="text-24 lh-1">{t("title")}</h3>
            <p className="mt-20">
            {t("bio")}
            </p>
            <div className="d-inline-block mt-20">
              <Link
                href="#"
                className="button -md -outline-purple-1 text-purple-1"
              >
               {t("btn")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
