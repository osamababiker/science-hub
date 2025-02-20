"use client";

import React from "react";
import { useState, useEffect } from "react";
import {  getPostDetails } from "@/lib/data";
import moment from 'moment';
import { useTranslations, useLocale } from "next-intl";
import Overview from "./Overview";
import { blogsUploadUrl } from "@/lib/constants";

export default function BlogDetails({ blogId }) { 


  const [blog, setBlog] = useState(null);
  const t = useTranslations("BlogListPage");
  const locale = useLocale();

  useEffect(() => {
    if (!blogId) return; 

    const fetchBlog = async () => {
      try { 
        const res = await getPostDetails(blogId);
        if (res) {
          console.log(res)
          setBlog(res);
        }
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlog();
  }, [blogId]);

  if (!blog) {
    return <>
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
    </div>
    </>
  }

  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <div className="text-14 text-purple-1 uppercase fw-500 mb-8">
                    { locale == "en" ? blog.category.en_name.toUpperCase() : blog.category.ar_name }
                  </div>

                  <h1 className="page-header__title lh-14">
                    { 
                      locale == "en" ?  blog.en_title.split(" ").slice(0, 4).join(" ") : 
                      blog.ar_title.split(" ").slice(0, 4).join(" ") 
                    }
                    <br />
                    {
                      locale == "en" ? blog.en_title.split(" ").slice(4, -1).join(" ") : 
                      blog.ar_title.split(" ").slice(4, -1).join(" ")
                    }
                  </h1>

                  <p className="page-header__text">{ moment(blog.created_at).format('MMMM Do YYYY') }</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md">
        <div className="container">
          <div
            className="ratio ratio-16:9 rounded-8 bg-image js-lazy"
            style={{ backgroundImage: `url(${blogsUploadUrl + blog.image})` }}
            data-bg="img/blog/blog-single/images.png"
          ></div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="blogSection">
            <div className="blogCard">
              <div className="row justify-center">
                <div className="col-xl-8 col-lg-9 col-md-11">
                  <div className="blogCard__content">
                    <Overview blog={blog} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
