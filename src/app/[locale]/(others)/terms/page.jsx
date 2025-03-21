




import PageLinks from '@/src/components/common/PageLinks'
import Preloader from '@/src/components/common/Preloader'

import FooterThree from "@/src/components/layout/footers/FooterThree";
import Header from '@/src/components/layout/headers/Header';
import Terms from '@/src/components/terms/Terms' 
import React from 'react'

export const metadata = {
  title:
    "Home || Science Hub",
  description:
    "Science Hub is a leading educational platform specializing in delivering high-quality training, online courses, and tutoring services .",
};

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>

        <Header/>
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            <PageLinks/>
            <Terms/>
            <FooterThree/>
        </div>

    </div>
  )
}
