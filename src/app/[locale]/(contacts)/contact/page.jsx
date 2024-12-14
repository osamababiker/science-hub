import Faq from '@/src/components/common/Faq'
import Preloader from '@/src/components/common/Preloader'

import ContactTwo from '@/src/components/contacts/ContactTwo'

import FooterThree from '@/src/components/layout/footers/FooterThree'
import Header from '@/src/components/layout/headers/Header'
import React from 'react'
export const metadata = {
  title: 'Contact-2 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>

        <Header/>
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            

            <ContactTwo/>
            <Faq/>

           
            
            <FooterThree/>
        </div>

    </div>
  )
}

