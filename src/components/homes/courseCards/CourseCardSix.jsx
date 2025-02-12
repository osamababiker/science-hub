"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {Link} from '@/src/i18n/routing';
import { useLocale, useTranslations } from "next-intl";
import { coursesUploadUrl, teachersUploadUrl } from "@/lib/constants";

export default function CourseCardSix({ data }) {

  const [rating, setRating] = useState([]); 
  const t = useTranslations('Courses');
  const locale = useLocale();

  useEffect(() => {
    for (let i = Math.round(data.rating); i >= 1; i--) {
      setRating((pre) => [...pre, "star"]);
    }
  }, []);
  return (
    <div className="col-lg-6">
      <div className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10">
        <div className="coursesCard__image max-w-250 rounded-8">
          <Image
            width={250}
            height={175}
            style={{ height: "150px" }}
            className="w-1/1 rounded-8"
            src={coursesUploadUrl + data.image}
            alt="image"
          />
        </div>

        <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
          <div className="coursesCard__stars">
            <div className="d-flex items-center">
              <div className={`text-14 lh-1 text-yellow-1 ${ locale == 'en' ? 'mr-10' : 'ml-10' }`}>
                {data.rating}
              </div>
              <div className="d-flex x-gap-5 items-center">
              {Array.from({ length: data.rating }).map((_, i) => (
                <div key={i} className="icon-star text-9 text-yellow-1"></div>
              ))}
            </div>
            </div>
          </div>
          <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
            <Link className="linkCustom" href={`/courses/${ data.id }`}>
              { locale == 'en' ? data.en_name : data.ar_name }
            </Link>
          </div>

          <div className="d-flex x-gap-15 items-center py-10">
            <div className="d-flex items-center">
              <div className={ locale == 'en' ? 'mr-10' : 'ml-10' }>
                <Image
                  width={16}
                  height={17}
                  src="assets/img/coursesCards/icons/1.svg"
                  alt="icon"
                />
              </div>
              <div className="text-14 lh-1">{data.lesson_count} { t('leason') } </div>
            </div>

            <div className="d-flex items-center">
              <div className={ locale == 'en' ? 'mr-10' : 'ml-10' }>
                <Image
                  width={16}
                  height={17}
                  src="assets/img/coursesCards/icons/2.svg"
                  alt="icon"
                />
              </div>
              <div className="text-14 lh-1 text-light-1">{`${Math.floor(
                data.duration / 60
              )}h ${Math.floor(data.duration % 60)}m`}</div>
            </div>

            <div className="d-flex items-center">
              <div className={ locale == 'en' ? 'mr-10' : 'ml-10' }>
                <Image
                  width={16}
                  height={17}
                  src="assets/img/coursesCards/icons/3.svg"
                  alt="icon"
                />
              </div>
              <div className="text-14 lh-1 text-light-1">{ locale == 'en' ? data.level_en : data.level_ar }</div>
            </div>
          </div>

          <div className="d-flex justify-between items-center pt-10 border-top-light">
            <div className="d-flex items-center">
              <Image
                width={30}
                height={30}
                src={teachersUploadUrl + data.teacher.image}
                alt="image"
              />
              <div className={`text-light-1 ${ locale == 'en' ? 'ml-10' : 'mr-10' }`}>
                { locale == 'en' ? data.teacher.en_name : data.teacher.ar_name }
              </div>
            </div>

            <div className="d-flex items-center">
              {data.original_price || data.discounted_price ? (
                <>
                  <div className="fw-500 ml-10 line-through text-light-1">
                    { t("currancy") } {data.original_price}
                  </div>
                  <div className="text-18 fw-500 text-dark-1">
                    {t("currancy")} {data.discounted_price}
                  </div>
                </>
              ) : (
                <>
                  <div></div>
                  <div className="text-18 fw-500 text-dark-1"> { t("free") } </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
