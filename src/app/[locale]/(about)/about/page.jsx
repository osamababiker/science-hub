import About from '@/src/components/about/About'
import PageLinks from '@/src/components/common/PageLinks'
import Preloader from '@/src/components/common/Preloader'
import TestimonialsOne from '@/src/components/common/TestimonialsOne'
import WhyCourse from '@/src/components/homes/WhyCourse'
import AboutUsFaq from '@/src/components/common/AboutUsFaq'


import FooterThree from '@/src/components/layout/footers/FooterThree'
import Header from '@/src/components/layout/headers/Header';
import { getTestimonials } from "@/lib/data";
import React from 'react'

export const metadata = {
  title:
    "About Us || Science Hub",
  description:
    "Science Hub is a leading educational platform specializing in delivering high-quality training, online courses, and tutoring services .",
};

export default async function page() {

  const testimonials = await getTestimonials();

  return (
    <div className="main-content  ">
      <Preloader/>

        <Header/>
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            <PageLinks />
            <About/>
            <AboutUsFaq/>
            <TestimonialsOne testimonials={testimonials}/>
            <FooterThree/>
        </div>

    </div>
  )
}

