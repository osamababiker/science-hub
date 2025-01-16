"use client";

import React, { useState, useEffect } from "react";
import { useContextElement } from "@/context/Context";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function CourseCheckOut() {

  const t = useTranslations('CheckoutPage');
  const locale = useLocale();

  const { cartCourses } = useContextElement();
  const [totalPrice, setTotalPrice] = useState(0);
  const [shiping, setShiping] = useState(0);
  useEffect(() => {
    const sum = cartCourses.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.discountedPrice * currentValue.quantity;
    }, 0);
    const sumQuantity = cartCourses.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity;
    }, 0);
    setShiping(sumQuantity * 10);
    setTotalPrice(sum);
  }, [cartCourses]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">{t("title")}</h1>
                </div>

                <div>
                  <p className="page-header__text">
                  {t("bio")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-50">
            <div className="col-lg-8">
              <div className="shopCheckout-form">
                <form
                  onSubmit={handleSubmit}
                  className="contact-form row x-gap-30 y-gap-30"
                >
                  <div className="col-12">
                    <h5 className="text-20">{t("form_title")}</h5>
                  </div>
                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("first_name_label")}
                    </label>
                    <input
                      required
                      type="text"
                      name="firstName"
                      placeholder={t("first_name_placeholder")}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("last_name_label")}
                    </label>
                    <input
                      required
                      type="text"
                      name="lastName"
                      placeholder={t("last_name_placeholder")}
                    />
                  </div>

                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("country_label")}
                    </label>
                    <select className="selectize wide js-selectize">
                      <option value="UEA">الامارات العربية المتحدة</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Greece">Greece</option>
                    </select>
                  </div>

                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("city_label")}
                    </label>
                    <input
                      required
                      type="text"
                      name="city"
                      placeholder= {t("city_placeholder")}
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("street_label")}
                    </label>
                    <input
                      required
                      type="text"
                      name="address"
                      placeholder={t("street_placeholder")}
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("state_label")}
                    </label>
                    <input
                      required
                      type="text"
                      name="state"
                      placeholder={t("state_placeholder")}
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("zip_label")}
                    </label>
                    <input
                      required
                      type="text"
                      name="zip"
                      placeholder={t("zip_placeholder")}
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("phone_label")}
                    </label>
                    <input
                      required
                      type="text"
                      name="phone"
                      placeholder={t("phone_placeholder")}
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("email_label")}
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder={t("email_placeholder")}
                    />
                  </div>

                  <div className="col-12">
                    <h5 className="text-20 fw-500 pt-30">
                    {t("additional_info")}
                    </h5>
                  </div>
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("order_note_label")}
                    </label>
                    <textarea
                      required
                      name="notes"
                      id="form_notes"
                      rows="8"
                      placeholder={t("order_note_placeholder")}
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="">
                <div className="pt-30 pb-15 bg-white border-light rounded-8 bg-light-4">
                  <h5 className="px-30 text-20 fw-500">{t("order_title")}</h5>

                  <div className="d-flex justify-between px-30 mt-25">
                    <div className="py-15 fw-500 text-dark-1">{t("course")}</div>
                    <div className="py-15 fw-500 text-dark-1">{t("subtotal")}</div>
                  </div>

                  {cartCourses.map((elm, i) => (
                    <div
                      key={i}
                      className={`d-flex justify-between ${
                        i == 0 ? "border-top-dark" : ""
                      }  px-30`}
                    >
                      <div className="py-15 text-grey">
                      <Link
                          className="linkCustom"
                          href={`/courses/${elm.id}`}
                        >
                          {elm.title}{" "}
                        </Link> x {elm.quantity}
                      </div>
                      <div className="py-15 text-grey">
                      {t("currancy")}
                        {(elm.discountedPrice * elm.quantity).toFixed(2) ||
                          "Free"}
                      </div>
                    </div>
                  ))}

                  <div className="d-flex justify-between border-top-dark px-30">
                    <div className="py-15 fw-500">{t("subtotal")}</div>
                    <div className="py-15 fw-500"> {t("currancy")} {totalPrice.toFixed(2)}</div>
                  </div>


                  <div className="d-flex justify-between border-top-dark px-30">
                    <div className="py-15 fw-500 text-dark-1">{t("total")}</div>
                    <div className="py-15 fw-500 text-dark-1">
                    {t("currancy")} {(totalPrice + shiping).toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="py-30 px-30 bg-white mt-30 border-light rounded-8 bg-light-4">
                  <h5 className="text-20 fw-500">{t("payment_title")}</h5>

                  <div className="mt-30">
                    <div className="form-radio d-flex items-center">
                      <div className="radio">
                        <input type="radio" name="radio" checked="checked" />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <h5 className={`text-15 lh-1 fw-500 text-dark-1 ${ locale == 'en' ? 'ml-15' : 'mr-15' }`}>
                      {t("bank_transfer_title")}
                      </h5>
                    </div>
                    <p className="ml-25 pl-5 mt-25">
                    {t("bank_transfer_bio")}
                    </p>
                  </div>


                  <div className="mt-30">
                    <div className="form-radio d-flex items-center">
                      <div className="radio">
                        <input type="radio" name="radio" checked="checked" />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <h5 className={`text-15 lh-1 text-dark-1 ${ locale == 'en' ? 'ml-15 ' : 'mr-15 ' }`}>{t("credit_card_title")}</h5>
                    </div>
                  </div>
                </div>

                <div className="mt-30">
                  <button className="button -md -accent col-12 -uppercase text-white -purple-1">
                  {t("place_order_btn")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
