import { useId } from 'react'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Container } from '@/components/Container'
import Navigation from "@/components/Navigation";
import Link from "next/link";



function We() {

  const paragraphRefs = useRef([]);
  const yatologo = useRef(null);
  const buttonsAnim = useRef(null);

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
}, []);

  return (
    <section className="bg-white">

      <Navigation className="text-black" />
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
