import Preloader from "@/src/components/common/Preloader";
import HeaderAuth from "@/src/components/layout/headers/HeaderAuth";
import AuthImageMove from "@/src/components/others/AuthImageMove";
import LoginForm from "@/src/components/others/LoginForm";
import React from "react";
export const metadata = {
  title:
    "Login || Educrat - Professional LMS Online Education Course NextJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
};
export default function page() {
  return (
    <div className="main-content  ">
      <Preloader />

      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <section className="form-page js-mouse-move-container">
          <AuthImageMove />
          <LoginForm />
        </section>
      </div>
    </div>
  );
}
