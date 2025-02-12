"use client";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import ImageLightBox from "./ImageLightBox";
import useCartStore from "@/store/cartStore";
import { useTranslations } from "next-intl";
export default function ProductDetails({ id }) {

  const t = useTranslations("ShopPage");
  const { addCourseToCart, isAddedToCartCourses } = useCartStore();
  const swiperRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showSlider, setShowSlider] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [pageItems, setpageItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({});
  const [activeLightBox, setActiveLightBox] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(currentSlideIndex + 1);
    }
  }, [currentSlideIndex]);

  useEffect(() => {
    const item = arProductData.filter((elm) => elm.id == id)[0] || arProductData[0];
    setCurrentItem(item);
    const OtherItems = arProductData.filter((elm) => elm != item).slice(0, 3);
    setpageItems([item, ...OtherItems]);
  }, []);

  useEffect(() => {
    setShowSlider(true);
  }, []);

  const handlePaginationClick = (index) => {
    setCurrentSlideIndex(index);

    if (swiperRef.current) {
      swiperRef.current.slideTo(index + 1);
    }
  };

  const handleSlideChange = (swiper) => {
    if (swiper.activeIndex > 4) {
      if (currentSlideIndex < swiper.activeIndex) {
        setCurrentSlideIndex(0);
      }
    } else if (swiper.activeIndex < 1) {
      setCurrentSlideIndex(3);
    } else {
      setCurrentSlideIndex(swiper.activeIndex - 1);
    }
  };
  return (
    <>
      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-60 justify-between items-center">
            <div className="col-lg-6">
              <div className="js-shop-slider">
                <div className="shopSingle-preview__image js-slider-slider">
                  {showSlider && (
                    <Swiper
                      className="overflow-visible"
                      // {...setting}
                      modules={[Navigation, Pagination]}
                      loop={true}
                      spaceBetween={0}
                      speed={1000}
                      slidesPerView={1}
                      onSwiper={(swiper) => {
                        swiperRef.current = swiper; // Store the Swiper instance in the ref
                      }}
                      onSlideChange={handleSlideChange}
                    >
                      {pageItems.map((elm, i) => (
                        <SwiperSlide key={i} className="swiper-slide">
                          <div className="swiper-slide">
                            <span
                              data-barba
                              className="gallery__item js-gallery"
                              data-gallery="gallery1"
                            >
                              <div className="ratio ratio-63:57">
                                <Image
                                  width={690}
                                  height={625}
                                  className="absolute-full-center rounded-8"
                                  src={elm.image}
                                  alt="project image"
                                />
                              </div>

                              <div
                                className="gallery__button -bottom-right"
                                onClick={() => setActiveLightBox(true)}
                              >
                                <FontAwesomeIcon
                                  style={{
                                    fontWeight: 800,
                                    fontSize: "20px",
                                    color: "#fff",
                                  }}
                                  icon={faPlus}
                                />
                              </div>
                            </span>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                </div>

                <div className="row y-gap-10 x-gap-10 pt-10 js-slider-pagination">
                  {pageItems.map((elm, i) => (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => handlePaginationClick(i)}
                      key={i}
                      className="col-auto gallery__item"
                    >
                      <Image
                        width={90}
                        height={90}
                        className="size-90 object-cover rounded-8"
                        src={elm.image}
                        alt="project image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="pb-90 md:pb-0">
                <h2 className="text-30 fw-500 mt-4">{currentItem.name}</h2>
                <div className="text-24 fw-500 text-purple-1 mt-15">
                  {currentItem.price} {t("currancy")} 
                </div>

                <div className="mt-30">
                  <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                  </p>
                </div>

                <div className="shopSingle-info__action row x-gap-20 y-gap-20 pt-30">
                  <div className="col-auto">
                    <div className="input-counter js-input-counter">
                      <input
                        required
                        className="input-counter__counter"
                        type="number"
                        placeholder="value..."
                        value={itemQuantity}
                      />

                      <div className="input-counter__controls">
                        <button
                          className="input-counter__up js-down"
                          onClick={() =>
                            setItemQuantity((pre) => (pre > 1 ? pre - 1 : pre))
                          }
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>

                        <button
                          className="input-counter__down js-up"
                          onClick={() => setItemQuantity((pre) => pre + 1)}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <button
                      className="button h-50 px-45 -purple-1 text-white"
                      onClick={() => addProductToCart(currentItem)}
                    >
                      {isAddedToCartCourses(currentItem.id)
                        ? t("alredy_added")
                        : t("add_to_cart")}
                    </button>
                  </div>
                </div>

                <div className="pt-30">
                  <button className="d-flex items-center text-light-1">
                    <i className="icon size-20 ml-8" data-feather="heart"></i>
                    {t("withlist")}
                  </button>
                </div>

                <div className="pt-30">
                  <p>{ t("category") }: برمجة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-md">
        <div className="tabs -active-purple-1 js-tabs">
          <div className="row pt-30 border-top-dark">
            <div className="col-12">
              <div className="tabs__controls d-flex justify-center js-tabs-controls">
                <button
                  className={`tabs__button js-tabs-button ${
                    activeTab == 1 ? "is-active" : ""
                  } `}
                  data-tab-target=".-tab-item-1"
                  type="button"
                  onClick={() => setActiveTab(1)}
                >
                  {t("description_tab")}
                </button>
                <button
                  className={`tabs__button js-tabs-button mr-30  ${
                    activeTab == 2 ? "is-active" : ""
                  } `}
                  data-tab-target=".-tab-item-2"
                  type="button"
                  onClick={() => setActiveTab(2)}
                >
                  {t("reviews_tab")} (2)
                </button>
              </div>
            </div>

            <div className="container pt-60">
              <div className="row justify-center">
                <div className="col-xl-8 col-lg-10 justify-center">
                  <div className="tabs__content js-tabs-content lg:px-15 md:px-15">
                    <div
                      className={`tabs__pane -tab-item-1  ${
                        activeTab == 1 ? "is-active" : ""
                      } `}
                    >
                      <h4 className="text-18 fw-500">
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،
                      </h4>
                      <p className="mt-30">
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،
                       حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                       إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد،
                        النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
                      </p>
                    </div>

                    <div
                      className={`tabs__pane -tab-item-2  ${
                        activeTab == 2 ? "is-active" : ""
                      } `}
                    >
                      <div className="blogPost -comments">
                        <div className="blogPost__content">
                          <h2 className="text-20 fw-500">{t("reviews_title")}</h2>

                          <ul className="comments__list mt-30">
                            <li className="comments__item">
                              <div className="comments__item-inner md:direction-column">
                                <div className="comments__img ml-20">
                                  <div
                                    className="bg-image rounded-full js-lazy"
                                    style={{
                                      backgroundImage:
                                        "url(/assets/img/avatars/1.png)",
                                    }}
                                  ></div>
                                </div>

                                <div className="comments__body md:mt-15">
                                  <div className="comments__header">
                                    <h4 className="text-17 fw-500 lh-15">
                                      آسامة محمد
                                      <span className="text-13 text-light-1 fw-400  mr-8">
                                        قبل ثلاثة ايام
                                      </span>
                                    </h4>

                                    <div className="stars"></div>
                                  </div>

                                  <h5 className="text-15 fw-500 mt-15">
                                    افضل كورس بالعالم
                                  </h5>
                                  <div className="comments__text mt-10">
                                    <p>
                                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى
                                    </p>
                                  </div>

                                </div>
                              </div>
                            </li>

                            <li className="comments__item">
                              <div className="comments__item-inner md:direction-column">
                                <div className="comments__img ml-20">
                                  <div
                                    className="bg-image rounded-full js-lazy"
                                    style={{
                                      backgroundImage:
                                        "url(/assets/img/avatars/1.png)",
                                    }}
                                  ></div>
                                </div>

                                <div className="comments__body md:mt-15">
                                  <div className="comments__header">
                                    <h4 className="text-17 fw-500 lh-15">
                                      علي احمد
                                      <span className="text-13 text-light-1 fw-400 mr-8">
                                        قبل ساعة
                                      </span>
                                    </h4>

                                    <div className="stars"></div>
                                  </div>

                                  <h5 className="text-15 fw-500 mt-15">
                                    معلومات مفيدة جدا
                                  </h5>
                                  <div className="comments__text mt-10">
                                  <p>
                                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="respondForm pt-30">
                        <h3 className="text-20 fw-500">{t("review_form_title")}</h3>

                        <form
                          className="contact-form respondForm__form row y-gap-30 pt-30"
                          onSubmit={handleSubmit}
                        >
                          <div className="col-12">
                            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                            {t("review_title_label")}
                            </label>
                            <input
                              required
                              type="text"
                              name="title"
                              placeholder={t("review_title_placeholder")}
                            />
                          </div>
                          <div className="col-12">
                            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                            {t("review_content_label")}
                            </label>
                            <textarea
                              required
                              name="comment"
                              placeholder={t("review_content_placeholder")}
                              rows="8"
                            ></textarea>
                          </div>
                          <div className="col-12">
                            <button
                              type="submit"
                              name="submit"
                              id="submit"
                              className="button -md -purple-1 text-white"
                            >
                              {t("review_btn")}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ImageLightBox
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
        setActiveLightBox={setActiveLightBox}
        activeLightBox={activeLightBox}
        images={pageItems}
      />
    </>
  );
}
