import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { enTerms, arTerms } from "@/data/terms";

export default function Terms() {

  const t = useTranslations("Terms");
  const locale = useLocale();

  const terms = locale == "en" ? enTerms : arTerms;

  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">{t('title')}</h1> 
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
          <div className="row justify-center">
            {terms.map((elm) => (
              <div className="col-xl-8 col-lg-9 col-md-11 mt-4">
                <h5>{elm.title}</h5>
                <p className="mt-30">
                  {elm.bio}
                </p>
              </div>
            ))}
            
          </div>
        </div>
      </section>
    </>
  );
}
