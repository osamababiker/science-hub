"use client";

import React from "react";
import Image from "next/image";
import {Link} from '@/src/i18n/routing';
import moment from 'moment';
import { useTranslations, useLocale } from "next-intl";
import { blogsUploadUrl } from "@/lib/constants";

export default async function RelatedBlogs({posts}) {  

  const t = useTranslations("BlogListPage");
  const locale = useLocale();
  

  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-4">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">{t("related_blogs")}</h2>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 pt-60">
          {posts.slice(0, 4).map((elm) => (
            <div key={elm.id} className="col-lg-3 col-md-6">
              <div className="blogCard -type-1">
                <div className="blogCard__image">
                  <Image
                    width={510}
                    height={425}
                    src={blogsUploadUrl + elm.image}
                    alt={elm.en_title}
                  />
                </div>
                <div className="blogCard__content mt-20">
                  <div className="blogCard__category">
                    { locale == "en" ? elm.category.en_name.toUpperCase() : elm.category.ar_name }
                  </div>
                  <h4 className="blogCard__title text-17 lh-15 mt-5">
                    <Link className="linkCustom" href={`/blogs/${elm.id}`}>
                      { locale == "en" ? elm.en_title : elm.ar_title }
                    </Link>
                  </h4>
                  <div className="blogCard__date text-14 mt-5">{ moment(elm.created_at).format('MMMM Do YYYY') }</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
