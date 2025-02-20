"use client";

import React, { useEffect, useState } from "react";
import FooterThree from "@/src/components/layout/footers/FooterThree";
import { useTranslations, useLocale } from "next-intl";
import { getUserOrders } from '@/lib/data';

export default function DashboardOne({userId}) { 


  const [orders, setOrders] = useState(null);
  const t = useTranslations('Dashboard');
  const locale = useLocale();
  const courses = new Map();
  let totalLessons = 0;

  useEffect(() => {

    const fetchOrders = async () => {
      try { 
        const res = await getUserOrders(userId);
        if (res) 
          setOrders(res);
        console.log("orders", orders)
      } catch (error) {
        console.error("Error fetching orders details:", error);
      }
    };

    fetchOrders();
  }, [userId]);


  if (!orders) {
    return <p>{t("loading")}...</p>; 
  }

  // cacluate the number of courses and totoal of leasons for this user
  const data = orders.forEach((entry) => {
    if (entry.course) {
      const courseId = entry.course.id;
      if (!courses.has(courseId)) {
        courses.set(courseId, entry.course);
        totalLessons += entry.course.lesson_count || 0;
      }
    }
  });

  const states = [
    {
      id: 1,
      title: t("total_courses"),
      value: courses.size,
      new: 40,
      iconClass: "icon-play-button",
    },
    {
      id: 2,
      title: t("total_leasons"),
      value: totalLessons,
      new: 90,
      iconClass: "icon-online-learning",
    },
    {
      id: 3,
      title: t("totoal_certificates"),
      value: 0,
      new: 290,
      iconClass: "icon-graduate-cap",
    },
  ];

  return (
    <div className="">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">{ t("title") }</h1>
            <div className="mt-10">
              { t("bio") }
            </div>
          </div>
        </div>

        <div className="row y-gap-30">
          {states.map((elm, i) => (
            <div key={i} className="col-xl-4  col-md-6">
              <div className="d-flex justify-between items-center py-35 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                <div>
                  <div className="lh-1 fw-500">{elm.title}</div>
                  <div className="text-24 lh-1 fw-700 text-dark-1 mt-20">
                    {elm.value}
                  </div>
                </div>

                <i className={`text-40 ${elm.iconClass} text-purple-1`}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
