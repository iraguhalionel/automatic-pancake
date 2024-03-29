import React, {useRef, useEffect, useState} from "react";
import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';

import PreLoader from "@/components/PreLoader";
import Emblem from "@/components/emblem";
import footerImage from "@/images/footerImage.png"
import Image from "next/image";
import strategyPic from "@/images/services/Strategy.png"
import DigitalMarketing from "@/images/services/DigitalMarketing.png"
import Branding from "@/images/services/Branding.png"
import Event from "@/images/services/Event.png"
import Production from "@/images/services/Production.png"
import NavigationMenu from "@/components/MainMenuIndex";
import {Facebook, Imigongo, Instagram, Linkedin, Location, Mail, Phone, Twitter, Youtube} from "@/images/Icons";
import Link from "next/link";
import DarkLogo from "@/components/darkLogo";

import VideoModal from '@/components/VideoModal';
import {FadeIn, FadeInStagger} from "@/components/FadeIn";
import dynamic from "next/dynamic";
import MainMenu from "@/components/MainMenuIndex";

SwiperCore.use([Navigation, Autoplay, Pagination]);

const DynamicVideoPlayer = dynamic(() => import("@/components/VideoHomepagePlayer"), {
  ssr: false, // Avoid server-side rendering
});



const videos = [
  {
    title: 'EGF Ambuka Competition TVC',
    category: 'Conceptualizing, script writing, casting, sound production, video production and editing, animation',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/c_scale,w_1280/v1703150629/nfmnzl3jzyoobw7m0rzt.mp4",
  },
  {
    title: 'The ‘Icyivugo’ Commercial, 2023',
    category: 'Conceptualizing, script writing, casting, sound production, video production and editing, animation',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/c_scale,w_1280/v1692625893/Ndi_Rwema_TVC_cnftxc.mp4",
  },
  {
    title: 'Sanlam Repositioning Ceremony, 2020',
    category: 'Planned,coordinated,and curated the Sanlam repositioning campaign',
    thumbnailUrl: 'https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389331/10_izghgy.jpg',
    imageUrl: [
      "https://res.cloudinary.com/do91rofg8/image/upload/c_thumb,w_1080,h_720,g_auto/v1693389331/10_izghgy.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_thumb,w_1080,h_720,g_auto/v1693389331/11_mrdlxd.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_thumb,w_1080,h_720,g_auto/v1693389331/8_qczydt.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_thumb,w_1080,h_720,g_auto/v1693389331/9_izyohr.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_thumb,w_1080,h_720,g_auto/v1693389330/7_ihkrwu.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_thumb,w_1080,h_720,g_auto/v1693389329/6_fkja8g.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_thumb,w_1080,h_720,g_auto/v1693389329/1_aygx9d.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_thumb,w_1080,h_720,g_auto/v1693389329/5_fvvsyq.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_thumb,w_1080,h_720,g_auto/v1693389329/4_o6liau.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_thumb,w_1080,h_720,g_auto/v1693389329/2_ulvgfq.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_thumb,w_1080,h_720,g_auto/v1693389329/3_ndb2jj.jpg",
    ]
  },
  {
    title: 'Sanlam Rebranding Staff Event 2020',
    category: 'Planned,coordinated,and curated the Sanlam repositioning campaign',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/c_scale,w_1280/v1692885856/1._sanlam_launch_staff_event_highlights_360p_k4ylhz.mp4",
  },
  {
    title: 'Sanlam Rebranding Public Event 2020',
    category: 'Planned,coordinated,and curated the Sanlam repositioning campaign',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/do91rofg8/video/upload/c_scale,w_1280/v1693389966/2._Sanlam_Launch_Public_Event_Highlights-2_wvbru6.mp4",
  },
  {
    title: 'Irembo corporate gifts, 2021',
    category: 'Conceptualizing, branding, sourcing',
    thumbnailUrl: 'https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389094/1_bfevdv.jpg',
    imageUrl: [
      "https://res.cloudinary.com/do91rofg8/image/upload/c_thumb,w_1080,h_720,g_auto/v1693389094/1_bfevdv.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_thumb,w_1080,h_720,g_auto/v1693389095/5_ls3fht.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_thumb,w_1080,h_720,g_auto/v1693389095/4_peuopi.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_thumb,w_1080,h_720,g_auto/v1693389095/6_heqqsg.jpg"
    ]
  },
  {
    title: 'The Hatana Teaser Commercial, 2022',
    category: 'Conceptualizing, casting, script writing, sound production, video production and editing, animation',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/do91rofg8/video/upload/c_scale,w_1280/v1693389952/hatana_teaser_video_without_coming_soon_540p_vynnz3.mp4",
  },
  {
    title: 'The ‘Shoulder Tap’ Commercial, 2022',
    category: 'Conceptualizing, casting, script writing, sound production, video production and editing, animation',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/do91rofg8/video/upload/c_scale,w_1280/v1700570209/hatana_brd_commercial_v5_720p_bd9tip.mp4",
  },
  /*{
    title: 'The Wavumbuzi Award Ceremony, 2021',
    category: 'Conceptualizing, live streaming, video production, animation production',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/v1692625893/Ndi_Rwema_TVC_cnftxc.mp4",
  },
  {
    title: 'Sanlam Repositioning Ceremony, 2020',
    category: 'Planned,coordinated,and curated the Sanlam repositioning campaign',
    thumbnailUrl: 'https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389331/10_izghgy.jpg',
    imageUrl: [
      "https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389331/10_izghgy.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389331/11_mrdlxd.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389331/8_qczydt.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389331/9_izyohr.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389330/7_ihkrwu.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389329/6_fkja8g.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389329/1_aygx9d.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389329/5_fvvsyq.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389329/4_o6liau.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389329/2_ulvgfq.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389329/3_ndb2jj.jpg",
    ]
  },*/
  {
    title: 'Inyange chocolate milk, 2019',
    category: 'Conceptualizing, casting, script writing,sound production,video production and editing, animation',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/c_scale,w_1280/v1692885854/inyange_chocolate_milk_v7_en_720p_mrlmc9.mp4",
  },
  // Add more video objects...
];

