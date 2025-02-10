

import { socialMediaLinks } from "@/data/socialLinks";
import React from "react";
import Image from "next/image";

export default function Socials({ componentsClass, textSize }) {
  return (
    <>
      {socialMediaLinks.map((link, index) => (
        link.iconClassName ?
        <a 
          key={index}
          className={componentsClass ? componentsClass : "p-4"}
          href={link.href}
        >
          <i className={`${link.iconClassName} ${textSize}`}></i>
        </a>
        : 
        <a 
          key={index}
          className={componentsClass ? componentsClass : "p-4"}
          href={link.href}
        >
          <Image
            width={15}
            height={15}
            className="pb-2"
            src="/assets/img/general/tiktok.svg"
            alt="image"
          />
        </a>
        
      ))}
    </>
  );
}
