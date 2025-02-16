"use client"

import React from "react";
import Image from "next/image";
import { Link } from "@/src/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import moment from 'moment';
import { blogsUploadUrl } from "@/lib/constants";

export default function BlogsTwo({posts}) {

  const t = useTranslations("Blogs");
  const locale = useLocale();

  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-20 justify-between items-center">
          <div className="col-lg-6">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">{t('title')}</h2>

              <p className="sectionTitle__text ">
              {t('bio')}
              </p>
            </div>
          </div>

          <div className="col-auto">
            <Link
              href="/blog-list"
              className="button -icon -purple-3 text-purple-1"
            >
              {t('link')}
              <i className={`icon-arrow-top-right text-13 ${ locale == 'en' ? 'ml-10' : 'mr-10' }`}></i>
            </Link>
          </div>
        </div>

        <div className="row y-gap-30 pt-60">
          {posts.slice(0, 4).map((elm) => (
            <div
              key={elm.id}
              className="col-lg-3 col-md-6"
              data-aos="fade-left"
              data-aos-duration={(elm.id + 1) * 500}
            >
              <div
                className="blogCard -type-1"
                data-aos="fade-left"
                data-aos-duration={(elm.id + 1) * 400}
              >
                <div className="blogCard__image">
                  <Image
                    width={550}
                    height={465}
                    src={blogsUploadUrl + elm.image}
                    alt="image"
                  />
                </div>
                <div className="blogCard__content mt-20">
                  <div className="blogCard__category">{locale == 'en' ? elm.category.en_name : elm.category.ar_name}</div>
                  <h4 className="blogCard__title text-17 lh-15 mt-5">
                    <Link className="linkCustom" href={`/blogs/${elm.id}`}>
                      {locale == 'en' ? elm.en_title : elm.ar_title}{" "}
                    </Link>
                  </h4>
                  <div className="blogCard__date text-14 mt-5">{ moment(elm.created_at).format('MMMM Do YYYY') }  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
