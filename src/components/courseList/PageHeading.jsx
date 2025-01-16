import { useTranslations } from "next-intl";
import React from "react";

export default function PageHeading() {

  const t = useTranslations("CoursesPage");

  return (
    <section className="page-header -type-1">
      <div className="container">
        <div className="page-header__content">
          <div className="row">
            <div className="col-auto">
              <div>
                <h1 className="page-header__title">{t('title')}</h1>
              </div>

              <div>
                <p className="page-header__text">
                {t('bio')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
