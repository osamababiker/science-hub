

import dynamic from 'next/dynamic'

import FindCourse from '@/src/components/homes/FindCourse'
import LearningJourney from '@/src/components/common/LearningJourney'
import LearningPathSeven from '@/src/components/homes/LearningPath/LearningPathSeven'

import Statictis from '@/src/components/homes/Statistics/Statictis'

import Brands from '@/src/components/common/Brands'

import CategoriesSeven from '@/src/components/homes/categories/CategoriesSeven'
import CoursesSeven from '@/src/components/homes/courses/CoursesSeven'
import EventsSeven from '@/src/components/homes/events/EventsSeven'
import HeroSeven from '@/src/components/homes/heros/HeroSeven'
import InstractorSeven from '@/src/components/homes/instractors/InstractorSeven'
import Pricing from '@/src/components/common/Pricing'
import Testimonials from '@/src/components/homes/testimonials/Testimonials'
import FooterSeven from '@/src/components/layout/footers/FooterSeven'
import HeaderSeven from '@/src/components/layout/headers/HeaderSeven'
import React from 'react'
import Preloader from '@/src/components/common/Preloader'

export const metadata = {
  title: 'Home-7 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}

export default function page() {
  return (
    <div className='main-content'>
      <Preloader/>
        <HeaderSeven/>
        <div className="content-wrapper  js-content-wrapper overflow-hidden">
          
            <HeroSeven/>
            <CoursesSeven/>
            <InstractorSeven/>
            <FindCourse/>
            <LearningPathSeven/>
            <LearningJourney/>
            <Testimonials backgroundComponent={'white'}/>
            <EventsSeven />
            <Pricing/>
            <Brands/>
            <Statictis/>
            <CategoriesSeven/>
            <FooterSeven/>
        </div>
    </div>
  )
}
