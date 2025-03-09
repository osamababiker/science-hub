"use client";

import { useLocale, useTranslations } from "next-intl";
import {Link} from '@/src/i18n/routing';
import { signIn } from 'next-auth/react';
import { z } from 'zod';
import React from "react";
import { useState } from "react";
import {useRouter} from '@/src/i18n/routing'; 
import { useSession } from "next-auth/react";

export default function LoginForm() {

  const t = useTranslations("LoginPage");
  const { data: session, status} = useSession();
  const locale = useLocale();
  const router = useRouter();
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setLoading(true);
    const email = formData.get("email");
    const password = formData.get("password");
    const parsedCredentials = z
        .object({ email: z.string().email(), password: z.string().min(6) })
        .safeParse({ email, password });

    if (parsedCredentials.success) {
      const res =  await signIn("credentials", {email: email, password: password, redirect: false});
      if(res.status == 401) {
        setLoading(false);
        setError(t("auth_error"));
      } else { 
        setLoading(false);
        router.push('/dashboard');
      }
    }else {
      setLoading(false);
      setError(t("validation_error"));
    }
  };

  if (status === "loading") { 
    return <>
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
    </div>
    </>
  }

  if (status === "authenticated") {
    router.push('/dashboard');
  }
  
  return (
    <div className="form-page__content lg:py-50">
      <div className="container">
        <div className="row justify-center items-center">
          <div className="col-xl-8 col-lg-9">
            <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
              <h3 className="text-30 lh-13">{t("title")}</h3>
              <p className="mt-10">
                {t("dont_have_account")}
                <Link href="/signup" className={`text-purple-1 ${ locale == 'en' ? 'ml-8' : 'mr-8' }`}>
                {t("register_link")}
                </Link>
                <Link href="/" className={`text-purple-1 ${ locale == 'en' ? 'ml-8' : 'mr-8' }`}>
                 {t("home_link")} 
                </Link>
              </p>

              <form
                className="contact-form respondForm__form row y-gap-20 pt-30"
                action={handleSubmit}
              >
                {error ? <div className="alert alert-danger"> { error } </div>: ''}
                <div className="col-12">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  {t("email_label")}
                  </label>
                  <input required type="email" name="email" placeholder= {t("email_placeholder")} />
                </div>
                <div className="col-12">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  {t("password_label")}
                  </label>
                  <input
                    required
                    type="password"
                    name="password"
                    placeholder= {t("password_placeholder")}
                  />
                </div>
                
                <div className="col-12">
                  { !loading ?
                  <button
                    type="submit"
                    name="submit"
                    id="submit"
                    className="button -md -purple-1  text-white fw-500 w-1/1"
                  >
                     {t("login_btn")}
                  </button>
                  : 
                    <button className="button -md -purple-1 text-white fw-500 w-1/1" >
                      {t("auth_loading")}
                    </button> 
                  }
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
