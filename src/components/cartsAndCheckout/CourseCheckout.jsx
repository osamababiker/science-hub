"use client";

import { z } from 'zod';
import React, { useState, useEffect } from "react";
import useCartStore from "@/store/cartStore";
import {Link} from '@/src/i18n/routing';
import { useForm, Controller } from "react-hook-form";
import { useTranslations, useLocale } from "next-intl";
import { useSession } from "next-auth/react";
import { sendOrder } from '@/lib/action';

export default function CourseCheckOut() {

  const t = useTranslations('CheckoutPage');
  const locale = useLocale(); 
  const { data: session, status} = useSession();

  const { cartCourses } = useCartStore();
  const [totalPrice, setTotalPrice] = useState(0);
  const [shiping, setShiping] = useState(0);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      user_id: '',
      courses_ids: '',
      country: 'UAE',
      city: '',
      payment_method: '',
      notes: ''
    }
  });

  const onSubmit = async (formData) => {
    setLoading(true);
    const { notes, city, payment_method } = formData;
    const courses_ids = cartCourses.map((course) => course.id);
    const parsedCredentials = z
    .object({ notes: z.string().nullable(), city: z.string(), payment_method: z.string()})
      .safeParse({ notes, city, payment_method });
    if (parsedCredentials.success) {
      formData.user_id = session.user.id;
      formData.courses_ids = courses_ids;
      formData.status = 0;


      const res = await sendOrder(formData);
      if(res) {
        setSuccess(t("orderSuccess"));
        setError(null);
        setLoading(false);
      }else {
        setError(t("500Error"));
        setSuccess(null);
        setLoading(false);
      } 
    } else {
      // setup validation error message
      setError(parsedCredentials.error.ZodError[0].message);
      setSuccess(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    const sum = cartCourses.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.discounted_price * currentValue.quantity;
    }, 0);
    const sumQuantity = cartCourses.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity;
    }, 0);
    setShiping(sumQuantity * 10);
    setTotalPrice(sum);
  }, [cartCourses]);

  if (status === "loading") {
    return <p>{t("loading")}...</p>; 
  }

  if (status === "unauthenticated") {
    return <>
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
                  {t("unauthenticated")}
                  </p>
                </div>

                <div className="mt-30">
                  <Link href="/login" className="button -md -accent col-12 -uppercase text-white -purple-1">
                  {t("signin")}
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  }

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
                  onSubmit={handleSubmit(onSubmit)}
                  id="checkoutForm"
                  className="contact-form row x-gap-30 y-gap-30"
                >

                  {success ? <div className="alert alert-success"> { success } </div>: ''}

                  {error ? <div className="alert alert-danger"> { error } </div>: ''}

                  <div className="col-12">
                    <h5 className="text-20">{t("form_title")}</h5>
                  </div>
                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("name_label")}
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={session.user.name}
                      disabled
                      placeholder={t("name_placeholder")}
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("country_label")}
                    </label>
                    <select className="selectize wide js-selectize">
                      <option > { t("country") }</option>
                    </select>
                  </div>

                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("city_label")}
                    </label>
                    <Controller
                      name="city"
                      control={control}
                      render={({ field }) => <input {...field}  type="text" name="city" placeholder={t("city_placeholder")} />}
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("phone_label")}
                    </label>
                    <input 
                      required  
                      disabled 
                      value={session.user.phone} 
                      type="text" 
                      name="phone" 
                      placeholder={t("phone_placeholder")} />
                  </div>

                  <div className="col-sm-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("email_label")}
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={session.user.email}
                      disabled
                      placeholder={t("email_placeholder")}
                    />
                  </div>

                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("order_note_label")}
                    </label>
                    <Controller
                      name="notes"
                      control={control}
                      render={({ field }) =>  <textarea {...field}  name="notes" id="form_notes" rows="8"  placeholder={t("order_note_placeholder")}></textarea>}
                    />
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
                         {(elm.discounted_price * elm.quantity).toFixed(2) ||
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
                        <Controller
                          name="payment_method"
                          control={control}
                          render={({ field }) => <input {...field} value="cash" checked={field.value === "cash"} onChange={(e) => field.onChange(e.target.value)} type="radio" name="payment_method"/> }
                        />
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
                        <Controller
                          name="payment_method"
                          control={control}
                          render={({ field }) => <input {...field} value="card" checked={field.value === "card"} onChange={(e) => field.onChange(e.target.value)} type="radio" name="payment_method" disabled /> }
                        />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <h5 className={`text-15 lh-1 text-dark-1 ${ locale == 'en' ? 'ml-15 ' : 'mr-15 ' }`}>{t("credit_card_title")}</h5>
                    </div>
                  </div>
                </div>

                <div className="mt-30">
                  {!loading ?
                    <button type='submit' disabled={loading} form='checkoutForm' className="button -md -accent col-12 -uppercase text-white -purple-1">
                    {t("place_order_btn")}
                    </button>
                  : 
                    <button disabled={loading} className="button -md -accent col-12 -uppercase text-white -purple-1">
                    {t("sending_order")}
                    </button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
