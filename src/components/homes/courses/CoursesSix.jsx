"use client";

import React, { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import CourseCardSix from "@/src/components/homes/courseCards/CourseCardSix";

export default function CoursesSix({categories, courses}) {


  const t = useTranslations('Courses');
  const locale = useLocale();


  const [pageItems, setPageItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(categories[0].id);
  useEffect(() => {
    let filtered = [];

    if (currentCategory == categories[0].id) {
      filtered = courses;
    } else {
      let CoursesdataToFilter = courses;
      filtered = CoursesdataToFilter.filter((elm) => elm.category.id == currentCategory);
    }

    setPageItems(filtered);
  }, [currentCategory]);


  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container tabs -pills-2 js-tabs">
        <div className="row y-gap-20 justify-between items-end">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">{t('title')}</h2>

              <p className="sectionTitle__text ">
                {t('bio')}
              </p>
            </div>
          </div>

          <div className="col-auto">
            <div className="tabs__controls row justify-center x-gap-10 bg-light-3 rounded-200 py-5 js-tabs-controls">
              {categories.slice(0, 4).map((elm) => (
                <div
                  key={elm.id}
                  className="col-auto"
                  onClick={() => setCurrentCategory(elm.id)}
                >
                  <button
                    className={`tabs__button px-20 py-8 rounded-200 fw-500 js-tabs-button ${
                      currentCategory == elm.id ? "is-active" : ""
                    } `}
                    data-tab-target=".-tab-item-1"
                    type="button"
                  >
                    {locale == 'en' ? elm.en_name : elm.ar_name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="tabs__content pt-60 lg:pt-40 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-active">
            <div
              className="row y-gap-30 justify-start"
              data-aos="fade-right"
              data-aos-offset="80"
              data-aos-duration={800}
            >
              {pageItems.slice(0, 6).map((elm) => (
                <CourseCardSix data={elm} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
