import {useId, useState} from 'react'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Container } from '@/components/Container'
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import {useRouter} from "next/router";
import MainMenu from "@/components/MainMenu";


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
    <section className="bg-white">

      <MainMenu />
      <div  className="mx-auto px-4 sm:px-6 lg:px-32">
        <div className=" my-8">
          <div className="mt-8 text-dark flex flex-col gap-3">
            <p className="text-7xl mb-8 text-justify fadeOnScroll">
                We searched and discovered that businesses are looking for unique ways to better their brands
                from creative communicators who wear multiple hats; branding, events, and strategy.
<br />
                That is why we are here, to provide our clients with timely delivery and guarantee exceptional quality.
                Our journey is organic and innovative, with each new day, we are ready to face and embrace
                new challenges, ensuring that our unique and creative abilities continue to grow.
<br />
                YATO is our name. Creatively yours, our motto!
            </p>
          </div>
          <div className="flex justify-center ">
            <button className="uppercase rounded-full px-4 py-6 text-sm m-4 border border-white" ref={yatologo}>
              <span className="fade-in">Yato</span>
            </button>
          </div>
          <div className="flex flex-row gap-x-8 font-bold text-sm justify-center lg:pt-32 mt-24" ref={buttonsAnim}>
            <Link href="#" >Company Profile</Link>
            <Link href="#" >Brand Identity</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default We;
