













import Preloader from '@/src/components/common/Preloader'
import DashboardOne from '@/src/components/dashboard/DashboardOne'
import Listing from '@/src/components/dashboard/listing/Listing'
import MyCourses from '@/src/components/dashboard/MyCourses'
import Reviews from '@/src/components/dashboard/Reviews'
import Sidebar from '@/src/components/dashboard/Sidebar'
import HeaderDashboard from '@/src/components/layout/headers/HeaderDashboard'
import React from 'react'
export const metadata = {
  title: 'Dashboard-reviews || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}
export default function page() {
  return (
    <div  className="barba-container" data-barba="container">
        <main  className="main-content">
        <Preloader/>
            <HeaderDashboard/>
            <div  className="content-wrapper js-content-wrapper overflow-hidden">
              <div id='dashboardOpenClose'  className="dashboard -home-9 js-dashboard-home-9">
                <div  className="dashboard__sidebar scroll-bar-1">
                    <Sidebar/>

                </div>
                <Reviews/>
              </div>
          </div>
        </main>
    </div>
  )
}
