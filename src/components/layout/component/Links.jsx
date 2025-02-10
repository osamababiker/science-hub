import { arLinks } from "../../../../data/links";
import { Link } from "@/src/i18n/routing";
import React from "react";

export default function Links({ allClasses }) {
  return (
    <>
      {arLinks.map((link, index) => (
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
