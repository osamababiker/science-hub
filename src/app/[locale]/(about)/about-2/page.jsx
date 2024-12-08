




import About from '@/src/components/about/About'
import BecomeInstactor from '@/src/components/common/BecomeInstactor'
import BacomeStudent from '@/src/components/common/BecomeStudent'
import Brands from '@/src/components/common/Brands'
import PageLinks from '@/src/components/common/PageLinks'
import StepsOne from '@/src/components/common/StepsOne'

import FooterOne from '@/src/components/layout/footers/FooterOne'
import Header from '@/src/components/layout/headers/Header'
import React from 'react'
import Testimonials from '../../../components/common/Testimonials'
import LearningJourney from '@/src/components/common/LearningJourney'
import LearningPathSix from '@/src/components/common/LearningPathSix'
import Preloader from '@/src/components/common/Preloader'

export const metadata = {
  title: 'About-2 || Educrat - Professional LMS Online Education Course NextJS Template',
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
            <StepsOne/>
            <LearningJourney/>
            <Testimonials/>

            <LearningPathSix/>

            <BecomeInstactor/>
            <BacomeStudent/>



            <Brands/>

            
            <FooterOne/>
        </div>

    </div>
  )
}

