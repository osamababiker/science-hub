


import PageHeading from '@/src/components/aboutCourses/become/PageHeading'
import Tabs from '@/src/components/aboutCourses/become/Tabs'
import LearningCommon from '@/src/components/common/LearningCommon'

import PageLinks from '@/src/components/common/PageLinks'
import Preloader from '@/src/components/common/Preloader'
import FooterThree from '@/src/components/layout/footers/FooterThree'
import Header from '@/src/components/layout/headers/Header'

import React from 'react'

export const metadata = {
  title: 'Instractors-become || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}

export default function page() {
  return (
    <div  className="main-content  ">
      <Preloader/>
        <Header/>
        <div  className="content-wrapper  js-content-wrapper overflow-hidden">
            <PageLinks/>
            <PageHeading/>
            <section  className=" layout-pb-lg">
        <div  className="container">
            <Tabs/> 
            <LearningCommon/>

            </div>
            </section>
            <FooterThree/>


        </div>
    </div>
  )
}
