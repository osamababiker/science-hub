"use client";
import React from "react";
import Image from "next/image";
import {Link} from '@/src/i18n/routing';
import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { coursesUploadUrl, teachersUploadUrl } from "@/lib/constants";
export default function CourceCardFive({ data }) {

  const [rating, setRating] = useState([]);
  const t = useTranslations("CoursesPage");
  const locale = useLocale();

  useEffect(() => {
    for (let i = Math.round(data.rating); i >= 1; i--) {
      setRating((pre) => [...pre, "star"]);
    }
  }, []);
  return (
    <div className="swiper-slide" style={{ height: "fit-content" }}>
      <div>
        <div
          className="coursesCard -type-1 "
          style={{ border: "none", padding: 0 }}
        >
          <div className="relative">
            <div className="coursesCard__image overflow-hidden rounded-8">
              {/* <Image
                width={500}
                height={500}
                style={{ height: "150px" }}
                className="w-1/1 rounded-8"
                src={coursesUploadUrl + data.image}
                alt="image"
              /> */}
               <Image
                width={500}
                height={500}
                style={{ height: "150px" }}
                className="rounded-8"
                src={coursesUploadUrl + data.image}
                alt="image"
              />
              <div className="coursesCard__image_overlay rounded-8"></div>
            </div>
            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
          </div>

          <div className="h-100 pt-15">
            <div className="d-flex items-center">
              <div className="text-14 lh-1 text-yellow-1 ml-10">
                {data.rating}
              </div>
              <div className="d-flex x-gap-5 items-center">
                <div className="d-flex x-gap-5 items-center">
                  {Array.from({ length: data.rating }).map((_, i) => (
                    <div key={i} className="icon-star text-9 text-yellow-1"></div>
                  ))}
                </div>
              </div>
              <div className="text-13 lh-1 mr-10">({data.rating})</div>
            </div>

            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
              <Link className="linkCustom" href={`/courses/${data.id}`}>
                {locale == 'en' ? data.en_name : data.ar_name}
              </Link>
            </div>

            <div className="d-flex x-gap-10 items-center pt-10">
              <div className="d-flex items-center">
                <div className="mr-8">
                  <Image
                    width={16}
                    height={17}
                    src="/assets/img/coursesCards/icons/1.svg"
                    alt="icon"
                  />
                </div>
                <div className="text-14 lh-1">{data.lesson_count} {t('lesson')}</div>
              </div>

              <div className="d-flex items-center">
                <div className={locale == 'en' ? 'mr-8' : 'ml-8'}>
                  <Image
                    width={16}
                    height={17}
                    src="/assets/img/coursesCards/icons/2.svg"
                    alt="icon"
                  />
                </div>
                <div className="text-14 lh-1">{`${Math.floor(
                  data.duration / 60,
                )}h ${Math.floor(data.duration % 60)}m`}</div>
              </div>

              <div className="d-flex items-center">
                <div className={locale == 'en' ? 'mr-8' : 'ml-8'}>
                  <Image
                    width={16}
                    height={17}
                    src="/assets/img/coursesCards/icons/3.svg"
                    alt="icon"
                  />
                </div>
                <div className="text-14 lh-1">{locale == 'en' ? data.en_level : data.ar_level}</div>
              </div>
            </div>

            <div className="coursesCard-footer">
              <div className="coursesCard-footer__author">
                <div className={locale == 'en' ? 'mr-8' : 'ml-8'}>
                  <Image
                    width={30}
                    height={30}
                    src={teachersUploadUrl + data.teacher.image}
                    alt="image"
                  />
                </div>
                <div>{locale == 'en' ? data.teacher.en_name : data.teacher.ar_name}</div>
              </div>

              <div className="coursesCard-footer__price">
                {data.original_price || data.discounted_price ? (
                  <>
                    <div>
                      { t("currancy") } {data.original_price}
                    </div>
                    <div>
                      {t("currancy")} {data.discounted_price}
                    </div>
                  </>
                ) : (
                  <>
                    <div></div>
                    <div> { t("free") } </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
