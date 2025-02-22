
import BlogsOne from '@/src/components/blogs/BlogsOne'
import PageLinks from '@/src/components/common/PageLinks'
import Preloader from '@/src/components/common/Preloader'

import FooterThree from '@/src/components/layout/footers/FooterThree'
import Header from '@/src/components/layout/headers/Header';
import { getPosts, getCategories } from "@/lib/data";
import React from 'react'


export const metadata = {
  title:
    "Our Blog || Science Hub",
  description:
    "Science Hub is a leading educational platform specializing in delivering high-quality training, online courses, and tutoring services .",
};


export default async function page() {

  const posts = await getPosts();
  const categories = await getCategories();

  return (
    <div className="main-content  "> 
      <Preloader/>

        <Header/>
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            <PageLinks/>

            <BlogsOne categories={categories} posts={posts}/>
            
            <FooterThree/>
        </div>

    </div>
  )
}

