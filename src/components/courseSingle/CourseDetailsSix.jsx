"use client";

import Overview from "./Overview";
import React, { useState, useEffect } from "react";
import { Link } from "@/src/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import ModalVideoComponent from "../common/ModalVideo";
import Image from "next/image";
import useCartStore from "@/store/cartStore";
import {useRouter} from '@/src/i18n/routing'; 
import { getCourseDetails } from "@/lib/data";
import { coursesUploadUrl, teachersUploadUrl } from "@/lib/constants";


export default function CourseDetailsSix({ courseId }) {

  const [course, setPageCourse] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const router = useRouter();
  const t = useTranslations('CourseDetails');
  const locale = useLocale();
  const { addCourseToCart, isAddedToCartCourses } = useCartStore(); 
  
  useEffect(() => {
    if (!courseId) return; 

    const fetchCourse = async () => {
      try {
        const res = await getCourseDetails(courseId);
        if (res) {
          setPageCourse(res);
        }
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourse();
  }, [courseId]);

  const addToCart = (course) => {
    addCourseToCart(course);
    router.push('/course-cart');
  }

  if (!course) {
    return <>
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
    </div>
    </>
  }

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
                    {course.level_en ?
                    <div className="badge px-15 py-8 text-11 bg-green-1 text-dark-1 fw-400">
                    { locale == 'en' ? course.level_en : course.level_ar }
                    </div>
                    : ""
                    }
                  </div>
                  <div>
                    {course.difficulty_en ?
                    <div className="badge px-15 py-8 text-11 bg-orange-1 text-white fw-400">
                    { locale == 'en' ? course.difficulty_en : course.difficulty_ar }
                    </div>
                    : "" 
                    }
                  </div>
                  <div>
                    {course.language_en ?
                    <div className="badge px-15 py-8 text-11 bg-purple-1 text-white fw-400">
                    { locale == 'en' ? course.language_en : course.language_ar }                    
                    </div>
                    : ""
                    }
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
                      backgroundImage: `url(${teachersUploadUrl + course.teacher.image})`,
                    }}
                  ></div>
                  <div className="text-14 lh-1 ml-10 text-dark-3">
                    { locale == "en" ? course.teacher.en_name : course.teacher.ar_name }
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
                {course.original_price || course.discounted_price ? (
                  <>
                  <div className="d-flex justify-between items-center">
                    <div className="text-24 lh-1 text-white fw-500">
                      {t("currancy")} {course.discounted_price}
                    </div>
                    <div className="lh-1 line-through text-white">
                    {t("currancy")} {course.original_price}
                    </div>
                  </div>
                  </>
                  ) : (
                    <>
                      <div></div>
                      <div className="text-18 fw-500 text-white"> { t("free") } </div>
                    </>
                  )}
                  <div className="row x-gap-30 y-gap-20 pt-30">
                    <div className="col-sm-6">
                      <button
                        className="button -md -white-1 text-white w-1/1"
                        onClick={() => addToCart(course)}
                      > 
                        {isAddedToCartCourses(course.id)
                          ? t("alredy_added")
                          : t("add_to_cart") }
                      </button>
                    </div>
                    <div className="col-sm-6">
                      <Link href="/shop-list" className="button -md -white-1 text-white w-1/1">
                        {t("buy_courses")}
                      </Link>
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
        videoId={"Kkqm7wxiybs"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
