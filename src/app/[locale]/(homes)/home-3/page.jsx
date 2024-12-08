


import React from 'react'
import HeaderThree from '@/src/components/layout/headers/HeaderThree'
import HeroThree from '@/src/components/homes/heros/HeroThree'
import Features from '@/src/components/homes/features/Features'
import CategoriesThree from '@/src/components/homes/categories/CategoriesThree'
import CoursesSlider from '@/src/components/homes/courses/CoursesSlider'
import StepsOne from '@/src/components/common/StepsOne'

import Instructors from '@/src/components/common/Instructors'
import Testimonials from '@/src/components/common/Testimonials'
import CoursesTwo from '@/src/components/homes/courses/CoursesTwo'
import Achievements from '@/src/components/homes/achievements/Achievements'
import SkillsOne from '@/src/components/homes/skills/SkillsOne'
import Line from '@/src/components/common/Line'
import BlogsTwo from '@/src/components/homes/blogs/BlogsTwo'
import JoinTwo from '@/src/components/homes/join/JoinTwo'
import FooterTwo from '@/src/components/layout/footers/FooterThree'
import Preloader from '@/src/components/common/Preloader'
export const metadata = {
  title: 'Home-3 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}
export default function page() {
  return (
    <main className="main-content overflow-hidden ">
      <Preloader/>
      <HeaderThree/>
      <div className="content-wrapper  js-content-wrapper overflow-hidden">
        <HeroThree/>
        <Features/>
        <CategoriesThree/>
        <CoursesSlider/>
        <StepsOne/>
        <Line/>
        <Instructors/>
        <Testimonials/>
        <CoursesTwo/>
        <Achievements/>
        <SkillsOne/>
        <Line/>
        <BlogsTwo/>
        <JoinTwo/>
        <FooterTwo/>

      </div>
    </main>
  )
}
