"use client";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

import React from "react";
import { slidesData } from "@/data/hero";
import { useRouter } from "next/navigation"; 
import { useTranslations, useLocale } from "next-intl";

export default function HeroTwo() {

  const router = useRouter();
  const [showSlider, setShowSlider] = useState(false);
  const t = useTranslations('HomeHero');
  const locale = useLocale(); 
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/${locale}/courses-list?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  
  const featureTwo = [
    {
      id: 1,
      imgSrc: "/assets/img/home-5/learning/3.svg",
      title: t('feature_title_one'),
      description: t('feature_description_one'),
    },
    {
      id: 2,
      imgSrc: "/assets/img/home-5/learning/4.svg",
      title: t('feature_title_two'),
      description: t('feature_description_two'),
    },
    {
      id: 3,
      imgSrc: "/assets/img/home-5/learning/2.svg",
      title: t('feature_title_three'),
      description: t('feature_description_three'),
    }
  ];

  useEffect(() => {
    setShowSlider(true);
  }, []); 
  return (
    <section className="mainSlider -type-1 js-mainSlider customizedHeroBackground">

      <div className="swiper-wrapper-two">
        <div className="swiper-slide hightFull">
          <div className="mainSlider__bg">
            <div className="bg-image js-lazy customedBg">
              <video 
                autoPlay
                loop
                muted
                playsInline
                className="bg-video"
              >
                <source src="/assets/video/science_hub.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div> 
      </div>

      {/* <div className="swiper-wrapper-two">
        {showSlider && (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".hero-slider-next",
              prevEl: ".hero-slider-prev",
            }}
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              450: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1200: { slidesPerView: 1 },
            }}
            speed={1200}
          >
            {slidesData.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="swiper-slide hightFull">
                  <div className="mainSlider__bg">
                    <div
                      className="bg-image customedBg"
                      style={{
                        backgroundImage: `url(${item.bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div> */}

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-7 col-lg-8">
            <div
              className="mainSlider__content"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h1 className="mainSlider__title text-white">
              {t('title_one')}  {" "}
                <span className="text-green-1 "> {t('title_two')} {t('title_three')} </span>
              </h1>

              <p className="mainSlider__text text-white">
                {t("bio")}
              </p>

              {/* <div className={`mainSlider__form ${ locale == "en" ? "" : "mainSlider__form_ar" }`}> 
                <input
                  type="text"
                  placeholder={t("search_placeholder")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button
                  className="button -md -purple-1 text-white"
                  onClick={handleSearch}
                >
                  <i className={`icon icon-search ${ locale == "en" ? "mr-15" : "ml-15" }`}></i>
                  {t("search_btn")}
                </button>
              </div> */}
            </div>
          </div>
        </div>

        <div className="row y-gap-20 justify-center mainSlider__items">
          {featureTwo.map((elm, i) => (
            <div key={i} className="col-xl-3 col-md-4 col-sm-6">
              <div className="mainSlider-item text-center">
                <Image width={50} height={50} src={elm.imgSrc} alt="icon" />
                <h4 className="text-20 fw-500 lh-18 text-white mt-8">
                  {elm.title}
                </h4>
                <p className="text-15 text-white">{elm.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <button className="swiper-prev hero-slider-prev button -white-20 text-white size-60 rounded-full d-flex justify-center items-center js-prev">
        <i className="icon icon-arrow-left text-24"></i>
      </button>

      <button className="swiper-next hero-slider-next button -white-20 text-white size-60 rounded-full d-flex justify-center items-center js-next">
        <i className="icon icon-arrow-right text-24"></i>
      </button> */}
    </section>
  );
}
