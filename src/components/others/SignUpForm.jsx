"use client"

import { z } from 'zod';
import { useLocale, useTranslations } from "next-intl";
import { Link  } from '@/src/i18n/routing';
import { signUp } from "@/lib/auth";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from '@/src/i18n/routing';
import { useState } from 'react'; 
import { useSession } from "next-auth/react";

export default function SignUpForm() {

  const t = useTranslations("signipPage");
  const { data: session, status} = useSession();
  const locale = useLocale(); 
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  });

  const onSubmit = async (formData) => {
    setLoading(true);
    const { name, email, phone, password, password_confirmation } = formData;
    const parsedCredentials = z
        .object({ name: z.string(), phone: z.string(), email: z.string().email(), password: z.string().min(6), password_confirmation: z.string().min(6) })
        .safeParse({ name, email, phone, password, password_confirmation });
    if (parsedCredentials.success) {
      const res = await signUp(parsedCredentials);
      if(res.status == 201) {
        setLoading(false);
        router.push('/login');
      } else if(res.status == 400) {
        // email or phone are not unique
        setLoading(false);
        setError(t("400Error"));
      } else if(res.status == 500) {
        setLoading(false);
        setError(t("500Error"));
      }
    } else {
      // setup validation error message
      setLoading(false);
      setError(parsedCredentials.error.ZodError[0].message);
    }
  };

  if (status === "loading") {
    return <p>...</p>; 
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
                {t("have_account")}
                <Link href="/login" className={`text-purple-1 ${ locale == 'en' ? 'ml-8' : 'mr-8' }`}>
                 {t("login_link")} 
                </Link>
                
                <Link href="/" className={`text-purple-1 ${ locale == 'en' ? 'ml-8' : 'mr-8' }`}>
                 {t("home_link")} 
                </Link>
              </p>

              <form
                className="contact-form respondForm__form row y-gap-20 pt-30"
                onSubmit={handleSubmit(onSubmit)}
              >
                {error ? <div className="alert alert-danger"> { error } </div>: ''}
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("email_label")}
                  </label>
                  <Controller 
                    name="email"
                    control={control}
                    render={({ field }) => <input {...field} required type="email" name="email" placeholder={t("email_placeholder")} />}
                  />
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("username_label")}
                  </label>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <input {...field}  required type="text" name="name" placeholder={t("username_placeholder")} />}
                  />
                </div>
                <div className="col-lg-12">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    {t("phone_label")}
                  </label>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => <input {...field}  required type="text" name="phone" placeholder={t("phone_placeholder")} />}
                  />
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  {t("password_label")}
                  </label>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => <input {...field}  required type="password" name="password" placeholder={t("password_placeholder")}/>}
                  />
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  {t("confirm_password_label")}
                  </label>
                  <Controller
                    name="password_confirmation"
                    control={control}
                    render={({ field }) =>  <input {...field}  required type="password" name="password_confirmation" placeholder={t("confirm_password_placeholder")} />}
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
                      {t("register_btn")}
                    </button> 
                    : 
                    <button className="button -md -purple-1  text-white fw-500 w-1/1">
                      {t("register_loading")}
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
