





import BrandsTwo from '@/src/components/homes/brands/BrandsTwo'
import HeroFive from '@/src/components/homes/heros/HeroFive'
import HeaderFive from '@/src/components/layout/headers/HeaderFive'
import CoursesFive from '@/src/components/homes/courses/CoursesFive'
import React from 'react'
import CategoriesFive from '@/src/components/homes/categories/CategoriesFive'
import Instructors from '@/src/components/common/Instructors'
import StudentsFive from '@/src/components/homes/students/StudentsFive'
import LearningPathFive from '@/src/components/common/LearningCommon'
import Pricing from '@/src/components/homes/pricing/Pricing'

import GetAppFive from '@/src/components/homes/getApp/GetAppFive'
import BlogsFive from '@/src/components/homes/blogs/BlogsFive'
import RecomentationFive from '@/src/components/homes/LearningRecomentation/RecomentationFive'
import FooterFive from '@/src/components/layout/footers/FooterFive'
import Preloader from '@/src/components/common/Preloader'

export const metadata = {
  title: 'Home-5 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>
        <HeaderFive/>
        <div className="content-wrapper  js-content-wrapper overflow-hidden">
          <HeroFive/>
          <BrandsTwo/>
          <CoursesFive/>
          <CategoriesFive/>
          <Instructors backgroundColor={'bg-beige-1'}/>
          <StudentsFive/>
          <LearningPathFive/>
          <Pricing/>
          <GetAppFive/>
          <BlogsFive/>
          <RecomentationFive/>
          <FooterFive/>

        </div>


        


    </div>
  )
}
