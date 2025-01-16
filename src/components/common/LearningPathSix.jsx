import React from "react";

import {useTranslations} from 'next-intl';

export default function LearningPathSix() {

  const t = useTranslations('LearningPath');

  const learningPathSix = [
    {
      id: 1,
      iconClass: "icon icon-rating-2 text-dark-1",
      title: t('title_one'),
      description: t('description_one'),
    },
    {
      id: 2,
      iconClass: "icon icon-online-learning-3 text-dark-1",
      title: t('title_two'),
      description: t('description_two'),
    },
    {
      id: 3,
      iconClass: "icon icon-online-learning-2 text-dark-1",
      title: t('title_three'),
      description: t('description_three'),
    },
    {
      id: 4,
      iconClass: "icon icon-access text-dark-1",
      title: t('title_four'),
      description: t('description_four'),
    },
  ];

  return (
    <section className="layout-pt-md layout-pb-md">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title "> {t('title')} </h2>

              <p className="sectionTitle__text ">
                {t('bio')}
              </p>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 justify-between pt-60 lg:pt-50">
          {learningPathSix.map((elm, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className="coursesCard -type-3 px-0 text-center">
                <div className="coursesCard__icon bg-white shadow-2">
                  <i className={elm.iconClass}></i>
                </div>

                <div className="coursesCard__content mt-30">
                  <h5 className="coursesCard__title text-18 lh-1 fw-500">
                    {elm.title}
                  </h5>
                  <p className="coursesCard__text text-14 mt-10">
                    {elm.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
