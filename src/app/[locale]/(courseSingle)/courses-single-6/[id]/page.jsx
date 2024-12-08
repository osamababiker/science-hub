





import PageLinks from '@/src/components/common/PageLinks'
import Preloader from '@/src/components/common/Preloader'

import CourseDetailsSix from '@/src/components/courseSingle/CourseDetailsSix'


import CourseSlider from '@/src/components/courseSingle/CourseSlider'
import FooterOne from '@/src/components/layout/footers/FooterOne'

import Header from '@/src/components/layout/headers/Header'
import React from 'react'


export const metadata = {
  title: 'Couese-single-6 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}

export default function page({ params }) {
  return (
    <div  className="main-content  ">
      <Preloader/>
        <Header/>
        <div  className="content-wrapper  js-content-wrapper">
            <PageLinks dark={true} />
            <CourseDetailsSix id={params.id} />
            <CourseSlider/>
            <FooterOne/>
        </div>


    </div>
  )
}
