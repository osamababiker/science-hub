import Link from "next/link";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

export default function PageLinks() {

  const t = useTranslations("breadcrumbs");
  const locale = useLocale();

  return (
    <section className="breadcrumbs">
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <div className="breadcrumbs__content">
              <div className="breadcrumbs__item">
                {/* <Link href="/dashboard">{t("homePage")}</Link> */}
              </div>
              {/* <div
                className="breadcrumbs__item">
                <Link href={page.url}> { page.name } </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
