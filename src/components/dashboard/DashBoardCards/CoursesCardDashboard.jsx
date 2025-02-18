"use client";
import React from "react";
import Image from "next/image";
import { coursesUploadUrl } from "@/lib/constants";
import { useTranslations, useLocale } from "next-intl";

export default function CoursesCardDashboard({ order }) {

  const t = useTranslations('Dashboard');
  const locale = useLocale();

  return (
    <div className="w-1/5 xl:w-1/3 lg:w-1/2 sm:w-1/1">
      <div className="relative">
        <Image
          width={560}
          height={325}
          className="rounded-8 w-1/1"
          src={coursesUploadUrl + order.course.image}
          alt="image"
        />
      </div>

      <div className="pt-15">
        {/* <div className="d-flex y-gap-10 justify-between items-center">
          <div className="text-14 lh-1">{ locale == 'en' ? order.course.teacher.en_name : order.course.teacher.ar_name }</div>
        </div> */}
        
        {
          order.status == 1 ?
          <>
          <h3 className="text-16 fw-500 lh-15 mt-10">
            <a href="https://learning-sciencehub.ae/my/">{ locale == 'en' ? order.course.en_name : order.course.ar_name }</a>
          </h3>
          <a href="https://learning-sciencehub.ae/my/" className="button h-50 px-40 -purple-1 -rounded text-white xl:ml-20">
            {t('access_moodle')}
          </a>
          </>
          :
          <h3 className="text-16 fw-500 lh-15 mt-10">{ locale == 'en' ? order.course.en_name : order.course.ar_name }</h3>
        }
        

        {/* <div className="progress-bar mt-10">
          <div className="progress-bar__bg bg-light-3"></div>
          <div className="progress-bar__bar bg-purple-1 w-1/5"></div>
        </div>

        <div className="d-flex y-gap-10 justify-between items-center mt-10">
          <div className="text-dark-1">% {order.completed} {t("completed")}</div>
          <div>25%</div>
        </div> */}
      </div>
    </div>
  );
}
