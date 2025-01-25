






import BlogsOne from '@/src/components/blogs/BlogsOne'
import PageLinks from '@/src/components/common/PageLinks'
import Preloader from '@/src/components/common/Preloader'

import FooterThree from '@/src/components/layout/footers/FooterThree'
import Header from '@/src/components/layout/headers/Header'

import React from 'react'

import CourseCart from '../../../../components/cartsAndCheckout/CourseCart'

export const metadata = {
  title:
    "Shoping Cart || Science Hub",
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

            <CourseCart/>
            
            <FooterThree/>
        </div>

    </div>
  )
}

