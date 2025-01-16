














import PageLinks from '@/src/components/common/PageLinks'
import Preloader from '@/src/components/common/Preloader'

import FooterOne from '@/src/components/layout/footers/FooterOne'
import Header from '@/src/components/layout/headers/Header'
import Accordions from '@/src/components/uiElements/Accordions'
import Buttons from '@/src/components/uiElements/Buttons'
import Form from '@/src/components/uiElements/Form'
import MessageBoxes from '@/src/components/uiElements/MessageBoxes'
import PageHeading from '@/src/components/uiElements/PageHeading'
import ProgressBars from '@/src/components/uiElements/ProgressBars'
import Table from '@/src/components/uiElements/Table'
import Tabs from '@/src/components/uiElements/Tabs'
import Tooltips from '@/src/components/uiElements/Tooltips'
import Typography from '@/src/components/uiElements/Typography'
export const metadata = {
  title: 'UI elements || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}
import React from 'react'

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>

        <Header/>
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            <PageLinks/>
            <PageHeading/>
            <section  className="layout-pb-lg">
              <div  className="container">
                <div  className="row y-gap-50">
                  <Accordions/>
                  <Tabs/>
                  <Table/>
                  <MessageBoxes/>
                </div>
                <Buttons/>
                <Form/>
                <div  className="row y-gap-30 justify-between mt-50">
                  <Tooltips/>
                  <ProgressBars/>
                </div>
                <Typography/>
              </div>
            </section>
            
            <FooterOne/>
        </div>

    </div>
  )
}
