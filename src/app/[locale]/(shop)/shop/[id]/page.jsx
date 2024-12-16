import PageLinks from '@/src/components/common/PageLinks'
import Preloader from '@/src/components/common/Preloader'



import FooterThree from '@/src/components/layout/footers/FooterThree'
import Header from '@/src/components/layout/headers/Header'
import ProductDetails from '@/src/components/shop/ProductDetails'
import RelatedProducts from '@/src/components/shop/RelatedProducts'
import React from 'react'
export const metadata = {
  title: 'Shop-details || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}
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