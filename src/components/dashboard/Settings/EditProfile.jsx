"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { z } from 'zod';
import { profileUpdate } from "@/lib/auth";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from '@/src/i18n/routing';
import { useSession } from "next-auth/react";
import { usersUploadUrl } from "@/lib/constants";

export default function EditProfile({ activeTab }) {
  
  const t = useTranslations('Dashboard');
  const router = useRouter();
  const [previewImage, setPreviewImage] = useState(
    "/assets/img/dashboard/edit/image-placeholder.png",
  );
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const { data: session, update, status} = useSession();
  const { control: editControl, handleSubmit: handleEditSubmit, reset, formState: { isDirty, isValid, isSubmitting, errors, touchedFields, dirtyFields }, } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      bio: ''
    }
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setProfilePic(file);
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  
  const onSubmit = async (formData) => {
    const { name, bio } = formData;
    const parsedCredentials = z
        .object({ name: z.string(), bio: z.string() })
        .safeParse({ name, bio });
    if (parsedCredentials.success) {
      if(profilePic){
        parsedCredentials.data.image = profilePic;
      }
      parsedCredentials.data.userId = session.user.id;
      const res = await profileUpdate(parsedCredentials);
      if(res.user) {
        setSuccess(t("200Message"));
        setError(null);
        await update({
          ...session,
          user: {
            ...session.user,
            name: res.user.name,
            image: res.user.image,
            bio: res.user.bio
          },
        });
        reset();
      } else if(res.status == 400) {
        setError(t("400Error"));
        setSuccess(null);
      } else if(res.status == 500) {
        setError(t("500Error"));
        setSuccess(null);
      }
    } else {
      // setup validation error message
      setError(parsedCredentials.error.ZodError[0].message);
      console.log(parsedCredentials.error)
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
      className={`tabs__pane -tab-item-1 ${activeTab == 1 ? "is-active" : ""} `}
    >
      <div className="row y-gap-20 x-gap-20 items-center">
        <label
          className="col-auto"
          htmlFor="imageUpload"
          style={
            previewImage
              ? {}
              : { backgroundColor: "#f2f3f4", width: 100, height: 100 }
          }
        >
          {previewImage && (
            session.user.image ? (
              <Image
                width={100}
                height={100}
                className="size-100"
                src={usersUploadUrl + session.user.image}
                alt="User Image"
              />
            ) : (
              <>
              {session.user.bio}
              <Image
                width={100}
                height={100}
                className="size-100"
                src={previewImage}
                alt="Preview Image"
              />
              </>
              
            )
          )}
        </label>

        <div className="col-auto">
          <div className="text-16 fw-500 text-dark-1"> {t("profile_pic")} </div>
          <div className="text-14 lh-1 mt-10">
            {t("profile_pic_bio")}
          </div>

          <div className="d-flex x-gap-10 y-gap-10 flex-wrap pt-15">
            <div>
              <div className="d-flex justify-center items-center size-40 rounded-8 bg-light-3">
                <label
                  style={{ cursor: "pointer" }}
                  htmlFor="imageUpload1"
                  className="icon-cloud text-16"
                ></label>
                <input
                  required
                  id="imageUpload1"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  document.getElementById("imageUpload1").value = "";
                  setPreviewImage("");
                }}
                className="d-flex justify-center items-center size-40 rounded-8 bg-light-3"
              >
                <div className="icon-bin text-16"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-top-light pt-30 mt-30">
        <form onSubmit={handleEditSubmit(onSubmit)} className="contact-form row y-gap-30">

          {success ? <div className="alert alert-success"> { success } </div>: ''}
          {error ? <div className="alert alert-danger"> { error } </div>: ''}

          <div className="col-md-12">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              {t("edit_profile_name_label")}
            </label>
            <Controller 
              name="name"
              control={editControl}
              render={({ field }) => <input {...field} required type="text" name="name" placeholder={t("edit_profile_name_label")} />}
            />
          </div>

          <div className="col-12">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              {t("edit_profile_bio_label")}
            </label>
            <Controller 
              name="bio"
              control={editControl}
              render={({ field }) => <textarea {...field} name="bio" required placeholder={t("edit_profile_bio_label")} rows="5"></textarea>}
            />
          </div>

          <div className="col-12">
            <button 
              disabled={!isValid || isSubmitting}
              type="submit" 
              className="button -md -purple-1 text-white">
              {t("edit_profile_btn")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
