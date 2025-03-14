"use client";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";
import { useEffect, useState } from "react";
import {Link} from '@/src/i18n/routing';
import { categoriesUploadUrl } from "@/lib/constants";

export default function CategoriesSix({categories}) {

  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);

  const t = useTranslations('Categories');
  const locale = useLocale();

  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">{t('title')}</h2>

              <p className="sectionTitle__text "> 
                {t('bio')}
              </p>
            </div>
          </div>
        </div>

        <div
          className="overflow-hidden pt-50 js-section-slider"
          data-gap="30"
          data-loop
          data-pagination
          data-slider-cols="base-1 xl-6 lg-4 md-3 sm-2"
        >
          {showSlider && (
            <Swiper
              // {...setting}

              modules={[Navigation, Pagination]}
              pagination={{
                el: ".category-six-pagination",
                clickable: true,
              }}
              navigation={{
                nextEl: ".category-six-right",
                prevEl: ".category-six-left",
              }}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                // when window width is >= 576px
                450: {
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 4,
                },
                1200: {
                  // when window width is >= 992px
                  slidesPerView: 6,
                },
              }}
              loop={true}
            >
              {categories.map((elm) => (
                <SwiperSlide key={elm.id}>
                  <Link
                    href="/courses-list"
                    className="swiper-slide linkCustomTwo"
                  >
                    <div
                      className="bg-white border-light rounded-8 -featureCard-hover-2"
                      data-aos="fade-left"
                      data-aos-duration={(elm.id + 1) * 350}
                    >
                      <div className="py-30 px-40 text-center">
                        <div className="featureCard__icon size-90 mx-auto d-flex items-center justify-center rounded-full bg-light-3">
                          {elm.image ?
                          <Image
                            width={100}
                            height={100} 
                            src={categoriesUploadUrl + elm.image}
                            alt="icon"
                          />
                          : 
                          <i className="icon-flag"></i>
                          }
                        </div>
                        <div className="featureCard__title text-17 fw-500 text-dark-1 mt-20">
                          { locale == 'en' ? elm.en_name : elm.ar_name }
                        </div>
                        <div className="featureCard__text text-13 lh-1 mt-10">
                          {elm.courses.length} + {t('courses_count')}
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                // 140,90
              ))}
            </Swiper>
          )}

          <div className="d-flex x-gap-15 items-center justify-center pt-50">
            <div className="col-auto">
              <button className={`d-flex items-center text-24 js-prev ${ locale == 'en' ? 'arrow-left-hover  category-six-left' : 'arrow-right-hover  category-six-right' }`}>
                <i className={`icon icon-arrow-${ locale == 'en' ? 'left' : 'right' }`}></i>
              </button>
            </div>
            <div className="col-auto">
              <div className="pagination -arrows js-pagination category-six-pagination"></div>
            </div>
            <div className="col-auto">
              <button className={`d-flex items-center text-24  js-next ${ locale == 'en' ? 'arrow-right-hover category-six-right' : 'arrow-left-hover category-six-left' }`}>
                <i className={`icon icon-arrow-${ locale == 'en' ? 'right' : 'left' }`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
