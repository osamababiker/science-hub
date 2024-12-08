




import React from 'react'
import HeaderFour from '@/src/components/layout/headers/HeaderFour'
import HeroFour from '@/src/components/homes/heros/HeroFour'
import Brands from '@/src/components/common/Brands'

import CategoriesFour from '@/src/components/homes/categories/CategoriesFour'
import CoursesFour from '@/src/components/homes/courses/CoursesFour'
import LearningPath from '@/src/components/homes/LearningPath/LearningPath'
import FeaturedCourses from '@/src/components/homes/courses/FeaturedCourses'
import LandJob from '@/src/components/homes/landJob/LandJob'
import TestimonialsFour from '@/src/components/homes/testimonials/TestimonialsFour'
import AchievementsTwo from '@/src/components/homes/achievements/AchievementsTwo'
import InstractorFour from '@/src/components/homes/instractors/InstractorFour'
import EventsFour from '@/src/components/homes/events/EventsFour'
import LearningSelection from '@/src/components/homes/LearningSelection'
import FooterFour from '@/src/components/layout/footers/FooterFour'
import Preloader from '@/src/components/common/Preloader'
export const metadata = {
  title: 'Home-4 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}




export default function page() {
  return (
    <>
    <div className='main-content'>
    <Preloader/>
        <HeaderFour/>
    </div>
     <div className="content-wrapper  js-content-wrapper overflow-hidden">
        <HeroFour/>
        <Brands/>
        <CategoriesFour/>
        <CoursesFour/>
        <LearningPath/>
        <FeaturedCourses/>
        <LandJob/>
        <TestimonialsFour/>
        <AchievementsTwo/>
        <InstractorFour/>
        <EventsFour/>
        <LearningSelection/>
        <FooterFour/>

     </div>
     </>
  )
}
