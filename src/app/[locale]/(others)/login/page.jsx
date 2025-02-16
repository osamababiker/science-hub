import Preloader from "@/src/components/common/Preloader";
import HeaderAuth from "@/src/components/layout/headers/HeaderAuth";
import AuthImageMove from "@/src/components/others/AuthImageMove";
import LoginForm from "@/src/components/others/LoginForm";
import React from "react";

export const metadata = {
  title:
    "Login || Science Hub",
  description:
    "Science Hub is a leading educational platform specializing in delivering high-quality training, online courses, and tutoring services .",
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
