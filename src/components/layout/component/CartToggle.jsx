"use client";
import { menuList } from "@/data/menu";
import { usePathname } from "next/navigation";
import React from "react";
import useCartStore from "@/store/cartStore";
import { useState, useEffect } from "react";
import CourseCart from "./CourseCart";

const CartToggle = ({ allClasses, parentClassess }) => {

  const { cartCourses } = useCartStore();
  const [activeCart, setActiveCart] = useState(false);
  const [menuItem, setMenuItem] = useState("");
  const [submenu, setSubmenu] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    menuList.forEach((elm) => {
      elm?.links?.forEach((elm2) => {
        if (elm2.href?.split('/')[1] == pathname?.split('/')[1]) {
          setMenuItem(elm.title);
        } else {
          elm2?.links?.map((elm3) => {
            if (elm3.href?.split('/')[1] == pathname?.split('/')[1]) {
              setMenuItem(elm.title);
              setSubmenu(elm2.title);
            }
          });
        }
      });
    });
  }, []);

  return (
    <>
      <div className={parentClassess ? parentClassess : ""}>
        <button
          style={{ position: "relative" }}
          onClick={() => setActiveCart((pre) => !pre)}
          className={`${allClasses ? allClasses : ""}`}
          data-el-toggle=".js-cart-toggle"
        >
          <i className="text-20 icon icon-basket"></i>
          <div className="cartProductCount">
            {submenu == "Shop" && (
              <>{cartProducts.length > 9 ? "9+" : cartProducts.length} </>
            )}
            {menuItem == "Events" && (
              <>{cartEvents.length > 9 ? "9+" : cartEvents.length} </>
            )}
            {!(submenu == "Shop" || menuItem == "Events") && (
              <>{cartCourses.length > 9 ? "9+" : cartCourses.length} </>
            )}
          </div>
        </button>

        <div
          className={`toggle-element js-cart-toggle ${
            activeCart ? "-is-el-visible" : ""
          }`}
        >
          {!(submenu == "Shop" || menuItem == "Events") && <CourseCart />}
        </div>
      </div>
    </>
  );
};

export default CartToggle;
