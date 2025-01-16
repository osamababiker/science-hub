"use client";

import React from "react";
import Image from "next/image";
import {Link} from '@/src/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import { teachersUploadUrl } from "@/lib/constants";

export default function Teachers({teachers}) {


  const t = useTranslations("Teachers");
  const locale = useLocale();

  const featuredTeacher = teachers.find((elm) => elm.isFeatured == 1);

  const teachingFeatures = [
    {
      id: 1,
      title: t('teachers_features_title_one'),
    },
    {
      id: 2,
      title: t('teachers_features_title_two'),
    },
    {
      id: 3,
      title: t('teachers_features_three'),
    },
  ];

  return (
    <>
      <section className="section-bg layout-pt-lg layout-pb-sm bg-light-4">
        <div className="section-bg__item -full">
          <div
            className="bg-image js-lazy"
            style={{ backgroundImage: "url(/assets/img/home-6/svg/bg.png)" }}
          ></div>
        </div>

        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <div className="col-xl-6 col-lg-7">
              <div className="composition -type-2">
                <div className="-el-1">
                  <div className="bg-white rounded-8 px-40 py-40">
                    <div className="text-18 text-dark-1 lh-11 fw-500">
                      <span className="text-purple-1"> + {teachers.length}</span> {t('title')}
                    </div>

                    <div className="y-gap-20 pt-25">
                      {teachers.map((elm) => (
                        <div key={elm.id} className="d-flex items-center">
                          <Image
                            width={55}
                            height={55}
                            src={teachersUploadUrl + elm.image}
                            alt="image"
                          />
                          <div className={locale == 'en' ? 'ml-20' : 'mr-20'}>
                            <div className="text-15 text-dark-1 lh-11 fw-500">
                              { locale == 'en' ? elm.en_name : elm.ar_name }
                            </div>
                            <div className="text-13 lh-1 mt-5">
                              { locale == 'en' ? elm.role_en : elm.role_ar }
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {featuredTeacher ? 
                <div className="-el-2">
                  <div className="bg-white rounded-8">
                    <Image
                      width={300}
                      height={300}
                      className="w-1/1"
                      src={teachersUploadUrl + featuredTeacher.image}
                      alt="image"
                    />
                    <div className="px-20 py-20">
                      <div className="text-17 fw-500 text-dark-1">
                        <Link
                          className="linkCustom"
                          href="#"
                        >
                          { locale == 'en' ? featuredTeacher.en_name : featuredTeacher.ar_name }
                        </Link>
                      </div>
                      <div className="text-15 lh-1 mt-5">
                        {t('sample_job_title')}
                      </div>
                      <div className="d-flex x-gap-15 pt-15">
                        <div className="d-flex items-center">
                          <div className={`icon-star text-11 text-yellow-1 ${ locale == 'en' ? 'mr-10' : 'ml-10' }`}></div>
                          <div className="text-13 lh-12 text-yellow-1">
                            {featuredTeacher.rating}
                          </div>
                        </div>

                        <div className="d-flex items-center">
                          <Image
                            width={16}
                            height={16}
                            className={`shrink-0 ${ locale == 'en' ? 'mr-10' : 'ml-10' }`}
                            src="/assets/img/team/icons/1.svg"
                            alt="icon"
                          />
                          <div className="text-13 lh-12">
                            {featuredTeacher.students} {t('sample_students_count')}
                          </div>
                        </div>

                        <div className="d-flex items-center">
                          <Image
                            width={12}
                            height={12}
                            className={`shrink-0 ${ locale == 'en' ? 'mr-10' : 'ml-10' }`}
                            src="/assets/img/team/icons/2.svg"
                            alt="icon"
                          />
                          <div className="text-13 lh-12">
                            {featuredTeacher.courses.length} {t('sample_courses_count')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                : ''}
              </div>
            </div>

            <div className="col-lg-5 col-md-10">
              <h2 className="text-30 lh-15">
              {t('teachers_features_title_one')}
                <br className="lg:d-none" /> {t('teachers_features_title_two')}
              </h2>
              <p className="mt-10">
              {t('teachers_features_bio')}
              </p>

              <div className="y-gap-20 pt-25">
                {teachingFeatures.map((elm, i) => (
                  <div key={i} className="d-flex items-center">
                    <div className={`d-flex items-center justify-center size-25 rounded-full bg-purple-1 ${ locale == 'en' ? 'mr-15' : 'ml-15' }`}>
                      <i
                        className="fa fa-check text-white"
                        style={{
                          strokeWidth: 2,
                          fontSize: "10px",
                          fontWeight: "300",
                        }}
                        data-feather="check"
                      ></i>
                    </div>
                    <div className="fw-500 text-dark-1">{elm.title}</div>
                  </div>
                ))}
              </div>

              <div className="d-inline-block mt-35">
                <Link href="/instructors/1" className="button -md -dark-2 text-white">
                  {t('call_action')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="svg-shape">
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
            fill="#F7F8FB"
          />
        </svg>
      </div>
    </>
  );
}
