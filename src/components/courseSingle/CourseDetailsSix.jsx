"use client";

import Overview from "./Overview";
import React, { useState, useEffect } from "react";

import { useLocale, useTranslations } from "next-intl";
import ModalVideoComponent from "../common/ModalVideo";
import Image from "next/image";
import { useContextElement } from "@/context/Context";
import { coursesUploadUrl } from "@/lib/constants";


export default function CourseDetailsSix({ course }) {

  const [pageItem, setPageItem] = useState(course);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const t = useTranslations('CourseDetails');
  const locale = useLocale();
  const { isAddedToCartCourses, addCourseToCart } = useContextElement();
  // useEffect(() => {
  //   setPageItem(coursesData.filter((elm) => elm.id == id)[0] || coursesData[0]);
  // }, []);

  return (
    <>
      <section className="page-header -type-5 bg-dark-1">
        <div className="page-header__bg">
          <div
            className="bg-image js-lazy"
            data-bg="img/event-single/bg.png"
          ></div>
        </div>

        <div className="container">
          <div className="page-header__content pt-80 pb-90">
            <div className="row y-gap-30 justify-between">
              <div className="col-xl-6 col-lg-6">
                <div className="d-flex x-gap-15 y-gap-10 pb-20">
                  <div>
                    <div className="badge px-15 py-8 text-11 bg-green-1 text-dark-1 fw-400">
                    { locale == 'en' ? course.level_en : course.level_ar }
                    </div>
                  </div>
                  <div>
                    <div className="badge px-15 py-8 text-11 bg-orange-1 text-white fw-400">
                    { locale == 'en' ? course.difficulty_en : course.difficulty_ar }
                    </div>
                  </div>
                  <div>
                    <div className="badge px-15 py-8 text-11 bg-purple-1 text-white fw-400">
                    { locale == 'en' ? course.language_en : course.language_ar }                    
                    </div>
                  </div>
                </div>

                <div>
                  <h1 className={`text-30 lh-14 text-white lg:pr-0   ${ locale == 'en' ? ' pr-60 ' : ' pl-60 ' }`}>
                    { locale == 'en' ? course.en_name : course.ar_name }
                  </h1>
                </div>
 



                <div className="d-flex items-center pt-20">
                  <div
                    className="bg-image size-30 rounded-full js-lazy"
                    style={{
                      backgroundImage: `url(${pageItem.authorImageSrc})`,
                    }}
                  ></div>
                  <div className="text-14 lh-1 ml-10 text-dark-3">
                    {pageItem.authorName}
                  </div>
                </div>

                <div className="mt-30">
                  <div className="d-flex justify-between py-8 border-bottom-light-2">
                    <div className="d-flex items-center text-white">
                      <div className="icon-video-file"></div>
                      <div className={locale == 'en' ? 'ml-10' : 'mr-10'}>{t("lessons")}</div>
                    </div>
                    <div className="text-white">{course.lesson_count}</div>
                  </div>

                  <div className="d-flex justify-between py-8 border-bottom-light-2">
                    <div className="d-flex items-center text-white">
                      <div className="icon-clock-2"></div>
                      <div className={locale == 'en' ? 'ml-10' : 'mr-10'}>{t('duration')}</div>
                    </div>
                    <div className="text-white">{course.duration} {t('hours')}</div>
                  </div>

                  <div className="d-flex justify-between py-8 border-bottom-light-2">
                    <div className="d-flex items-center text-white">
                      <div className="icon-bar-chart-2"></div>
                      <div className={locale == 'en' ? 'ml-10' : 'mr-10'}>{t("level")}</div>
                    </div>
                    <div className="text-white">{locale == 'en' ? course.level_en : course.level_ar}</div>
                  </div>

                  <div className="d-flex justify-between py-8 border-bottom-light-2">
                    <div className="d-flex items-center text-white">
                      <div className="icon-translate"></div>
                      <div className={locale == 'en' ? 'ml-10' : 'mr-10'}>{t("language")}</div>
                    </div>
                    <div className="text-white">{locale == 'en' ? course.language_en : course.language_ar}</div>
                  </div>

                  <div className="d-flex justify-between py-8 border-bottom-light-2">
                    <div className="d-flex items-center text-white">
                      <div className="icon-infinity"></div>
                      <div className={locale == 'en' ? 'ml-10' : 'mr-10'}>{t("difficulty")}</div>
                    </div>
                    <div className="text-white">{locale == 'en' ? course.difficulty_en : course.difficulty_ar}</div>
                  </div>
                </div>


              </div>

              <div className="col-xl-5 col-lg-6">
                <div className="relative">
                  <Image
                    width={690}
                    height={342}
                    className="w-1/1"
                    src={coursesUploadUrl + course.image}
                    alt="image"
                  />
                  <div className="absolute-full-center d-flex justify-center items-center">
                    <div
                      onClick={() => setIsOpen(true)}
                      className="d-flex justify-center items-center size-60 rounded-full bg-white js-gallery cursor"
                    >
                      <div className="icon-play text-18"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-30">
                  <div className="d-flex justify-between items-center">
                    <div className="text-24 lh-1 text-white fw-500">
                      {t("currancy")} {course.original_price}
                    </div>
                    <div className="lh-1 line-through text-dark-3">
                    {t("currancy")} {course.discounted_price}
                    </div>
                  </div>

                  <div className="row x-gap-30 y-gap-20 pt-30">
                    <div className="col-sm-6">
                      <button
                        className="button -md -purple-1 text-white w-1/1"
                        onClick={() => addCourseToCart(course.id)}
                      > 
                        {isAddedToCartCourses(course.id)
                          ? t("alredy_added")
                          : t("add_to_cart") }
                      </button>
                    </div>
                    <div className="col-sm-6">
                      <button className="button -md -outline-green-1 text-green-1 w-1/1">
                        {t("buy_courses")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="tabs -side js-tabs">
            <div className="row y-gap-40">

              <div className="col-lg-12">
                <div className="tabs__content js-tabs-content">
                  <div
                    className={`tabs__pane -tab-item-1 ${
                      activeTab == 1 ? "is-active" : ""
                    } `}
                  >
                    <Overview course={course} />
                  </div>



                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideoComponent
        videoId={"LlCwHnp3kL4"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
