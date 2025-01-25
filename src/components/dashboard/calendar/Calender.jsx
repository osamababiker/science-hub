"use client";
import React from "react";

import FooterThree from "@/src/components/layout/footers/FooterThree";
import EventCalendar from "./EventCalendar";
import { useTranslations, useLocale } from "next-intl";

export default function Calender() {

  const t = useTranslations('Dashboard');
  const locale = useLocale();

  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">{t("calendar_title")}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12 col-lg-12  md:mb-20">
            <div className="col-12">
              <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                <div className="py-40 md:py-20 sm-py-10 px-30 md:px-20 sm:px-10">
                
                  <div className="overflow-scroll scroll-bar-1 mt-20">
                    <EventCalendar />
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <FooterThree />
    </div>
  );
}
