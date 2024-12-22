

import PageLinks from '@/src/components/common/PageLinks'
import Preloader from '@/src/components/common/Preloader'
import CourseListSix from '@/src/components/courseList/CourseListSix'
import CoursesSlider from '@/src/components/courseList/CourseSlider'
import Instractors from '@/src/components/courseList/Instractors'

import PageHeading from '@/src/components/courseList/PageHeading'


import FooterThree from "@/src/components/layout/footers/FooterThree";
import Header from '@/src/components/layout/headers/Header'
import React from 'react'
export const metadata = {
  title: 'Couese-list-6 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}
export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>
        <Header/> 
        <div className="content-wrapper  js-content-wrapper overflow-hidden">
            <PageLinks/>
            <PageHeading/>
            <CoursesSlider/> 
            <Instractors/>
           
            <FooterThree/>
        </div>
    </div>
  )
}
