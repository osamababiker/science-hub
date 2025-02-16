


import Preloader from '@/src/components/common/Preloader'
import DashboardOne from '@/src/components/dashboard/DashboardOne'
import PageLinksDashboard from '@/src/components/common/PageLinksDashboard'
import HeaderDashboard from "@/src/components/layout/headers/HeaderDashboard";
import { authOptions } from '@/lib/auth';
import { getServerSession } from "next-auth/next";
import React from 'react'


export const metadata = {
  title:
    "Profile || Science Hub",
  description:
    "Science Hub is a leading educational platform specializing in delivering high-quality training, online courses, and tutoring services .",
};

export default async function page() {

  const session = await getServerSession(authOptions);
  if (!session) {
    return <div>Please log in to access this page.</div>;
    
  }

  return (
    <div  className="barba-container" data-barba="container">
        <main  className="main-content">
        <Preloader/>
          <HeaderDashboard />
          <PageLinksDashboard/>
          <div className="content-wrapper js-content-wrapper overflow-hidden">
            <DashboardOne userId={session.user.id}/>
          </div>
        </main>
    </div>
  )
}
