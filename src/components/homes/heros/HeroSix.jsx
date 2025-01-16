"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ModalVideo from "@/src/components/common/ModalVideo";
import gsap from "gsap";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
 
export default function HeroSix() {

  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('HomeHero');
  const locale = useLocale();


  useEffect(() => {
    const parallaxIt = () => {
      const target = document.querySelectorAll(".js-mouse-move-container");

      target.forEach((container) => {
        const targets = container.querySelectorAll(".js-mouse-move");

        targets.forEach((el) => {
          const movement = el.getAttribute("data-move");

          document.addEventListener("mousemove", (e) => {
            const relX = e.pageX - container.offsetLeft;
            const relY = e.pageY - container.offsetTop;

            gsap.to(el, {
              x:
                ((relX - container.offsetWidth / 2) / container.offsetWidth) *
                Number(movement),
              y:
                ((relY - container.offsetHeight / 2) / container.offsetHeight) *
                Number(movement),
              duration: 0.2,
            });
          });
        });
      });
    };

    parallaxIt();
  }, []);


  const featureSix = [
    {
      id: 1,
      imageSrc: "/assets/img/home-6/hero/icons/1.svg",
      text: t('feature_one'),
    },
    {
      id: 2,
      imageSrc: "/assets/img/home-6/hero/icons/2.svg",
      text: t('feature_two'),
    },
    {
      id: 3,
      imageSrc: "/assets/img/home-6/hero/icons/3.svg",
      text: t('feature_three'),
    },
  ];

  return (
    <>
      <section className="masthead -type-5">
        <div className="masthead__bg pr-60 md:pr-0" style={{ zIndex: -1 }}>
          <Image
            width={1200}
            height={1200}
            style={{ width: "100%", height: "100%" }}
            src="/assets/img/home-6/hero/bg.png"
            alt="image"
          />
        </div>

        <div className="container">
          <div className="row y-gap-50 items-center justify-between">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="500">
              <div className="masthead__content">
                <h1 className="masthead__title">
                    {t('title_one')} 
                  <span className="text-purple-1 underline"> {t('title_two')} {t('title_three')} </span> 
                  
                </h1>

                <div className="row items-center x-gap-30 y-gap-20 pt-30">
                  <div className="col-auto">
                    <Link
                      href="#"
                      className="button -md -dark-1 -rounded text-white"
                    >
                      {t('call_action_one')}
                    </Link>
                  </div>

                  <div
                    className="col-auto"
                    onClick={() => setIsOpen(true)}
                    cursor
                  >
                    <div
                      style={{ cursor: "pointer" }}
                      className="d-flex items-center js-gallery"
                      data-gallery="gallery1"
                    >
                      <div className="d-flex justify-center items-center size-60 rounded-full border-dark-1-lg">
                        <div className="icon-play text-20 text-dark-1 pl-5"></div>
                      </div>
                      <div className={ locale == 'en' ? 'ml-10' : 'mr-10' }>{t('call_action_two')}</div>
                    </div>
                  </div>
                </div>

                <div className="row x-gap-20 y-gap-20 items-center pt-60 lg:pt-30">
                  {featureSix.map((elm, i) => (
                    <div key={i} className="col-xl-4">
                      <div className="d-flex items-center text-dark-1">
                        <div className="mr-10">
                          <Image
                            width={24}
                            height={24}
                            src={elm.imageSrc}
                            alt="icon"
                          />
                        </div>
                        <div className="fw-500 lh-1 pt-3">{elm.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="750">
              <div className="composition -type-1 js-mouse-move-container">
                <div className="-img-1">
                  <Image
                    width={255}
                    height={250}
                    className="js-mouse-move"
                    data-move="40"
                    src="/assets/img/home-6/hero/2.png"
                    alt="image"
                  />
                </div>
                <div className="-img-2">
                  <Image
                    width={300}
                    height={400}
                    className="js-mouse-move"
                    data-move="40"
                    src="/assets/img/home-6/hero/1.png"
                    alt="image"
                  />
                </div>
                <div className="-img-3">
                  <Image
                    width={200}
                    height={200}
                    className="js-mouse-move"
                    data-move="40"
                    src="/assets/img/home-6/hero/3.png"
                    alt="image"
                  />
                </div>

                <div data-move="30" className="-el-1 md:d-none js-mouse-move">
                  <div className="img-el -w-250 px-20 py-20 d-flex items-center bg-white rounded-8">
                    <div className="size-50 d-flex justify-center items-center bg-red-2 rounded-full">
                      <Image
                        width={24}
                        height={24}
                        src="/assets/img/masthead/1.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="ml-20">
                      <div className="text-orange-1 text-16 fw-500 lh-1">
                      {t('card_one_title')}
                      </div>
                      <div className="mt-3">{t('card_one_bio')}</div>
                    </div>
                  </div>
                </div>

                <div data-move="60" className="-el-2 md:d-none js-mouse-move">
                  <div className="img-el -w-260 px-20 py-20 d-flex items-center bg-white rounded-8">
                    <Image
                      width={70}
                      height={70}
                      src="/assets/img/masthead/4.png"
                      alt="icon"
                    />
                    <div className="ml-20">
                      <div className="text-dark-1 text-16 fw-500 lh-1">
                      {t('card_three_title')}
                      </div>
                      <div className="mt-3">{t('card_three_bio')}</div>
                      <div className="d-flex x-gap-5 mt-3">
                        <div>
                          <div className="icon-star text-yellow-1 text-11"></div>
                        </div>
                        <div>
                          <div className="icon-star text-yellow-1 text-11"></div>
                        </div>
                        <div>
                          <div className="icon-star text-yellow-1 text-11"></div>
                        </div>
                        <div>
                          <div className="icon-star text-yellow-1 text-11"></div>
                        </div>
                        <div>
                          <div className="icon-star text-yellow-1 text-11"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div data-move="30" className="-el-3 md:d-none js-mouse-move">
                  <div className="img-el px-40 py-20 shadow-4 d-flex items-center bg-white rounded-8">
                    <div className="img-el__side">
                      <div className="size-50 d-flex justify-center items-center bg-purple-1 rounded-full">
                        <Image
                          width={20}
                          height={27}
                          src="/assets/img/masthead/2.svg"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="text-purple-1 text-16 fw-500 lh-1">
                      {t('card_two_title')}
                      </div>
                      <div className="mt-3">{t('card_two_bio')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        videoId={"LlCwHnp3kL4"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
