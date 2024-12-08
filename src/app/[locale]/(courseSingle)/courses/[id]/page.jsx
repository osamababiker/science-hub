




import PageLinks from '@/src/components/common/PageLinks'
import Preloader from '@/src/components/common/Preloader'
import CourseDetailsOne from '@/src/components/courseSingle/CourseDetailsOne'
import CourseSlider from '@/src/components/courseSingle/CourseSlider'
import FooterOne from '@/src/components/layout/footers/FooterOne'

import Header from '@/src/components/layout/headers/Header'
import React from 'react'

export const metadata = {
  title: 'Couese-single-1 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}

export default function page({ params }) {
  <Preloader/>
  return (
    <div  className="main-content  ">
        <Header/>
        <div  className="content-wrapper  js-content-wrapper ">
            <PageLinks/>
            <CourseDetailsOne id={params.id} />
            <CourseSlider/>
            <FooterOne/>
        </div>


    </div>
  )
}
