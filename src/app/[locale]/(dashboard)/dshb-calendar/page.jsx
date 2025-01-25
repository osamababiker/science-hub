

import Preloader from '@/src/components/common/Preloader'
import Sidebar from '@/src/components/dashboard/Sidebar'
import Calender from '@/src/components/dashboard/calendar/Calender'
import HeaderSix from "@/src/components/layout/headers/HeaderSix";
import React from 'react'

export const metadata = {
  title:
    "Calender || Science Hub",
  description:
    "Science Hub is a leading educational platform specializing in delivering high-quality training, online courses, and tutoring services .",
};

export default function page() {
  return (
    <div  className="barba-container" data-barba="container">
        <main  className="main-content">
        <Preloader/>
            <HeaderSix/>
            <div  className="content-wrapper js-content-wrapper overflow-hidden">
              <div id='dashboardOpenClose'  className="dashboard -home-9 js-dashboard-home-9">
                <div  className="dashboard__sidebar scroll-bar-1">
                    <Sidebar/>

                </div>
                <Calender/>
              </div>
          </div>
        </main>
    </div>
  )
}
