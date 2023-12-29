import {useId, useState} from 'react'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Container } from '@/components/Container'
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import {useRouter} from "next/router";
import MainMenu from "@/components/MainMenu";
import {Facebook, Instagram, Linkedin, Location, Mail, Phone, Twitter, Youtube} from "@/images/Icons";


function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

function We() {

  const paragraphRefs = useRef([]);
  const yatologo = useRef(null);
  const buttonsAnim = useRef(null);
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let openRef = useRef()
  let closeRef = useRef()
  let navRef = useRef()
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    gsap.registerPlugin(window);

    const paragraphs = paragraphRefs.current;
    const yatoAnimation = yatologo.current;
    const buttonsAnimations = buttonsAnim.current;

    gsap.fromTo(
      paragraphs,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', stagger: 0.5 }
    );
    gsap.fromTo(
      yatoAnimation,
      { opacity: 0,
        y: 50},{ opacity: 1,
        y: 50,
        duration: 1,
        delay: 5 }
    );
    gsap.fromTo(
      buttonsAnimations,
      { opacity: 0,
        y: 100},{ opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 1, delay:3.5 }
    );

    function onClick(event) {
      if (event.target.closest('a')?.href === window.location.href) {
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }

}, []);

  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
    <section className="bg-white">

      <MainMenu />
      <div  className="mx-auto px-4 sm:px-6 lg:max-w-5xl">
        <div className="py-8">
          <div className="mt-8 text-dark flex flex-col gap-3">
              <p className="uppercase font-bold">About Us</p>
            <p className="mb-8 fadeOnScroll text-about text-justify">
                We searched and discovered that businesses are looking for unique ways to better their brands
                from creative communicators who wear multiple hats; branding, events, and strategy.
</p><p className="mb-8 text-justify fadeOnScroll text-about">
                That is why we are here, to provide our clients with timely delivery and guarantee exceptional quality.
                Our journey is organic and innovative, with each new day, we are ready to face and embrace
                new challenges, ensuring that our unique and creative abilities continue to grow.
<br />            </p>
              <p className="uppercase  font-bold">YATO is our name. Creatively yours, our motto!</p>

          </div>
          <div className="py-8">
              {/*<div className="flex justify-center ">
                  <button className="uppercase rounded-full px-4 py-6 text-sm m-4 border border-black text-black">
                      <span className="fade-in">Yato</span>
                  </button>
              </div>*/}
              <div className="flex flex-row gap-x-8 font-bold text-sm justify-center lg:pt-8 mt-4 text-black">
                  <Link href="#" >Company Profile</Link>
                  <Link href="#" >Brand Identity</Link>
              </div>
          </div>
        </div>
      </div>
    </section>
  <section className="snap-start bg-black text-white">

    <div className="mx-auto max-w-2xl lg:max-w-7xl">
      <div className="flex gap-8 mx-8 items-center justify-between py-6 grid-cols-2 lg:grid-cols-none">
        <div className="flex items-center space-x-4">
          <Location />
          <a href="https://goo.gl/maps/9ze14VFLyk6tWzCZ9" className="font-light text-sm">Irembo House, 72 KN 5 Rd,<br />
            Plot #588 Remera-Kisimenti</a>
        </div>
        <div className="flex items-center space-x-4">
          <Phone />
          <span className="font-light text-sm flex gap-2"><a href="tel:+250788317528">+250 788 317 528</a>/<a href="tel:+250788319228">+250 788 319 228</a></span>
        </div>
        <div className="flex items-center space-x-4">
          <Mail />
          <div className="flex flex-col">
            <a href="mailto:ikaze@yato.rw" className="font-light text-sm">ikaze@yato.rw </a>
            <Link className="font-light text-sm" href="/contact-us" >Fill the form</Link>
          </div>
        </div>
        <div className="relative">
          <div className="flex space-x-6 items-center">
            <Link className="group" target="_blank" href="https://www.linkedin.com/in/yato-part-of-organic-inc-18179326a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <Linkedin />
            </Link>
            <Link className="group" target="_blank" href="https://x.com/Yato_rw?t=QQ1tkFA12QVwztd4qFgRsg&s=09">
              <Twitter />
            </Link>
            <Link className="group" target="_blank" href="https://instagram.com/yato_rw">
              <Instagram />
            </Link>
            <Link className="group" target="_blank" href="https://www.facebook.com/profile.php?id=100075556000580">
              <Facebook />
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/*<Imigongo
                className="bg-cover w-screen h-[24px]  bg-black opacity-20"
              />*/}

  </section>
  </>
  );
}

export default We;
