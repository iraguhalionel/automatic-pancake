import { useId } from 'react'
import Image from 'next/image';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import Image1 from "@/images/clients/image1.png";
import Image2 from "@/images/clients/image4.png";
import Image3 from "@/images/clients/image5.png";
import Image4 from "@/images/clients/image6.png";
import Image5 from "@/images/clients/image7.png";
import Image6 from "@/images/clients/image8.png";
import Image7 from "@/images/clients/image9.png";
import Image8 from "@/images/clients/image10.png";
import Image9 from "@/images/clients/image11.png";
import Image10 from "@/images/clients/image12.png";
import Image11 from "@/images/clients/image13.png";
import Image12 from "@/images/clients/image27.png";
import Image13 from "@/images/clients/image15.png";
import Image14 from "@/images/clients/image23.png";
import Image15 from "@/images/clients/image17.png";
import Image16 from "@/images/clients/image18.png";
import Image17 from "@/images/clients/image19.png";
import Image18 from "@/images/clients/image20.png";
import Image19 from "@/images/clients/image21.png";
import Image20 from "@/images/clients/image22.png";
import Image21 from "@/images/clients/logo1.png";

import { Container } from '@/components/Container'
import Navigation from "@/components/Navigation";

const features = [
  {
    id: 1,
    name: 'Invest any amount',
    description:
      'Whether it’s $1 or $1,000,000, we can put your money to work for you.',
    icon: Image1,
  },
  {
    id: 2,
    name: 'Build a balanced portfolio',
    description:
      'Invest in different industries to find the most opportunities to win huge.',
    icon: Image2,
  },
  {
    id: 3,
    name: 'Trade in real-time',
    description:
      'Get insider tips on big stock moves and act on them within seconds.',
    icon: Image3,
  },
  {
    id: 4,
    name: 'Profit from your network',
    description:
      'Invite new insiders to get tips faster and beat even other Pocket users.',
    icon: Image4,
  },
  {
    id: 5,
    name: 'Profit from your network',
    description:
      'Invite new insiders to get tips faster and beat even other Pocket users.',
    icon: Image21,
  },
  {
    id: 6,
    name: 'Encrypted and anonymized',
    description:
      'Cutting-edge security technology that even the NSA doesn’t know about keeps you hidden.',
    icon: Image5,
  },
  {
    id: 7,
    name: 'Portfolio tracking',
    description:
      'Watch your investments grow exponentially, leaving other investors in the dust.',
    icon: Image6,
  },
  {
    id: 8,
    name: 'Portfolio tracking',
    description:
      'Watch your investments grow exponentially, leaving other investors in the dust.',
    icon: Image7,
  },
  {
    id: 9,
    name: 'Portfolio tracking',
    description:
      'Watch your investments grow exponentially, leaving other investors in the dust.',
    icon: Image8,
  },
  {
    id: 10,
    name: 'Portfolio tracking',
    description:
      'Watch your investments grow exponentially, leaving other investors in the dust.',
    icon: Image9,
  },
  {
    id: 11,
    name: 'Portfolio tracking',
    description:
      'Watch your investments grow exponentially, leaving other investors in the dust.',
    icon: Image10,
  },
  {
    id: 12,
    name: 'Invest any amount',
    description:
      'Whether it’s $1 or $1,000,000, we can put your money to work for you.',
    icon: Image11,
  },
  {
    id: 13,
    name: 'Build a balanced portfolio',
    description:
      'Invest in different industries to find the most opportunities to win huge.',
    icon: Image12,
  },
  {
    id: 14,
    name: 'Trade in real-time',
    description:
      'Get insider tips on big stock moves and act on them within seconds.',
    icon: Image13,
  },
  {
    id: 15,
    name: 'Profit from your network',
    description:
      'Invite new insiders to get tips faster and beat even other Pocket users.',
    icon: Image14,
  },
  {
    id: 16,
    name: 'Encrypted and anonymized',
    description:
      'Cutting-edge security technology that even the NSA doesn’t know about keeps you hidden.',
    icon: Image15,
  },
  {
    id: 17,
    name: 'Portfolio tracking',
    description:
      'Watch your investments grow exponentially, leaving other investors in the dust.',
    icon: Image16,
  },
  {
    id: 18,
    name: 'Portfolio tracking',
    description:
      'Watch your investments grow exponentially, leaving other investors in the dust.',
    icon: Image17,
  },
  {
    id: 19,
    name: 'Portfolio tracking',
    description:
      'Watch your investments grow exponentially, leaving other investors in the dust.',
    icon: Image18,
  },
  {
    id: 20,
    name: 'Portfolio tracking',
    description:
      'Watch your investments grow exponentially, leaving other investors in the dust.',
    icon: Image19,
  },
  {
    id: 21,
    name: 'Portfolio tracking',
    description:
      'Watch your investments grow exponentially, leaving other investors in the dust.',
    icon: Image20,
  },
]

function Yours() {
  const paragraphRefs = useRef([]);
  useEffect(() => {
    gsap.registerPlugin(window);

    const paragraphs = paragraphRefs.current;

    gsap.fromTo(
      paragraphs,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 50, duration: 0.5, stagger: 0.5 }
    );

  }, []);
  return (

    <section className="bg-white min-h-screen">

      <Navigation className="text-black" />
      <div  className="mx-auto px-4 sm:px-6 lg:px-32">
        <div className=" my-8">
        <ul
          role="list"
          className="lg:mt-6 grid grid-cols-2 mx-4 gap-y-12 gap-x-6 text-sm sm:mt-8 sm:grid-cols-4 md:gap-y-10 lg:grid-cols-6"
        >
          {features.map((feature) => (
            <li className="flex m-auto items-center" key={feature.name}>
              <a href="#" className="filter grayscale hover:grayscale-0" ref={(el) => (paragraphRefs.current[`${feature.id}`] = el)}>
                <Image src={feature.icon}  alt={feature.name}/>
              </a>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
}

export default Yours;
