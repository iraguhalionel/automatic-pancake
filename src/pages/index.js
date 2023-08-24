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

import VideoModal from '@/components/VideoModal';
import {FadeIn, FadeInStagger} from "@/components/FadeIn";
import dynamic from "next/dynamic";

const DynamicVideoPlayer = dynamic(() => import("../components/VideoHomepagePlayer"), {
  ssr: false, // Avoid server-side rendering
});

const videos = [
  {
    title: 'The ‘Kivugo’ Commercial, 2023',
    category: 'Conceptualizing, script writing, casting, sound production, video production and editing, animation',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/v1692625893/Ndi_Rwema_TVC_cnftxc.mp4",
  },
  {
    title: 'The ‘Shoulder Tap’ Commercial, 2022',
    category: 'Conceptualizing, casting, script writing, sound production, video production and editing, animation',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/c_scale,w_1280/v1692626422/Hatana_Teaser_Video_without_coming_soon_ljcyim.mp4",
  },
  {
    title: 'The Hatana Teaser Commercial, 2022',
    category: 'Conceptualizing, casting, script writing, sound production, video production and editing, animation',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/c_scale,w_1280/v1692626422/Hatana_Teaser_Video_without_coming_soon_ljcyim.mp4",
  },
  {
    title: 'The Wavumbuzi Award Ceremony, 2021',
    category: 'Conceptualizing, live streaming, video production, animation production',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/v1692625893/Ndi_Rwema_TVC_cnftxc.mp4",
  },
  {
    title: 'Sanlam Repositioning Ceremony, 2020',
    category: 'Planned,coordinated,and curated the Sanlam repositioning campaign',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/v1692625893/Ndi_Rwema_TVC_cnftxc.mp4",
  },
  // Add more video objects...
];

function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const [selectedVideo, setSelectedVideo] = useState(null);

  const [showVideo, setShowVideo] = useState(false);

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
    setShowVideo(true);
  }, []);

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };
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
            {videos.map((video, index) => (
              <section className="min-h-screen snap-start bg-black text-white" key={index} ref={paragraph2}>
                <div className="red flex flex-col justify-center items-center p-8">
                  <div className="grid grid-cols-1 gap-4">
                      <motion.div
                        className="flex flex-col items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        key={video.title}
                      >
                        <FadeInStagger>

                          <FadeIn>
                            <div className="group relative overflow-hidden bg-neutral-100">
                              <div
                                className="cursor-pointer relative"
                                onClick={() => openVideoModal(video)}
                              >
                                {showVideo &&
                                  <DynamicVideoPlayer
                                    url={video.videoUrl}
                                    width="100%"
                                    height="100%"
                                    alt={video.title}
                                    className="h-[38rem] w-screen object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                                  />}
                                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                                  <p className="font-display text-xl/8 font-semibold tracking-wide text-white">
                                    {video.title}
                                  </p>
                                  <p className="mt-2 text-gray-200">
                                    {video.category}
                                  </p>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </FadeIn>
                        </FadeInStagger>
                      </motion.div>

                  </div>
                </div>
              </section>
            ))}
            {selectedVideo && (
              <VideoModal video={selectedVideo} onClose={closeVideoModal} />
            )}

            {/*<section className="snap-start bg-black text-white"><PortfolioPage ref={paragraph2} /></section>*/}
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
