import Preloader from '@/src/components/common/Preloader';
import AuthImageMove from '@/src/components/others/AuthImageMove';
import SignUpForm from '@/src/components/others/SignUpForm';
import React from 'react';

export const metadata = {
  title:
    "Sign Up || Science Hub",
  description:
    "Science Hub is a leading educational platform specializing in delivering high-quality training, online courses, and tutoring services .",
};

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>
        
 
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            <section  className="form-page js-mouse-move-container">
                <AuthImageMove/>
                <SignUpForm/>
            </section>
           
            
            
        </div>

    </div>
  )
}
