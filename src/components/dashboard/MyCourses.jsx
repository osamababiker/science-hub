"use client";

import React, { useEffect, useState } from "react";
import FooterThree from "@/src/components/layout/footers/FooterThree";
import CoursesCardDashboard from "./DashBoardCards/CoursesCardDashboard";
import { useTranslations, useLocale } from "next-intl";

export default function MyCourses({categories, orders}) {

  const [currentCategory, setCurrentCategory] = useState(categories[0].id);
  const [pageItems, setPageItems] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const [pageData, setPageData] = useState(orders);


  const t = useTranslations('Dashboard');
  const locale = useLocale();

  useEffect(() => {
    if (activeTab == 1) {
      setPageData(orders);
    } else if (activeTab == 2) {
      setPageData(orders.filter((elm) => elm.status == 0));
    } else if (activeTab == 3) {
      setPageData(orders.filter((elm) => elm.status == 1));
    }
  }, [activeTab]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (currentCategory == categories[0].id) {
      setPageItems(pageData);
    } else {
      setPageItems([
        ...pageData.filter((elm) => elm.category.id == currentCategory),
      ]);
    }
  }, [currentCategory, pageData]);

  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">{t("my_courses_title")}</h1>
            <div className="mt-10">
              {t("my_courses_bio")}
            </div>
          </div>
        </div>

        <div className="row y-gap-30">
          <div className="col-12">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="tabs -active-purple-2 js-tabs">
                <div className="tabs__controls d-flex items-center pt-20 px-30 border-bottom-light js-tabs-controls">
                  <button
                    className={`text-light-1 lh-12 tabs__button js-tabs-button ${
                      activeTab == 1 ? "is-active" : ""
                    } `}
                    data-tab-target=".-tab-item-1"
                    type="button"
                    onClick={() => setActiveTab(1)}
                  >
                    { t("all_courses_tab") }
                  </button>
                  <button
                    className={`text-light-1 lh-12 tabs__button js-tabs-button ${ locale == 'en' ? 'ml-30 ' : 'mr-30 ' } ${
                      activeTab == 2 ? "is-active" : ""
                    } `}
                    data-tab-target=".-tab-item-2"
                    type="button"
                    onClick={() => setActiveTab(2)}
                  >
                    { t("finished_tab") }
                  </button>
                  <button
                    className={`text-light-1 lh-12 tabs__button js-tabs-button ${ locale == 'en' ? 'ml-30 ' : 'mr-30 ' }  ${
                      activeTab == 3 ? "is-active" : ""
                    } `}
                    data-tab-target=".-tab-item-3"
                    type="button"
                    onClick={() => setActiveTab(3)}
                  >
                    { t("not_enrolled") }
                  </button>
                </div>

                <div className="tabs__content py-30 px-30 js-tabs-content">
                  <div className="tabs__pane -tab-item-1 is-active">
                    <div className="row y-gap-30 pt-30">
                      {
                        pageItems.length == 0 ? 
                        <div className="alert alert-info">  { t("no_courses") } </div>
                        : 
                        pageItems.map((order) => (
                          <CoursesCardDashboard order={order} key={order.id} />
                        ))
                      }
                    </div>
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
