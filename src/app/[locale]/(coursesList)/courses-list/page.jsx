

import PageLinks from '@/src/components/common/PageLinks'
import Preloader from '@/src/components/common/Preloader'
import CoursesSlider from '@/src/components/courseList/CourseSlider'
import PageHeading from '@/src/components/courseList/PageHeading'
import FooterThree from "@/src/components/layout/footers/FooterThree";
import Header from '@/src/components/layout/headers/Header'
import {  getCategories, getCourses, getTeachers } from "@/lib/data"
import React from 'react'

export const metadata = {
  title:
    "Courses List || Science Hub",
  description:
    "Science Hub is a leading educational platform specializing in delivering high-quality training, online courses, and tutoring services .",
};

export default async function page() {

  const courses = await getCourses();
  const categories = await getCategories();
  const teachers = await getTeachers();

  return (
    <div className="main-content  ">
      <Preloader/>
        <Header/> 
        <div className="content-wrapper  js-content-wrapper overflow-hidden">
            <PageLinks/>
            <PageHeading/>
            <CoursesSlider categories={categories} courses={courses}/> 
            {/* <Instractors teachers={teachers}/> */}
           
            <FooterThree/>
        </div>
    </div>
  )
}
