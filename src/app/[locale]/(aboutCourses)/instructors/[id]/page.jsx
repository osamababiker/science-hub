import InstractorSingle from '@/src/components/aboutCourses/instractors/InstractorSingle'
import PageLinks from '@/src/components/common/PageLinks'
import Preloader from '@/src/components/common/Preloader'
import FooterThree from '@/src/components/layout/footers/FooterThree'
import Header from '@/src/components/layout/headers/Header'
import React from 'react'

export const metadata = {
  title:
    "Teacher || Science Hub",
  description:
    "Science Hub is a leading educational platform specializing in delivering high-quality training, online courses, and tutoring services .",
};

export default function page({ params }) {
  return (
    <div  className="main-content  ">
      <Preloader/>
        <Header/>
        <div  className="content-wrapper  js-content-wrapper overflow-hidden">
            <PageLinks/>
            <InstractorSingle  id={params.id} />
            <FooterThree/>
        </div>
    </div>
  )
}
