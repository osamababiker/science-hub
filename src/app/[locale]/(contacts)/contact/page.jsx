import Faq from '@/src/components/common/Faq'
import Preloader from '@/src/components/common/Preloader'

import ContactTwo from '@/src/components/contacts/ContactTwo'

import FooterThree from '@/src/components/layout/footers/FooterThree'
import Header from '@/src/components/layout/headers/Header'
import React from 'react'


export const metadata = {
  title:
    "Contact Us || Science Hub",
  description:
    "Science Hub is a leading educational platform specializing in delivering high-quality training, online courses, and tutoring services .",
};

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

