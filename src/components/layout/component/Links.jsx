import { links, arLinks } from "../../../../data/links";
import { Link } from "@/src/i18n/routing";
import React from "react";
import { useTranslations, useLocale } from "next-intl";


export default function Links({ allClasses }) {

  const locale = useLocale();

  const footerLinks = locale == "en" ? links : arLinks;

  return (
    <>
      {footerLinks.map((link, index) => (
        <Link
          className={`${allClasses ? allClasses : ""}`}
          key={index}
          href={link.href}
        >
          {link.label}
        </Link>
      ))} 
    </>
  );
}
