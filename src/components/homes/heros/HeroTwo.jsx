"use client";
import { useEffect, useState } from "react";
import React from "react";
import { useLocale } from "next-intl";

export default function HeroTwo() {
  const locale = useLocale();
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark that we're now on the client
    setIsClient(true);

    // Check for mobile device
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Set initial value
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up event listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []); 

  // Only determine video source on client
  const videoSrc = isClient ? (
    isMobile 
      ? "assets/video/science_hub english_mobile.mp4"
      : locale === "en" 
        ? "assets/video/science_hub_website_en.mp4" 
        : "assets/video/science_hub_website.mp4"
  ) : "";

  return (
    <section className="mainSlider -type-1 js-mainSlider customizedHeroBackground">
      <div className="swiper-wrapper-two">
        <div className="swiper-slide hightFull">
          <div className="mainSlider__bg">
            <div className="bg-image js-lazy customedBg">
              {isClient && (
                <video 
                  autoPlay 
                  loop
                  muted
                  playsInline
                  className="bg-video"
                >
                  <source src={videoSrc} type="video/mp4" /> 
                </video>
              )}
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
}