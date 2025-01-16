"use client";

import React, { useEffect, useState } from "react";

import CourceCard from "../homes/courseCards/CourseCardFive";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations, useLocale } from "next-intl";

export default function CoursesSlider({ categories, courses }) {

  const t = useTranslations("CoursesPage");
  const locale = useLocale();
  const [showSlider, setShowSlider] = useState(false);
  const [currentCourseState, setCurrentCourseState] = useState(categories[0].id);
  const [pageItem, setPageItem] = useState([]);

  useEffect(() => {
    if (currentCourseState == categories[0].id) {
      setPageItem(courses);
    } else {
      const filtered = courses.filter(
        (elm) => elm.category.id == currentCourseState,
      );
      setPageItem(filtered);
    }
  }, [currentCourseState]);

  useEffect(() => {
    setShowSlider(true);
  }, []);
  return (
    <section className="layout-pt-lg layout-pb-md">
      <div className="container">
        <div className="tabs -pills js-tabs">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <h2 className="text-24 lh-12">{t("coursesTitle")}</h2>
            </div>

            <div className="col-auto">
              <div className="tabs__controls d-flex justify-center x-gap-10 js-tabs-controls">
                {categories.map((elm) => (
                  <div key={elm.id}>
                    <button
                      onClick={() => setCurrentCourseState(elm.id)}
                      className={`${
                        "tabs__button px-20 py-8 rounded-200 js-tabs-button"
                      }  ${currentCourseState == elm.id ? "is-active" : ""} `}
                      data-tab-target=".-tab-item-1"
                      type="button"
                    >
                      { locale == 'en' ? elm.en_name: elm.ar_name  }
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="tabs__content pt-60 lg:pt-50 js-tabs-content">
            <div className="tabs__pane -tab-item-1 is-active">
              <div
                className="overflow-hidden js-section-slider"
                data-gap="30"
                data-slider-cols="xl-4 lg-3 md-2 sm-2"
              >
                {showSlider && (
                  <Swiper
                    // {...setting}
                    modules={[Navigation, Pagination]}
                    navigation={{
                      nextEl: ".course-five-right",
                      prevEl: ".course-five-left",
                    }}
                    // loop={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                      // when window width is >= 576px
                      450: {
                        slidesPerView: 2,
                      },
                      // when window width is >= 768px
                      768: {
                        slidesPerView: 3,
                      },
                      1200: {
                        // when window width is >= 992px
                        slidesPerView: 4,
                      },
                    }}
                  >
                    {pageItem.map((elm) => (
                      <SwiperSlide key={elm.id}>
                        <CourceCard data={elm} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}

                <button className="course-five-left section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-prev">
                  <i className="icon icon-arrow-left text-24"></i>
                </button>

                <button className="course-five-right section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-next">
                  <i className="icon icon-arrow-right text-24"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
