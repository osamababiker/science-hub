"use client";
import React from "react";
import { arProductData } from "@/data/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import useCartStore from "@/store/cartStore";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
export default function RelatedProducts() {

  const t = useTranslations("ShopPage");
  const { addCourseToCart, isAddedToCartCourses } = useCartStore();
  return ( 
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">{t("related_courses_title")}</h2>
            </div>
          </div>
        </div>

        <div className="row y-gap-32 pt-60 sm:pt-40">
          {arProductData.slice(2, 6).map((elm, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
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
                  <div className="text-14 lh-1">
                    {elm.categories.map((itm, index) => (
                      <span key={index}>{`${itm}, `}</span>
                    ))}
                  </div>
                  <h4 className="text-17 fw-500 mt-15 linkCustom">
                    <Link
                      href={`/shop/${elm.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {elm.name}
                    </Link>
                  </h4>
                  <div className="text-17 fw-500 text-purple-1 mt-15">
                    {elm.price} {t("currancy")}
                  </div>

                  <div
                    className="productCard__button d-inline-block"
                    onClick={() => addCourseToCart(elm)}
                  >
                    <span className="button -md -outline-purple-1 -rounded text-dark-1 mt-15">
                      {isAddedToCartCourses(elm.id)
                        ? t("alredy_added")
                        : t("add_to_cart")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
