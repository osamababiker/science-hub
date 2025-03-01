import { Link } from "@/src/i18n/routing";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

export default function FindLearningPath() {

  const t = useTranslations('LearningPathThree');
  const locale = useLocale(); 

  return (
    <section className="cta -type-1 layout-pt-lg layout-pb-lg">
      <div data-parallax="0.6" className="cta__bg">
        <div
          data-parallax-target
          className="bg-image js-lazy"
          style={{ backgroundImage: "url(/assets/img/general/5.jpeg)" }}
        ></div> 
        {/* <video
            autoPlay
            loop
            muted
            playsInline
            className="bg-video"
          >
            <source src="/assets/video/science_hub.mp4" type="video/mp4" />
          </video> */}
      </div>

      <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <h2 className="text-45 md:text-30 text-white">
                {t("title")}
              </h2>
            </div>

            <div className="w-100"></div>

            <div className="col-lg-4 col-md-8">
              <p className="text-white mt-15">
              {t("bio")}
              </p>
            </div>

            <div className="w-100"></div>

            <div className="col-auto">
              <Link
                href="/courses-list"
                className="button -md -purple-1 -rounded text-white text-white mt-45 md:mt-20"
              >
                {t("btn")}
              </Link>
            </div>
          </div>
      </div>
    </section>
  );
}
