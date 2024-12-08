



import CategoriesEight from '@/src/components/homes/categories/CategoriesEight'
import CoursesEight from '@/src/components/homes/courses/CoursesEight'
import HeroEight from '@/src/components/homes/heros/HeroEight'
import HeaderEight from '@/src/components/layout/headers/HeaderEight'

import React from 'react'
import WhyCourse from '@/src/components/homes/WhyCourse'
import FeaturesEight from '@/src/components/homes/features/FeaturesEight'
import StatictisEight from '@/src/components/homes/Statistics/StatictisEight'
import InstractorsEight from '@/src/components/homes/instractors/InstractorsEight'
import EventsEight from '@/src/components/homes/events/EventsEight'
import TestimonialsEight from '@/src/components/homes/testimonials/TestimonialsEight'
import Brands from '@/src/components/common/Brands'

import BecomeInstractoeEight from '@/src/components/homes/instractors/BecomeInstractoeEight'
import BecomeStudentEight from '@/src/components/homes/students/BecomeStudentEight'
import FooterEight from '@/src/components/layout/footers/FooterEight'
import Preloader from '@/src/components/common/Preloader'

export const metadata = {
  title: 'Home-8 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>

      <HeaderEight/>
      <div className="content-wrapper  js-content-wrapper overflow-hidden">
        <HeroEight/>
        <CategoriesEight/>
        <CoursesEight/>
        <WhyCourse/>
        <FeaturesEight/>
        <StatictisEight/>
        <InstractorsEight/>
        <EventsEight/>
        <TestimonialsEight/>
        <Brands brandsTwo={true} backgroundColorComponent={'bg-light-6'} />
        <BecomeInstractoeEight/>
        <BecomeStudentEight/>
        <FooterEight/>
        
      </div>

    </div>
  )
}
