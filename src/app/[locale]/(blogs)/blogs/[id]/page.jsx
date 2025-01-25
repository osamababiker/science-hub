
import RelatedBlogs from '@/src/components/blogs/RelatedBlogs'
import PageLinks from '@/src/components/common/PageLinks'



import FooterOne from '@/src/components/layout/footers/FooterOne'
import Header from '@/src/components/layout/headers/Header'
import React from 'react'
import BlogDetails from '@/src/components/blogs/BlogDetails'
import Preloader from '@/src/components/common/Preloader'


export const metadata = {
  title:
    "Our Blog || Science Hub",
  description:
    "Science Hub is a leading educational platform specializing in delivering high-quality training, online courses, and tutoring services .",
};


export default function page({ params }) {
  return (
    <div className="main-content  ">
      <Preloader/>

        <Header/>
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            <PageLinks/>

            <BlogDetails id={params.id} />

            <RelatedBlogs/>
       
            <FooterOne/>
        </div>

    </div>
  )
}
