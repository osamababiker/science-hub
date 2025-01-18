import LearningPathSix from "@/src/components/common/LearningPathSix";
import HeroSix from "@/src/components/homes/heros/HeroSix";
import HeaderSix from "@/src/components/layout/headers/HeaderSix";
import CoursesSix from "@/src/components/homes/courses/CoursesSix";
import React from "react";
import Teachers from "@/src/components/homes/instractors/Teachers";
import CategoriesSix from "@/src/components/homes/categories/CategoriesSix";
import TestimonialsSix from "@/src/components/homes/testimonials/TestimonialsSix";
import LearningPathsSix from "@/src/components/homes/LearningPath/LearningPathsSix";
import CountdownRegistration from "@/src/components/homes/CountdownRegistration";
import BlogsTwo from "@/src/components/homes/blogs/BlogsTwo";
import GetAppSix from "@/src/components/homes/getApp/GetAppSix";
import FooterThree from "@/src/components/layout/footers/FooterThree";
import Preloader from "@/src/components/common/Preloader";
import { getTeachers, getPosts, getCategories, getCourses, getTestimonials } from "@/lib/data";

export const metadata = {
  title:
    "Home-6 || Educrat - Professional LMS Online Education Course NextJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
};

export default async function page() {

  const teachers = await getTeachers();
  const posts = await getPosts();
  const courses = await getCourses();
  const categories = await getCategories();
  const testimonials = await getTestimonials();

  return (
    <div className="main-content">
      <Preloader />
      <HeaderSix />
      <div className="content-wrapper  js-content-wrapper overflow-hidden">
        <HeroSix />
        <LearningPathSix />
        <CoursesSix categories={categories} courses={courses} />
        <Teachers teachers={teachers} />
        <CategoriesSix categories={categories} />
        <TestimonialsSix testimonials={testimonials} />
        {/* <BrandsSix /> */}
        <LearningPathsSix />
        <CountdownRegistration />
        <BlogsTwo posts={posts} />
        <FooterThree />
      </div>
    </div>
  );
}
