
import PageLinks from '@/src/components/common/PageLinks'
import Preloader from '@/src/components/common/Preloader'

import FooterOne from '@/src/components/layout/footers/FooterOne'
import Header from '@/src/components/layout/headers/Header'

import ShopOrder from '@/src/components/shop/ShopOrder'
import React from 'react'
export const metadata = {
  title: 'Shop-order || Educrat - Professional LMS Online Education Course NextJS Template',
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

            <ShopOrder/>
            
            <FooterOne/>
        </div>

    </div>
  )
}

