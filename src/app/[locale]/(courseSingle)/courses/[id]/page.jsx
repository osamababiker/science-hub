




import PageLinks from '@/src/components/common/PageLinks'
import Preloader from '@/src/components/common/Preloader'
import CourseDetailsSix from '@/src/components/courseSingle/CourseDetailsSix'
import CourseSlider from '@/src/components/courseSingle/CourseSlider'
import FooterThree from '@/src/components/layout/footers/FooterThree'

import Header from '@/src/components/layout/headers/Header';
import React from 'react'

export const metadata = {
  title:
    "Course || Science Hub",
  description:
    "Science Hub is a leading educational platform specializing in delivering high-quality training, online courses, and tutoring services .",
};
 
export default async function page({ params }) { 

  const { id } = await params;
  
  <Preloader/>
  return (
    <div  className="main-content  ">
        <Header/>
        <div  className="content-wrapper  js-content-wrapper ">
            <PageLinks/>
            <CourseDetailsSix courseId={id} />
            {/* <CourseSlider/> */}
            <FooterThree/>
        </div>


    </div>
  )
}
