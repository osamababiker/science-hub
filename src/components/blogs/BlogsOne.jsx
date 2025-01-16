"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {Link} from '@/src/i18n/routing';
import { useTranslations, useLocale } from "next-intl";
import moment from 'moment';
import { blogsUploadUrl } from "@/lib/constants";

export default function BlogsOne({ categories, posts }) {

  const t = useTranslations("BlogListPage");
  const locale = useLocale();

  const [pageItems, setPageItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(categories[0].id);
  useEffect(() => {
    if (currentCategory == categories[0].id) {
      setPageItems(posts);
    } else {
      let filtered = posts.filter((elm) => elm.category.id == currentCategory);
      setPageItems(filtered);
    }
  }, [currentCategory]);
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

      <section className="layout-pt-sm layout-pb-lg">
        <div className="container">
          <div className="tabs -pills js-tabs">
            <div className="tabs__controls d-flex justify-center flex-wrap y-gap-20 x-gap-10 js-tabs-controls">
              {categories.map((elm) => (
                <div key={elm.id} onClick={() => setCurrentCategory(elm.id)}>
                  <button
                    className={`tabs__button px-15 py-8 rounded-8 js-tabs-button ${
                      currentCategory == elm.id ? "is-active" : ""
                    } `}
                    data-tab-target=".-tab-item-1"
                    type="button"
                  >
                    {locale == 'en' ? elm.en_name : elm.ar_name}
                  </button>
                </div>
              ))}
            </div>

            <div className="tabs__content pt-40 js-tabs-content">
              <div className="tabs__pane -tab-item-1 is-active">
                <div className="row y-gap-30">
                  {pageItems.map((elm) => (
                    <div key={elm.id} className="col-lg-4 col-md-6">
                      <div className="blogCard -type-1">
                        <div className="blogCard__image">
                          <Image
                            width={530}
                            height={450}
                            className="w-1/1 rounded-8"
                            src={blogsUploadUrl + elm.image}
                            alt="image"
                          />
                        </div>
                        <div className="blogCard__content mt-20">
                          <div className="blogCard__category">
                            {locale == 'en' ? elm.category.en_name.toUpperCase() : elm.category.ar_name}
                          </div>
                          <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                            <Link
                              className="linkCustom"
                              href={`/blogs/${elm.id}`}
                            >
                              {locale == 'en' ? elm.en_name : elm.ar_name}
                            </Link>
                          </h4>
                          <div className="blogCard__date text-14 mt-5">
                            { moment(elm.created_at).format('MMMM Do YYYY') }
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* <div className="row justify-center pt-60 lg:pt-40">
                  <div className="col-auto">
                    <div className="pagination -buttons">
                      <button className="pagination__button -prev">
                        <i className={`icon ${ locale == 'en' ? 'icon-chevron-left' : 'icon-chevron-right' }`}></i>
                      </button>

                      <div className="pagination__count">
                        <a href="#">1</a>
                        <a className="-count-is-active" href="#">
                          2
                        </a>
                        <a href="#">3</a>
                        <span>...</span>
                        <a href="#">67</a>
                      </div>

                      <button className="pagination__button -next">
                        <i className={`icon ${ locale == 'en' ? 'icon-chevron-right' : 'icon-chevron-left' }`}></i>
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
