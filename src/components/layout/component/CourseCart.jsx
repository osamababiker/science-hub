"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import useCartStore from "@/store/cartStore";
import {Link} from '@/src/i18n/routing';
import { useTranslations } from "next-intl";
import { coursesUploadUrl } from "@/lib/constants";

const CourseCart = () => {

  const t = useTranslations("CartToggle");

  const { cartCourses, removeCourseFromCart, increaseQuantity, decreaseQuantity } = useCartStore();
  const [totalPrice, setTotalPrice] = useState(0);

  
  useEffect(() => {
    const sum = cartCourses.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.discounted_price * currentValue.quantity;
    }, 0);
    setTotalPrice(sum);
  }, [cartCourses]);

  return (
    <div className="header-cart bg-white -dark-bg-dark-1 rounded-8">
      <div
        className="px-30 pt-30 pb-10"
        style={{ maxHeight: "300px", overflowY: "scroll" }}
      >
        {cartCourses.map((elm) => (
          <div key={elm.id} className="row justify-between x-gap-40 pb-20">
            <Link
              style={{ textDecoration: "none" }}
              href={`/courses/${elm.id}`}
              className="col"
            >
              <div className="row x-gap-10 y-gap-10">
                <div className="col-auto">
                  <Image
                    width={80}
                    height={80}
                    src={coursesUploadUrl + elm.image}
                    alt="image"
                  />
                </div>

                <div className="col">
                  <div className="text-dark-1 lh-15">{elm.en_name}</div>

                  <div className="d-flex items-center mt-10">
                    <div className="lh-12 fw-500 line-through text-light-1 mr-10">
                      {t('currancy')} {elm.original_price}
                    </div>
                    <div className="text-18 lh-12 fw-500 text-dark-1">
                    {t('currancy')} {elm.discounted_price}
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <div className="col-auto" onClick={() => removeCourseFromCart(elm.id)}>
              <button>
                <Image
                  width={12}
                  height={12}
                  src="/assets/img/menus/close.svg"
                  alt="icon"
                />
              </button>
            </div>
          </div>
        ))}
        {!cartCourses.length && (
          <div className="p-20 pb-30 text-18 text-dark-1">
            {t('cart_empty')}
          </div>
        )}
      </div>

      <div className="px-30 pt-20 pb-30 border-top-light">
        <div className="d-flex justify-between">
          <div className="text-18 lh-12 text-dark-1 fw-500">{t('total')} :</div>
          <div className="text-18 lh-12 text-dark-1 fw-500">{t('currancy')} {totalPrice}</div>
        </div>

        <div className="row x-gap-20 y-gap-10 pt-30">
          {cartCourses.length && (
            <>
              <Link
                href={"/course-cart"}
                style={{ textDecoration: "none" }}
                className="col-sm-12"
              >
                <button className="button py-20 -dark-1 text-white -dark-button-white cart-btn col-12">
                {t('view_cart')}
                </button> 
              </Link> 
              {/* <Link
                href={"/course-checkout"} 
                style={{ textDecoration: "none" }}
                className="col-sm-6"
              >
                <button className="button py-20 -purple-1 text-white col-12">
                {t('checkout')}
                </button>
              </Link> */}
            </>
          )}
          {!cartCourses.length && (
            <>
              <Link
                href={"/course-cart"}
                style={{ textDecoration: "none" }}
                className="col-12"
              >
                <button className="button py-20 -purple-1 text-white cart-btn col-12">
                   {t('view_cart')}
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCart;
