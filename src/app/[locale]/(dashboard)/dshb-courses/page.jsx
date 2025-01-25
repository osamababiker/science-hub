
import Preloader from '@/src/components/common/Preloader'
import MyCourses from '@/src/components/dashboard/MyCourses'
import Sidebar from '@/src/components/dashboard/Sidebar'
import HeaderSix from "@/src/components/layout/headers/HeaderSix";
import { getServerSession } from "next-auth/next";
import { getUserOrders, getCategories } from '@/lib/data';
import { authOptions } from '@/lib/auth';
import React from 'react';

export const metadata = {
  title: 'Dashboard-courses || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}

export default async function page() {

  const session = await getServerSession(authOptions);
  if (!session) {
    return <div>Please log in to access this page.</div>;
  }

  const orders = await getUserOrders( 2 );
  const categories = await getCategories();

  return ( 
    <div  className="barba-container" data-barba="container">
        <main  className="main-content">
        <Preloader/>
          <HeaderSix />
            <div  className="content-wrapper js-content-wrapper overflow-hidden">
              <div id='dashboardOpenClose'  className="dashboard -home-9 js-dashboard-home-9">
                <div  className="dashboard__sidebar scroll-bar-1">
                    <Sidebar/>

                </div>
                <MyCourses categories={categories} orders={orders} />
              </div>
          </div>
        </main>
    </div>
  )
}
