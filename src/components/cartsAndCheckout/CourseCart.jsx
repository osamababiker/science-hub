"use client";

import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import useCartStore from "@/store/cartStore";
import {Link} from '@/src/i18n/routing';
import { useTranslations, useLocale } from "next-intl";
import { coursesUploadUrl } from "@/lib/constants";

export default function CourseCart() {

  const t = useTranslations('CartPage');
  const locale = useLocale(); 

  const { cartCourses, removeCourseFromCart, increaseQuantity, decreaseQuantity } = useCartStore();
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  }; 

  const handleIncrease = (index) => {
    const item = cartCourses[index]; 

    item.quantity += 1;
    const updated = [...cartCourses];
    updated[index] == item;

    setCartCourses(updated);
  };
  const handleDecrease = (index) => {
    const item = cartCourses[index];

    if (item.quantity > 1) {
      item.quantity -= 1;
      const updated = [...cartCourses];
      updated[index] == item;

      setCartCourses(updated);
    }
  };

  const handleRemoveCart = (index) => {
    const item = cartCourses[index];

    setCartCourses((pre) => [...pre.filter((elm) => elm !== item)]);
  };
  useEffect(() => {
    const sum = cartCourses.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.discounted_price * currentValue.quantity;
    }, 0);
    setTotalPrice(sum);
  }, [cartCourses]);

  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">{t('checkout_title')}</h1>
                </div>

                <div>
                  <p className="page-header__text">
                  {t('bio')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md">
        <div className="container">
          <div className="row justify-end">
            <div className="col-12">
              <div className="px-30 pr-60 py-25 rounded-8 bg-light-6 md:d-none">
                <div className="row justify-between">
                  <div className="col-md-4">
                    <div className="fw-500 text-purple-1">{t('course')}</div>
                  </div>
                  <div className="col-md-2">
                    <div className="fw-500 text-purple-1">{t('price')}</div>
                  </div>
                  <div className="col-md-2">
                    <div className="fw-500 text-purple-1">{t('quantity')}</div>
                  </div>
                  <div className="col-md-2">
                    <div className="fw-500 text-purple-1">{t('subtotal')}</div>
                  </div>
                  <div className="col-md-1">
                    <div className="d-flex justify-end">
                      <div className="fw-500 text-purple-1">{t('remove')}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-30 pr-60 md:px-0">
                {cartCourses.map((elm, i) => (
                  <div
                    key={i}
                    className="row y-gap-20 justify-between items-center pt-30 pb-30 border-bottom-light"
                  >
                    <div className="col-md-4">
                      <div className="d-flex items-center">
                        <div className="">
                          <div
                            className="size-100 bg-image rounded-8 js-lazy"
                            style={{ backgroundImage: `url(${ coursesUploadUrl + elm.image })` }}
                          ></div>
                        </div>
                        <div className="fw-500 text-dark-1 ml-30">
                        <Link
                          className="linkCustom"
                          href={`/courses/${elm.id}`}
                        >
                          { locale == 'en' ? elm.en_name : elm.ar_name }{" "}
                        </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-2 md:mt-15">
                      <div className="">
                        <div className="shopCart-products__title d-none md:d-block mb-10">
                        {t('price')}
                        </div>
                        <p>{elm.discounted_price} {t("currancy")} </p>
                      </div>
                    </div>

                    <div className="col-md-2">
                      <div className="">
                        <div className="shopCart-products__title d-none md:d-block mb-10">
                        {t('quantity')}
                        </div>

                        <div className="input-counter md:mt-20 js-input-counter">
                          <input
                            required
                            className="input-counter__counter"
                            type="number"
                            placeholder={t('quantity_placeholder')}
                            value={elm.quantity}
                          />

                          <div className="input-counter__controls">
                            <button
                              className="input-counter__up js-down"
                              onClick={() => decreaseQuantity(elm.id)}
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </button>

                            <button
                              className="input-counter__down js-up"
                              onClick={() => increaseQuantity(elm.id)}
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-1">
                      <div className="">
                        <div className="shopCart-products__title d-none md:d-block mb-10">
                        {t('subtotal')}
                        </div>

                        <p>
                        {t('currancy')} {(elm.quantity * elm.discounted_price).toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <div className="col-md-1">
                      <div
                        className="md:d-none d-flex justify-end"
                        onClick={() => removeCourseFromCart(elm.id)}
                      >
                        <FontAwesomeIcon icon={faX} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="shopCart-footer px-16 mt-30">
                {cartCourses.length > 0 ? (
                  <div className="row justify-between y-gap-30">
                    {/* <div className="col-xl-5">
                      <form className="" onSubmit={handleSubmit}>
                        <div className="d-flex justify-between border-dark">
                          <input
                            required
                            className="rounded-8 px-25 py-20"
                            type="text"
                            placeholder={t('coupon_placeholder')}
                          />
                          <button className="text-black fw-500" type="submit">
                          {t('coupon')}
                          </button>
                        </div>
                      </form>
                    </div> */}

                    {/* <div className="col-auto">
                      <div className="shopCart-footer__item">
                        <button className="button -md -purple-3 text-purple-1">
                        {t('update_cart')}
                        </button>
                      </div>
                    </div> */}
                  </div>
                ) : (
                  <div className="row justify-center pt-60 lg:pt-40">
                    <div className="col-auto">
                      <Link
                        href="/courses-list"
                        className="button -md -outline-purple-1 text-purple-1"
                      >
                        {t('buy_courses')}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* <div className="col-xl-4 col-lg-5 layout-pt-lg">
              <div className="py-30 bg-light-4 rounded-8 border-light">
                <h5 className="px-30 text-20 fw-500">{t('cart_totals')}</h5>

                <div className="d-flex justify-between px-30 item mt-25">
                  <div className="py-15 fw-500 text-dark-1">{t('subtotal')}</div>
                  <div className="py-15 fw-500 text-dark-1">
                    {t('currancy')} {totalPrice.toFixed(2)}
                  </div>
                </div>

                <div className="d-flex justify-between px-30 item border-top-dark">
                  <div className="pt-15 fw-500 text-dark-1">{t('total')}</div>
                  <div className="pt-15 fw-500 text-dark-1">
                    {t('currancy')} {totalPrice.toFixed(2)}
                  </div>
                </div>
              </div>

              <Link
                href="/course-checkout"
                className="button -md -purple-1 text-white col-12 mt-30"
              >
                {t('checkout_btn')}
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
