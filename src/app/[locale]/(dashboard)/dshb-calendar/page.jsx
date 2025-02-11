

import Preloader from '@/src/components/common/Preloader'
import Calender from '@/src/components/dashboard/calendar/Calender'
import PageLinksDashboard from '@/src/components/common/PageLinksDashboard'
import HeaderDashboard from "@/src/components/layout/headers/HeaderDashboard";
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
          <HeaderDashboard />
          <PageLinksDashboard/>
          <div className="content-wrapper js-content-wrapper overflow-hidden">
            <Calender/>
          </div>
        </main>
    </div>
  )
}
