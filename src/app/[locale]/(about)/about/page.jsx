import About from '@/src/components/about/About'
import PageLinks from '@/src/components/common/PageLinks'
import Preloader from '@/src/components/common/Preloader'
import TestimonialsOne from '@/src/components/common/TestimonialsOne'
import WhyCourse from '@/src/components/homes/WhyCourse'


import FooterThree from '@/src/components/layout/footers/FooterThree'
import Header from '@/src/components/layout/headers/Header';
import { getTestimonials } from "@/lib/data";
import React from 'react'

export const metadata = {
  title: 'About-1 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}

export default async function page() {

  const testimonials = await getTestimonials();

  return (
    <div className="main-content  ">
      <Preloader/>

        <Header/>
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            <PageLinks/>
            <About/>
            <WhyCourse/>
            <TestimonialsOne testimonials={testimonials}/>
            <FooterThree/>
        </div>

    </div>
  )
}

