import React, {useRef, useEffect, useState} from "react";
import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion"

import PreLoader from "@/components/PreLoader";
import Emblem from "@/components/emblem";
import footerImage from "@/images/footerImage.png"
import Image from "next/image";
import strategyPic from "@/images/services/Strategy.png"
import DigitalMarketing from "@/images/services/DigitalMarketing.png"
import Branding from "@/images/services/Branding.png"
import Event from "@/images/services/Event.png"
import Production from "@/images/services/Production.png"
import Navigation from "@/components/NavigationIndex";
import {Facebook, Imigongo, Instagram, Linkedin, Location, Mail, Phone, Twitter, Youtube} from "@/images/Icons";
import Link from "next/link";
import DarkLogo from "@/components/darkLogo";
import Hatana from "./../images/Hatana_Teaser_Video_without_coming_soon.mp4"
import PortfolioPage from "@/components/PortfolioPage";

function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const trigger = useRef(null);
  const paragraph1 = useRef(null);
  const paragraph2 = useRef(null);
  const paragraph3 = useRef(null);

  useEffect(() => {
    const elementToModify = document.querySelector('.navbar');

    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
      scroller: ".section"
    });

    gsap.to(".orange h3", {
      scrollTrigger: ".orange",
      ease: "Power3.easeInOut",
    });

    gsap.to(".red", {
      scrollTrigger: {
        trigger: ".red",
        toggleActions: "restart pause reverse pause",
        toggleClass: {
          targets: elementToModify,
          className: 'has-scrolled'
        },
        markers: false
      },
      duration: 1,
      ease: "none"
    });

  }, []);
  return (
    <>
      <PreLoader />
      <div className="section bg-white isolate">
        <Navigation className="lg:hidden sm:bg-white text-black" />
        <Navigation className="navbar lg:block hidden" />
        <div>
          <main>
            <section className="bg-white">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative py-24">
                <div className="mx-auto max-w-2xl lg:max-w-7xl lg:px-12" ref={paragraph2}>
                  <div className="panel flex lg:flex-row flex-col items-center lg:justify-between gap-y-8">
                    <div>
                      <DarkLogo className="w-32" />
                    </div>
                    <div className="">
                      <h3 className="-mt-8 text-black font-extralight lg:w-[376px]">
                      <span className="">
                        A 360<sup>o</sup> Communication, Digital marketing, Events, and branding Agency. We may define
ourselves as all of the above. But we prefer to be strategists.
                      </span>
                      </h3>
                    </div>
                  </div>
                </div>

              </div>
            </section>
            {/*<section className="bg-black text-white">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:relative">
                <div className="mx-auto max-w-2xl lg:max-w-6xl lg:px-12" ref={paragraph2}>
                  <div className="panel red grid lg:grid-cols-3 grid-cols-1 gap-x-8 items-center lg:justify-evenly lg:pt-32 py-16 gap-8">
                    <div className="lg:relative text-center">
                      <div className="w-64">
                        <Image
                          placeholder="blur"
                          src={strategyPic}
                          className="drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)]"
                          quality={50}
                          loading = 'lazy'
                         alt="strategy" />
                      </div>
                      <Link href="#" className="font-light text-md group-hover:text-orange">Strategy</Link>
                    </div>
                    <div className="group relative text-center">
                      <div className=" w-64">
                        <Image
                          alt="Event Management"
                          src={Event}
                          className="drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)]  group-hover:drop-shadow-[0_35px_35px_rgba(255,96,0,1)]"
                        />
                      </div>
                      <div className="lg:min-w-[32rem] lg:absolute flex flex-col z-50 lg:group-hover:border border lg:border-0 border-orange lg:group-hover:border-orange lg:group-hover:rounded rounded lg:absolute lg:group-hover:bg-orange/[.15] lg:bg-transparent bg-orange/[.15] py-2 px-4 lg:-right-16">
                        <Link href="#" className="font-light text-md group-hover:text-orange">Event Management</Link>
                        <span className="lg:opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 text-sm flex flex-col gap-4 text-left mt-4">
                          <span>I turn your event ideas into jaw-dropping reality! From planning to execution, I ensure every detail is perfect for my clients. My mission is to surpass
                            expectations and create long-lasting memories.</span>
                          <span>
                            So why settle for a mediocre event when you can have a spectacular one? With my creative expertise and meticulous attention to detail, sit back, relax and enjoy the ride knowing you&apos;re in good hands. Allow me to make your event dreams come true!
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="rlg:elative text-center">
                      <div className="w-64">
                        <Image
                          alt="Production"
                          src={Production}
                          className="drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)]"
                        />
                      </div>
                      <Link href="#" className="font-light text-md group-hover:text-orange">Production</Link>
                    </div>
                    <div  className="lg:col-span-3 col-span-1 lg:flex lg:justify-around lg:mx-32">
                      <div className="relative text-center">
                        <div className="w-64">
                          <Image
                            alt="Branding"
                            src={Branding}
                            className="drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)] hover:drop-shadow-[0_35px_35px_rgba(255,96,0,1)]"
                          />
                        </div>
                        <Link href="#" className="font-light text-md group-hover:text-orange">Branding</Link>
                      </div>
                      <div className="relative text-center">
                        <div className="w-64">
                          <Image
                            alt="Digital Marketing"
                            src={DigitalMarketing}
                            className="shadow-inner drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)]"
                          />
                        </div>
                        <Link href="#" className="font-light text-md group-hover:text-orange">Digital Marketing</Link>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </section>*/}

            <section className="snap-start bg-black text-white" ref={paragraph2}><PortfolioPage /></section>
            <section className="snap-start bg-black text-white">
              {/*<video autoPlay muted className="bg-cover w-full">
                <source src={Hatana} type="video/mp4" />
                Your browser does not support the video tag.
              </video>*/}

              <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div className="flex gap-8 mx-8 items-center justify-between py-12">
                  <div className="flex items-center space-x-4">
                    <Location />
                    <a href="https://goo.gl/maps/9ze14VFLyk6tWzCZ9" className="font-light text-sm underline">Irembo House, 72 KN 5 Rd,<br />
Plot #588 Remera-Kisimenti</a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone />
                    <span className="font-light text-sm flex gap-2"><a href="tel:+250 791 570 011">+250 791 570 011</a>/<a href="tel:+250 788 319 228">+250 788 319 228</a></span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail />
                    <a href="mailto:ikaze@yato.rw" className="font-light text-sm underline">ikaze@yato.rw</a>
                  </div>
                  <div className="relative">
                    <div className="flex space-x-6 items-center">
                      <Link className="group" href="#">
                        <Linkedin />
                      </Link>
                      <Link className="group" href="#">
                        <Twitter />
                      </Link>
                      <Link className="group" href="#">
                        <Instagram />
                      </Link>
                      <Link className="group" href="#">
                        <Youtube />
                      </Link>
                      <Link className="group" href="#">
                        <Facebook />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Imigongo
                className="bg-cover w-screen h-[24px]  bg-black opacity-20"
              />

            </section>

          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
