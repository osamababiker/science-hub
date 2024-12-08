




import About from '@/src/components/about/About'


import Brands from '@/src/components/common/Brands'
import Instructors from '@/src/components/common/Instructors'
import PageLinks from '@/src/components/common/PageLinks'
import Preloader from '@/src/components/common/Preloader'
import TestimonialsOne from '@/src/components/common/TestimonialsOne'
import WhyCourse from '@/src/components/homes/WhyCourse'


import FooterOne from '@/src/components/layout/footers/FooterOne'
import Header from '@/src/components/layout/headers/Header'
import React from 'react'

export const metadata = {
  title: 'About-1 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>

        <Header/>
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            <PageLinks/>
            <About/>
            <WhyCourse/>
            

            <TestimonialsOne/>
            <Instructors/>
            <Brands/>
           

            
            
            <FooterOne/>
        </div>

    </div>
  )
}

