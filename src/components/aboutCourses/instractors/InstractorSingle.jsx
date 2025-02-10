"use client";
import Star from "../../common/Star";
import { Link } from "@/src/i18n/routing";
import Overview from "./Overview";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { coursesUploadUrl, teachersUploadUrl } from "@/lib/constants";
import { getTeacherDetails } from "@/lib/data";


export default function InstractorSingle({ instractorId }) {


  const t = useTranslations("InstractorPage");
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState(1);



  const [instractor, setInstractor] = useState(null);
  useEffect(() => {
    if (!instractorId) return; 

    const fetchInstractor = async () => {
      try {
        const res = await getTeacherDetails(instractorId);
        if (res) {
          console.log(res)
          setInstractor(res);
        }
      } catch (error) {
        console.error("Error fetching instractor details:", error);
      }
    };

    fetchInstractor();
  }, [instractorId]);

  if (!instractor) {
    return <p>{t("loading")}...</p>; 
  }

  return (
    <>
      <section className="page-header -type-3">
        <div className="page-header__bg bg-purple-1"></div>
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-8 col-lg-9 col-md-11">
              <div className="page-header__content">
                <div className="page-header__img">
                  <Image
                    width={120}
                    height={120}
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      objectFit: "cover",
                    }}
                    src={teachersUploadUrl + instractor.image}
                    alt={instractor.en_name}
                  />
                </div>

                <div className="page-header__info pt-20">
                  <h1 className="text-30 lh-14 fw-700 text-white">
                    { locale == "en" ? instractor.en_name : instractor.ar_name }
                  </h1>
                  <div className="text-white">{ locale == "en" ? instractor.role_en : instractor.role_ar }</div>
                  <div className="d-flex x-gap-20 pt-15">
                    <div className="d-flex items-center text-white">
                      <div className={`icon-star ${ locale == 'en' ? 'mr-10' : 'ml-10' }`}></div>
                      <div className="text-13 lh-1">{t('rating')}</div>
                    </div>

                    <div className="d-flex items-center text-white">
                      <div className={`icon-video-file ${ locale == 'en' ? 'mr-10' : 'ml-10' }`}></div>
                      <div className="text-13 lh-1">
                        {instractor.rating || 3545}  {t('reviews')}
                      </div>
                    </div>

                    <div className="d-flex items-center text-white">
                      <div className={`icon-person-3 ${ locale == 'en' ? 'mr-10' : 'ml-10' }`}></div>
                      <div className="text-13 lh-1">
                        { instractor.students }{" "}
                        {t('students')}
                      </div>
                    </div>

                    <div className="d-flex items-center text-white">
                      <div className={`icon-play ${ locale == 'en' ? 'mr-10' : 'ml-10' }`}></div>
                      <div className="text-13 lh-1">
                        { instractor.courses.length } {t('course')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="d-flex items-center mt-30">
                  <div className="d-flex items-center x-gap-15 text-white ml-25">
                    {pageItem.socialProfile?.map((itm, index) => (
                      <a key={index} href={itm.url}>
                        <i className={`fa ${itm.icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-8 col-lg-9 col-md-11">
              <div className="tabs -active-purple-2 js-tabs">
                <div className="tabs__controls d-flex js-tabs-controls">
                  <button
                    onClick={() => setActiveTab(1)}
                    className={`tabs__button js-tabs-button ${
                      activeTab == 1 ? "is-active" : ""
                    }`}
                    data-tab-target=".-tab-item-1"
                    type="button"
                  >
                    {t('overview_tab')}
                  </button>
                  <button
                    onClick={() => setActiveTab(2)}
                    className={`tabs__button js-tabs-button ${ locale == 'en' ? 'ml-30 ' : 'mr-30 ' } ${
                      activeTab == 2 ? "is-active" : ""
                    } `}
                    data-tab-target=".-tab-item-2"
                    type="button"
                  >
                    {t('courses_tab')}
                  </button>
                </div>

                <div className="tabs__content pt-60 lg:pt-40 js-tabs-content">
                  <div
                    className={`tabs__pane -tab-item-1  ${
                      activeTab == 1 ? "is-active" : ""
                    } `}
                  >
                    <h4 className="text-20">{t('description')}</h4>
                    <Overview instractor={instractor}/>
                  </div>

                  <div
                    className={`tabs__pane -tab-item-2 ${
                      activeTab == 2 ? "is-active" : ""
                    } `}
                  >
                    <div className="row">
                      {instractor.courses.slice(0, 2).map((elm) => (
                        <div key={elm.id} className="col-md-6">
                          <div className="coursesCard -type-1 rounded-8 shadow-3 bg-white">
                            <div className="relative">
                              <div className="coursesCard__image overflow-hidden rounded-top-8">
                                <Image
                                  width={510}
                                  height={360}
                                  className="w-1/1"
                                  src={coursesUploadUrl + elm.image}
                                  alt={elm.en_name}
                                />
                                <div className="coursesCard__image_overlay rounded-top-8"></div>
                              </div>
                              <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                                {/* {elm.popular && ( */}
                                  <div>
                                    <div className="px-15 rounded-200 bg-purple-1">
                                      <span className="text-11 lh-1 uppercase fw-500 text-white">
                                      {t('popular')}
                                      </span>
                                    </div>
                                  </div>
                                {/* )} */}
                                {/* {elm.bestSeller && ( */}
                                  <div>
                                    <div className="px-15 rounded-200 bg-green-1">
                                      <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                                      {t('best_sellers')}
                                      </span>
                                    </div>
                                  </div>
                                {/* )} */}
                              </div>
                            </div>

                            <div className="h-100 pt-20 pb-15 px-30">
                              <div className="d-flex items-center">
                                <div className={`text-14 lh-1 text-yellow-1 ${ locale == 'en' ? 'mr-10' : 'ml-10' }`}>
                                  {elm.rating}
                                </div>
                                <div className="d-flex x-gap-5 items-center">
                                  <Star star={Math.round(elm.rating)} />
                                </div>
                                <div className={`text-13 lh-1 ${ locale == 'en' ? 'ml-10' : 'mr-10' }`}>
                                  ({elm.rating_count})
                                </div>
                              </div>

                              <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                                <Link
                                  className="linkCustom"
                                  href={`/courses/${elm.id}`}
                                >
                                  { locale == "en" ? elm.en_name : elm.ar_name }
                                </Link>
                              </div>

                              <div className="d-flex x-gap-10 items-center pt-10">
                                <div className="d-flex items-center">
                                  <div className={ locale == 'en' ? 'mr-8' : 'ml-8' }>
                                    <Image
                                      width={16}
                                      height={17}
                                      src="/assets/img/coursesCards/icons/1.svg"
                                      alt="icon"
                                    />
                                  </div>
                                  <div className="text-14 lh-1">
                                    {elm.lesson_count} {t('lesson')}
                                  </div>
                                </div>

                                <div className="d-flex items-center">
                                  <div className={ locale == 'en' ? 'mr-8' : 'ml-8' }>
                                    <Image
                                      width={16}
                                      height={17}
                                      src="/assets/img/coursesCards/icons/2.svg"
                                      alt="icon"
                                    />
                                  </div>
                                  <div className="text-14 lh-1">{`${Math.floor(
                                    elm.duration / 60,
                                  )}h ${Math.floor(elm.duration % 60)}m`}</div>
                                </div>

                                <div className="d-flex items-center">
                                  <div className={ locale == 'en' ? 'mr-8' : 'ml-8' }>
                                    <Image
                                      width={16}
                                      height={17}
                                      src="/assets/img/coursesCards/icons/3.svg"
                                      alt="icon"
                                    />
                                  </div>
                                  <div className="text-14 lh-1">
                                    { locale == "en" ? elm.level_en : elm.level_ar }
                                  </div>
                                </div>
                              </div>

                              <div className="coursesCard-footer">
                                <div className="coursesCard-footer__author">
                                  <Image
                                    width={30}
                                    height={30}
                                    src={ teachersUploadUrl + instractor.image }
                                    alt={instractor.en_name}
                                  />
                                  <div className={ locale == 'en' ? 'ml-8' : 'mr-8' }>{ locale == "en" ? instractor.en_name : instractor.ar_name }</div>
                                </div>

                                <div className="coursesCard-footer__price">
                                  {/* {elm.paid ? ( */}
                                    <>
                                      <div>{t('currancy')} {elm.original_price}</div>
                                      <div>{t('currancy')} {elm.discounted_price}</div>
                                    </>
                                  {/* ) : (
                                    <>
                                      <div></div>
                                      <div>{t('free')}</div>
                                    </>
                                  )} */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
