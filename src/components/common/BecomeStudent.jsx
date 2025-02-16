"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/src/i18n/routing";
import { useTranslations, useLocale } from "use-intl";

export default function BacomeStudent() {

  const t = useTranslations("BecomeStuden");
  const locale = useLocale();

  return (
    <section  dir={locale == "ar" ? "ltr" : ""}  className="layout-pt-md layout-pb-md">
      <div className="container">
        <div className="row y-gap-30 items-center">
          <div  dir={locale == "ar" ? "rtl" : ""}  className="col-xl-4 offset-xl-1 order-lg-1 col-lg-6 order-2">
            <h3 className="text-24 lh-1">{t("title")}</h3>
            <p className="mt-20">
              {t("bio")}
            </p>
            <div className="d-inline-block mt-20">
              <Link href="/signup" className="button -md -outline-dark-2 text-dark-2">
                {t("btn")}
              </Link>
            </div>
          </div>

          <div className="col-xl-5 offset-xl-1 col-lg-6 order-lg-2 order-1">
            <Image
              width={730}
              height={530}
              className="w-1/1"
              src="/assets/img/general/students.jpg"
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
