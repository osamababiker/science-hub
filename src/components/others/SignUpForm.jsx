"use client";

import { useLocale, useTranslations } from "next-intl";
import {Link} from '@/src/i18n/routing';
import React from "react";

export default function SignUpForm() {

  const t = useTranslations("signipPage");
  const locale = useLocale();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form-page__content lg:py-50">
      <div className="container">
        <div className="row justify-center items-center">
          <div className="col-xl-8 col-lg-9">
            <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
              <h3 className="text-30 lh-13">{t("title")}</h3>
              <p className="mt-10">
                {t("have_account")}
                <Link href="/login" className={`text-purple-1 ${ locale == 'en' ? 'ml-8' : 'mr-8' }`}>
                 {t("login_link")}
                </Link>
              </p>

              <form
                className="contact-form respondForm__form row y-gap-20 pt-30"
                onSubmit={handleSubmit}
              >
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("email_label")}
                  </label>
                  <input required type="text" name="title" placeholder={t("email_placeholder")} />
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("username_label")}
                  </label>
                  <input required type="text" name="title" placeholder={t("username_placeholder")} />
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  {t("password_label")}
                  </label>
                  <input required type="text" name="title" placeholder={t("password_placeholder")}/>
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  {t("confirm_password_label")}
                  </label>
                  <input required type="text" name="title" placeholder={t("confirm_password_placeholder")} />
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    name="submit"
                    id="submit"
                    className="button -md -green-1 text-dark-1 fw-500 w-1/1"
                  >
                    {t("register_btn")}
                  </button>
                </div>
              </form>

              {/* <div className="lh-12 text-dark-1 fw-500 text-center mt-20">
                Or sign in using
              </div>

              <div className="d-flex x-gap-20 items-center justify-between pt-20">
                <div>
                  <button className="button -sm px-24 py-20 -outline-blue-3 text-blue-3 text-14">
                    Log In via Facebook
                  </button>
                </div>
                <div>
                  <button className="button -sm px-24 py-20 -outline-red-3 text-red-3 text-14">
                    Log In via Google+
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
