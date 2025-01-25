import PageLinks from '@/src/components/common/PageLinks'
import Preloader from '@/src/components/common/Preloader'



import FooterThree from '@/src/components/layout/footers/FooterThree'
import Header from '@/src/components/layout/headers/Header'
import ProductDetails from '@/src/components/shop/ProductDetails'
import RelatedProducts from '@/src/components/shop/RelatedProducts'
import React from 'react'

export const metadata = {
  title:
    "Courses || Science Hub",
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

            <ProductDetails id={params.id} />
            <RelatedProducts/>

            
       
            <FooterThree/>
        </div>

    </div>
  )
}
