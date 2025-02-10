import React from "react";
import Image from "next/image";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";
export default function About() {

  const t = useTranslations("AboutPage");

  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">{t("title")}</h1>
                </div>

                <div>
                  <p className="page-header__text">
                  {t("bio")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-50 justify-between items-center">
            <div className="col-lg-6 pr-50 sm:pr-15">
              <div className="composition -type-8">
                <div className="-el-1">
                  <Image
                    width={300}
                    height={400}
                    src="/assets/img/general/1.jpeg"
                    alt="image"
                  />
                </div>
                <div className="-el-2">
                  <Image
                    width={200}
                    height={200}
                    src="/assets/img/general/2.jpeg"
                    alt="image"
                  />
                </div>
                <div className="-el-3">
                  <Image
                    width={255}
                    height={250}
                    src="/assets/img/general/3.jpeg"
                    alt="image"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <h2 className="text-30 lh-16">
              {t("sub_title")}
              </h2>
              <p className="text-dark-1 mt-30">
              {t("sub_bio")}
              </p>
              <div className="d-inline-block">
                <Link
                  href="/signup"
                  className="button -md -purple-1 text-white mt-30"
                >
                  {t("btn")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
