"use client";

import { useState, useEffect } from 'react'
import { useLocale, useTranslations } from "next-intl";

import parse from 'html-react-parser'

export default function Overview({course}) {

  const [showMore, setShowMore] = useState(false);
  const t = useTranslations('CourseDetails');
  const locale = useLocale();

  useEffect(() => {
    setIsClient(true)
  }, [])

  
  // to solve the hydration issue 
  const [isClient, setIsClient] = useState(false)

  return (
    <div id="overview" className="pt-60 lg:pt-40 to-over">
      <h4 className="text-18 fw-500">{t("description")}</h4>

      <div
        className={`show-more  mt-30 js-show-more ${
          showMore ? "is-active" : ""
        } `}
      >
        <div
          className=" "
          style={showMore ? { maxHeight: "370px" } : {}}
        >
          <p className="">
            { isClient ?
            locale == 'en' ? parse(course.en_desc) : parse(course.ar_desc) 
            : ''}
          </p>
        </div>

  
      </div>


    </div>
  );
}