const videosMobile = [
  {
    title: 'EGF Ambuka Competition TVC',
    category: 'Conceptualizing, script writing, casting, sound production, video production and editing, animation',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/c_fill,h_720,w_480/v1703150629/nfmnzl3jzyoobw7m0rzt.mp4",
  },
  {
    title: 'The ‘Icyivugo’ Commercial, 2023',
    category: 'Conceptualizing, script writing, casting, sound production, video production and editing, animation',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/c_fill,h_720,w_480/v1692625893/Ndi_Rwema_TVC_cnftxc.mp4",
  },
  {
    title: 'Sanlam Repositioning Ceremony, 2020',
    category: 'Planned,coordinated,and curated the Sanlam repositioning campaign',
    thumbnailUrl: 'https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389331/10_izghgy.jpg',
    imageUrl: [
      "https://res.cloudinary.com/do91rofg8/image/upload/c_fill,h_720,w_480/10_izghgy.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_fill,h_720,w_480/11_mrdlxd.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_fill,h_720,w_480/8_qczydt.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_fill,h_720,w_480/9_izyohr.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_fill,h_720,w_480/7_ihkrwu.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_fill,h_720,w_480/6_fkja8g.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_fill,h_720,w_480/1_aygx9d.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_fill,h_720,w_480/5_fvvsyq.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_fill,h_720,w_480/4_o6liau.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_fill,h_720,w_480/2_ulvgfq.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_fill,h_720,w_480/3_ndb2jj.jpg",
    ]
  },
  {
    title: 'Sanlam Rebranding Staff Event 2020',
    category: 'Planned,coordinated,and curated the Sanlam repositioning campaign',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/c_fill,h_720,w_480/v1692885856/1._sanlam_launch_staff_event_highlights_360p_k4ylhz.mp4",
  },
  {
    title: 'Sanlam Rebranding Public Event 2020',
    category: 'Planned,coordinated,and curated the Sanlam repositioning campaign',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/do91rofg8/video/upload/c_fill,h_720,w_480/v1693389966/2._Sanlam_Launch_Public_Event_Highlights-2_wvbru6.mp4",
  },
  {
    title: 'Irembo corporate gifts, 2021',
    category: 'Conceptualizing, branding, sourcing',
    thumbnailUrl: 'https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389094/1_bfevdv.jpg',
    imageUrl: [
      "https://res.cloudinary.com/do91rofg8/image/upload/c_fill,h_720,w_480/v1693389094/1_bfevdv.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_fill,h_720,w_480/v1693389095/5_ls3fht.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_fill,h_720,w_480/v1693389095/4_peuopi.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload/c_fill,h_720,w_480/v1693389095/6_heqqsg.jpg"
    ]
  },
  {
    title: 'The Hatana Teaser Commercial, 2022',
    category: 'Conceptualizing, casting, script writing, sound production, video production and editing, animation',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/do91rofg8/video/upload/c_fill,h_720,w_480/v1693389952/hatana_teaser_video_without_coming_soon_540p_vynnz3.mp4",
  },
  {
    title: 'The ‘Shoulder Tap’ Commercial, 2022',
    category: 'Conceptualizing, casting, script writing, sound production, video production and editing, animation',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/do91rofg8/video/upload/c_fill,h_720,w_480/v1700570209/hatana_brd_commercial_v5_720p_bd9tip.mp4",
  },
  /*{
    title: 'The Wavumbuzi Award Ceremony, 2021',
    category: 'Conceptualizing, live streaming, video production, animation production',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/v1692625893/Ndi_Rwema_TVC_cnftxc.mp4",
  },
  {
    title: 'Sanlam Repositioning Ceremony, 2020',
    category: 'Planned,coordinated,and curated the Sanlam repositioning campaign',
    thumbnailUrl: 'https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389331/10_izghgy.jpg',
    imageUrl: [
      "https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389331/10_izghgy.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389331/11_mrdlxd.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389331/8_qczydt.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389331/9_izyohr.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389330/7_ihkrwu.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389329/6_fkja8g.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389329/1_aygx9d.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389329/5_fvvsyq.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389329/4_o6liau.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389329/2_ulvgfq.jpg",
      "https://res.cloudinary.com/do91rofg8/image/upload//c_thumb,w_1080,h_720,g_auto/v1693389329/3_ndb2jj.jpg",
    ]
  },*/
  {
    title: 'Inyange chocolate milk, 2019',
    category: 'Conceptualizing, casting, script writing,sound production,video production and editing, animation',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/c_fill,h_720,w_480/v1692885854/inyange_chocolate_milk_v7_en_720p_mrlmc9.mp4",
  },
  // Add more video objects...
];

