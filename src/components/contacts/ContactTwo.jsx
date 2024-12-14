"use client";

import React from "react";
import { arLocationData } from "@/data/officeLocation";
import { useTranslations } from "next-intl";
export default function ContactTwo() {

  const t = useTranslations("ContactPage");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="page-header -type-4 bg-beige-1">
        <div className="container"> 
          <div className="page-header__content">
            <div className="row">
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
          <div className="row y-gap-50 justify-between">
            <div className="col-xl-5 col-lg-6">
              <h3 className="text-24 lh-1 fw-500">{t("address_title")}</h3>
              <div className="row y-gap-30 pt-40">
                {arLocationData.map((elm, i) => (
                  <div key={i} className="col-sm-6">
                    <div className="text-20 fw-500 text-dark-1">
                      {elm.location}
                    </div>
                    <div className="y-gap-10 pt-15">
                      <a href="#" className="d-block">
                        {elm.address}
                      </a>
                      <a href="#" className="d-block">
                        {elm.phoneNumber}
                      </a>
                      <a href="#" className="d-block">
                        {elm.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="px-40 py-40 bg-white border-light shadow-1 rounded-8 contact-form-to-top">
                <h3 className="text-24 fw-500">{t("form_title")}</h3>
                <p className="mt-25">
                {t("form_bio")}
                </p>

                <form
                  className="contact-form row y-gap-30 pt-60 lg:pt-40"
                  onSubmit={handleSubmit}
                >
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("name_label")}
                    </label>
                    <input
                      required
                      type="text"
                      name="title"
                      placeholder={t("name_placeholder")}
                    />
                  </div>
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("email_label")}
                    </label>
                    <input
                      required
                      type="text"
                      name="title"
                      placeholder={t("email_placeholder")}
                    />
                  </div>
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("message_label")}
                    </label>
                    <textarea
                      name="comment"
                      placeholder={t("message_placeholder")}
                      rows="8"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      name="submit"
                      id="submit"
                      className="button -md -purple-1 text-white"
                    >
                      {t("send_btn")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
