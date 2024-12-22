"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { arProductData, tags, arCategories } from "@/data/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import Slider from "@mui/material/Slider";
import Pagination from "../common/Pagination";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useContextElement } from "@/context/Context";
import {Link} from '@/src/i18n/routing';
import { useTranslations, useLocale } from "next-intl";
export default function ShopList() {

  const t = useTranslations("ShopListPage");
  const locale = useLocale();

  const { addProductToCart, isAddedToCartProducts } = useContextElement();

  const [value, setValue] = useState([200, 1500]);
  const [pageData, setpageData] = useState();

  const [pageItems, setPageItems] = useState(arProductData);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   const filtered = arProductData.filter(
  //     (elm, i) => elm.price >= value[0] && elm.price <= value[1],
  //   );
  //   setPageItems(filtered);
  // }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
          <div className="row x-gap-60">
            <div className="col-lg-3">
              <div className="sidebar -shop">
                <div className="sidebar__item">
                  <div className="sidebar__search mb-30">
                    <div className="search">
                      <form onSubmit={handleSubmit}>
                        <button className="submit" type="submit">
                          <i className="icon" data-feather="search"></i>
                        </button>
                        <input
                          required
                          className="field"
                          type="text"
                          placeholder={t("filter_search")}
                        />
                      </form>
                    </div>
                  </div>

                  <h5 className="sidebar__title">{t("filter_categories")}</h5>

                  <div className="sidebar-content -list">
                    {arCategories.map((elm, i) => (
                      <a key={i} className="text-dark-1" href={elm.href}>
                        {elm.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="sidebar__item">
                  <h5 className="sidebar__title">{t("filter_price")}</h5>

                  <div className="sidebar-content -slider">
                    <div className="js-price-rangeSlider">
                      <div className="px-5">
                        <Slider
                          getAriaLabel={() => "Minimum distance"}
                          value={value}
                          onChange={handleChange}
                          valueLabelDisplay="auto"
                          max={2000}
                          min={200}
                          disableSwap
                        />
                      </div>

                      <div className="mt-25">
                        <div className="d-flex items-center justify-between text-14">
                          <span>
                          {t("min_price")}
                            <span className="js-lower">{value[0]}</span>
                          </span>
                          <span>
                          {t("max_price")}
                            <span className="js-upper">{value[1]}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-9">
              <div className="row y-gap-10 justify-between items-center">
                <div className="col-auto">
                  <div className="text-14">
                  {t("result_count_one")} <span className="fw-500 text-dark-1">250</span>{" "}
                  {t("result_count_two")}
                  </div>
                </div>

                <div className="col-auto">
                  <div className="d-flex items-center">
                    <div className={`fw-500 text-dark-1 ${ locale == 'en' ? 'mr-20' : 'ml-20' }`}>{t("sort_by")}</div>

                    <div className="dropdown js-shop-dropdown">
                      <div className="d-flex items-center text-14">
                        <span className="js-dropdown-title">
                        {t("default_sort")}
                        </span>
                        <FontAwesomeIcon
                          className="icon size-15 mr-40"
                          icon={faChevronDown}
                        />
                      </div>

                      <div className="dropdown__item">
                        <div className="text-14 y-gap-15 js-dropdown-list">
                          <div>
                            <a
                              className="d-block decoration-none js-dropdown-link"
                              href="#"
                            >
                              {t("default_sort")}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row y-gap-30 pt-30">
                {pageItems.map((elm, i) => (
                  <div key={i} className="col-lg-4 col-sm-6">
                    <div className="productCard -type-1 text-center">
                      <div className="productCard__image">
                        <Image
                          width={528}
                          height={528}
                          src={elm.image}
                          alt="Product image"
                        />

                        <div className="productCard__controls">
                          <span className="productCard__icon">
                            <FontAwesomeIcon icon={faEye} />
                          </span>
                          <span className="productCard__icon">
                            <FontAwesomeIcon icon={faHeart} />
                          </span>
                        </div>
                      </div>

                      <div className="productCard__content mt-20">
                        <div className="text-14  lh-1">
                          {elm.categories.map((itm, index) => (
                            <span key={index}>{`${itm}, `}</span>
                          ))}
                        </div>
                        <h4 className="text-17 fw-500 mt-15 linkCustom">
                          <Link
                            href={`/shop/${elm.id}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            {" "}
                            {elm.name}{" "}
                          </Link>
                        </h4>
                        <div className="text-17 fw-500 text-purple-1 mt-15">
                          {t("currancy")} {elm.price.toFixed(2)}
                        </div>

                        <div
                          className="productCard__button d-inline-block cursor"
                          onClick={() => addProductToCart(elm.id)}
                        >
                          <span className="button -md -outline-purple-1 text-dark-1 mt-15">
                            {isAddedToCartProducts(elm.id)
                              ? t("alredy_added")
                              : t("add_to_cart")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row justify-center pt-60 lg:pt-40">
                <div className="col-auto">
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
