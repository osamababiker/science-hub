"use client";
import { z } from 'zod';
import { passwordUpdate } from "@/lib/auth";
import { useForm, Controller } from "react-hook-form";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

export default function Password({ activeTab }) {

  const t = useTranslations('Dashboard');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { data: session, update, status} = useSession();

  const { control: passwordControl, handleSubmit: handlePasswordSubmit, reset } = useForm({
    defaultValues: {
      password: '',
      new_password: '',
      new_password_confirm: ''
    }
  });

  const onPasswordSubmit = async (formData) => {
    const { password, new_password, new_password_confirm } = formData;
    const parsedCredentials = z
        .object({ password: z.string().min(6), new_password: z.string().min(6), new_password_confirm: z.string().min(6) })
        .safeParse({ password, new_password, new_password_confirm });
    if (parsedCredentials.success) {
      parsedCredentials.data.userId = session.user.id;
      const res = await passwordUpdate(parsedCredentials);
      if(res.user) {
        setSuccess(t("200Message"));
        reset();
        setError(null);
      } else if(res.status == 400 || res.status == 401) {
        setError(t("400Error"));
        setSuccess(null);
      } else if(res.status == 500) {
        setError(t("500Error"));
        setSuccess(null);
      }
    } else {
      setError(parsedCredentials.error.ZodError[0].message);
    }
  };

  if (status === "loading") {
    return <p>{t("loading")}...</p>; 
  }

  if (status === "unauthenticated") {
    return <p>{t("un_authrized")}</p>;
  }

  return (
    <div
      className={`tabs__pane -tab-item-2 ${activeTab == 2 ? "is-active" : ""} `}
    >
      <form onSubmit={handlePasswordSubmit(onPasswordSubmit)} className="contact-form row y-gap-30">

        {success ? <div className="alert alert-success"> { success } </div>: ''}
        {error ? <div className="alert alert-danger"> { error } </div>: ''}

        <div className="col-md-7">
          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
            {t("current_password_label")}
          </label>
          <Controller 
              name="password"
              control={passwordControl}
              render={({ field }) => <input {...field} required type="password" name="password" placeholder={t("current_password_label")}/>}
            />
        </div>

        <div className="col-md-7">
          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
            {t("new_password_label")}
          </label>
          <Controller 
              name="new_password"
              control={passwordControl}
              render={({ field }) => <input {...field} required type="password" name="new_password" placeholder={t("new_password_label")}/>}
            />
        </div>

        <div className="col-md-7">
          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
            {t("new_password_confirm_label")}
          </label>
          <Controller 
              name="new_password_confirm"
              control={passwordControl}
              render={({ field }) => <input {...field} required type="password" name="new_password_confirm" placeholder={t("new_password_confirm_label")}/>}
            />
        </div>

        <div className="col-12">
          <button type="submit" className="button -md -purple-1 text-white">
            {t("change_password_btn")}
          </button>
        </div>
      </form>
    </div>
  );
}
