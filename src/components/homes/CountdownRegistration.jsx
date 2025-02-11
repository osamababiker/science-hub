"use client";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";
import React, { useRef, useEffect, useState } from "react";
import { signIn } from 'next-auth/react';
import { z } from 'zod';
import {useRouter} from '@/src/i18n/routing'; 
import { useSession } from "next-auth/react";

export default function CountdownRegistration() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  
  const t = useTranslations("Registeration");

  let interval = useRef();
  const setTimer = () => {
    const countdownDate = new Date("JAN 30, 2025 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    setTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  const { data: session, status} = useSession();
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
    return <p>...</p>; 
  }


  return (
    <>
      <section className="layout-pt-lg bg-purple-1">
        <div className="container">
          <div className="row y-gap-30 items-center">
            <div className="offset-xl-2 col-xl-8 offset-lg-1 col-lg-5 col-md-9">
              <div className="bg-white rounded-16 px-30 py-30">
                <h3 className="text-20 lh-15 text-center">
                  {t('title_one')}
                  <Link href="/signup">
                    <span className="text-purple-1"> {t('title_two')} </span>
                  </Link>
                </h3>
                <form
                   action={handleSubmit}
                  className="contact-form row y-gap-30 pt-30"
                >
                   {error ? <div className="alert alert-danger"> { error } </div>: ''}
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t('email_label')}
                    </label>
                    <input
                      required
                      type="text"
                      name="email"
                      placeholder={t('email_placeholder')}
                    />
                  </div>
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t('password_label')}
                    </label>
                    <input
                      required
                      type="password"
                      name="password"
                      placeholder={t('password_placeholder')}
                    />
                  </div>
                  <div className="col-12">
                    { !loading ?
                    <button type="submit" className="button -md -purple-1 w-1/1 text-white">
                      {t('btn')}
                    </button>
                    : 
                    <button disabled className="button -md -purple-1 w-1/1 text-white">
                      {t('loading')}
                    </button>
                    }
                    <div className="text-13 lh-17 mt-15">
                    {t('tearms_conditions')}
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* <div className="offset-xl-2 col-xl-4 offset-lg-1 col-lg-5 col-md-9">
              <h2 className="text-30 lh-13 text-white">
                {t('count_down_title')}
              </h2>
              <p className="text-lg text-white mt-10">
              {t('count_down_bio')}
              </p>

              <div className="js-countdown">
                <div className="row x-gap-50 y-gap-30 pt-60 lg:pt-30">
                  <div className="col-md-auto col-6">
                    <div className="text-center text-white">
                      <div className="text-45 lh-12 fw-700 js-countdown-days">
                        {timerDays}
                      </div>
                      <div className="mt-5">{t('days')}</div>
                    </div>
                  </div>

                  <div className="col-md-auto col-6">
                    <div className="text-center text-white">
                      <div className="text-45 lh-12 fw-700 js-countdown-hours">
                        {timerHours}
                      </div>
                      <div className="mt-5">{t('hours')}</div>
                    </div>
                  </div>

                  <div className="col-md-auto col-6">
                    <div className="text-center text-white">
                      <div className="text-45 lh-12 fw-700 js-countdown-minutes">
                        {timerMinutes}
                      </div>
                      <div className="mt-5">{t('minutes')}</div>
                    </div>
                  </div>

                  <div className="col-md-auto col-6">
                    <div className="text-center text-white">
                      <div className="text-45 lh-12 fw-700 js-countdown-seconds">
                        {timerSeconds}
                      </div>
                      <div className="mt-5">{t('seconds')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <div className="svg-shape bg-light-4">
        <svg
          width="1925"
          height="261"
          viewBox="0 0 1925 261"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1924.67 0L1922.7 7.03707C1911.58 46.7293 1877.25 75.5353 1836.23 79.5878L0 261V0H1924.67Z"
            fill="#6440FB"
          />
        </svg>
      </div>
    </>
  );
}