function Creatively() {
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
        <MainMenu className="lg:block hidden" />
      <div className="section bg-black isolate">
        <div>
          <main>
              <div className="hidden lg:block">
                {videos.map((video, index) => (
                  <section className="snap-start bg-black text-white" key={index} ref={paragraph2}>
                    <div className="min-h-screen">
                      <div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          key={video.title}
                        >
                          <FadeInStagger>

                            <FadeIn>
                              <div className="group relative overflow-hidden bg-neutral-100">
                                <div
                                  className="cursor-none relative"
                                  onClick={() => openVideoModal(video)}
                                >
                                  { video.imageUrl ? (
                                    <Swiper
                                      spaceBetween={30}
                                      centeredSlides={true}
                                      autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                      }}
                                      pagination={{
                                        clickable: true,
                                        renderBullet: function (index, className) {
                                          return ''; // Return an empty string to hide the pagination dots
                                        },
                                      }}
                                      navigation={false}
                                      modules={[Autoplay, Pagination, Navigation]}
                                      className="mySwiper"
                                    >
                                      {video.imageUrl.map((image, index) => (
                                        <SwiperSlide key={index}>
                                          <img
                                            src={image}
                                            width="100%"
                                            height="100%"
                                            alt={image}
                                            className="object-cover transition duration-500 motion-safe:group-hover:scale-105 h-screen"
                                          />
                                        </SwiperSlide>
                                      ))}

                                    </Swiper>
                                  ) : (showVideo && video.videoUrl) &&
                                    <DynamicVideoPlayer
                                      url={video.videoUrl}
                                      width="100%"
                                      height="100%"
                                      alt={video.title}
                                      className="object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105 h-screen"
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
              </div>
              <div className="lg:hidden block">
                {videosMobile.map((video, index) => (
                  <section className="snap-start bg-black text-white" key={index} ref={paragraph2}>
                    <div className="min-h-screen">
                      <div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          key={video.title}
                        >
                          <FadeInStagger>

                            <FadeIn>
                              <div className="group relative overflow-hidden bg-neutral-100">
                                <div
                                  className="cursor-none relative"
                                  onClick={() => openVideoModal(video)}
                                >
                                  { video.imageUrl ? (
                                    <Swiper
                                      spaceBetween={30}
                                      centeredSlides={true}
                                      autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                      }}
                                      pagination={{
                                        clickable: true,
                                        renderBullet: function (index, className) {
                                          return ''; // Return an empty string to hide the pagination dots
                                        },
                                      }}
                                      navigation={false}
                                      modules={[Autoplay, Pagination, Navigation]}
                                      className="mySwiper"
                                    >
                                      {video.imageUrl.map((image, index) => (
                                        <SwiperSlide key={index}>
                                          <img
                                            src={image}
                                            width="100%"
                                            height="100%"
                                            alt={image}
                                            className="object-cover transition duration-500 motion-safe:group-hover:scale-105 h-screen"
                                          />
                                        </SwiperSlide>
                                      ))}

                                    </Swiper>
                                  ) : (showVideo && video.videoUrl) &&
                                    <DynamicVideoPlayer
                                      url={video.videoUrl}
                                      width="100%"
                                      height="100%"
                                      alt={video.title}
                                      className="object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105 h-screen"
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
            </div>
              {selectedVideo && (
                  <VideoModal video={selectedVideo} onClose={closeVideoModal} />
              )}

          </main>
        </div>
      </div>

    </>
  );
}

export default Creatively;
