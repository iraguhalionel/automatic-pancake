import { useId } from 'react'
import Image from 'next/image';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import Image1 from "@/images/clientsLogo/image1.png";
import Image2 from "@/images/clientsLogo/image2.png";
import Image3 from "@/images/clientsLogo/image3.png";
import Image4 from "@/images/clientsLogo/image4.png";
import Image5 from "@/images/clientsLogo/image5.png";
import Image6 from "@/images/clientsLogo/image6.png";
import Image7 from "@/images/clientsLogo/image7.png";
import Image8 from "@/images/clientsLogo/image8.png";
import Image9 from "@/images/clientsLogo/image9.png";
import Image10 from "@/images/clientsLogo/image10.png";
import Image11 from "@/images/clientsLogo/image11.png";
import Image12 from "@/images/clientsLogo/image12.png";
import Image13 from "@/images/clientsLogo/image13.png";
import Image14 from "@/images/clientsLogo/image14.png";
import Image15 from "@/images/clientsLogo/image15.png";
import Image16 from "@/images/clientsLogo/image16.png";
import Image17 from "@/images/clientsLogo/image17.png";
import Image18 from "@/images/clientsLogo/image18.png";
import Image19 from "@/images/clientsLogo/image19.png";
import Image20 from "@/images/clientsLogo/image20.png";
import Image21 from "@/images/clientsLogo/image21.png";
import Image22 from "@/images/clientsLogo/image22.png";
import Image23 from "@/images/clientsLogo/image23.png";
import Image24 from "@/images/clientsLogo/image24.png";
import Image25 from "@/images/clientsLogo/image25.png";
import Image26 from "@/images/clientsLogo/image26.png";
import Image27 from "@/images/clientsLogo/image27.png";
import Image28 from "@/images/clientsLogo/image28.png";
import Image29 from "@/images/clientsLogo/image29.png";
import Image30 from "@/images/clientsLogo/image30.png";
import Image31 from "@/images/clientsLogo/image31.png";

import { Container } from '@/components/Container'
import MainMenu from "@/components/MainMenu";

const features = [
  {
    id: 1,
    name: 'Invest any amount',
    description:
      'Whether it’s $1 or $1,000,000, we can put your money to work for you.',
    icon: Image1,
    width: 140,
  },
  {
    id: 2,
    name: 'Build a balanced portfolio',
    description:
      'Invest in different industries to find the most opportunities to win huge.',
    icon: Image2,
    width: 140,
  },
  {
    id: 3,
    name: 'Trade in real-time',
    description:
      'Get insider tips on big stock moves and act on them within seconds.',
    icon: Image3,
    height: 70,
  },
  {
    id: 4,
    name: 'Profit from your network',
    description:
      'Invite new insiders to get tips faster and beat even other Pocket users.',
    icon: Image4,
    width: 140,
  },
  {
    id: 5,
    name: 'Encrypted and anonymized',
    description:
      'Cutting-edge security technology that even the NSA doesn’t know about keeps you hidden.',
    icon: Image5,
    height: 50,
  },
  {
    id: 6,
    name: 'Portfolio tracking',
    description:
      'Watch your investments grow exponentially, leaving other investors in the dust.',
    icon: Image6,
    width: 140,
  },
  {
    id: 8,
    name: 'Portfolio tracking',
    description:
      'Watch your investments grow exponentially, leaving other investors in the dust.',
    icon: Image7,
    width: 140,
  },
  {
    id: 9,
    name: 'Portfolio tracking',
    description:
      'Watch your investments grow exponentially, leaving other investors in the dust.',
    icon: Image8,
    width: 140,
  },
  {
    id: 10,
    name: 'Portfolio tracking',
    description:
      'Watch your investments grow exponentially, leaving other investors in the dust.',
    icon: Image9,
    width: 140,
  },
  {
    id: 11,
    name: 'Portfolio tracking',
    description:
      'Watch your investments grow exponentially, leaving other investors in the dust.',
    icon: Image10,
    width: 140,
  },
  {
    id: 12,
    name: 'Invest any amount',
    description:
      'Whether it’s $1 or $1,000,000, we can put your money to work for you.',
    icon: Image11,
    height: 70,
  },
  {
    id: 13,
    name: 'Build a balanced portfolio',
    description:
      'Invest in different industries to find the most opportunities to win huge.',
    icon: Image12,
    height: 70,
  },
  {
    id: 14,
    name: 'Trade in real-time',
    description:
      'Get insider tips on big stock moves and act on them within seconds.',
    icon: Image13,
    width: 140,
  },
  {
    id: 15,
    name: 'Profit from your network',
    description:
      'Invite new insiders to get tips faster and beat even other Pocket users.',
    icon: Image14,
    height: 70,
  },
  {
    id: 16,
    name: 'Encrypted and anonymized',
    description:
      'Cutting-edge security technology that even the NSA doesn’t know about keeps you hidden.',
    icon: Image15,
    width: 140,
  },
  {
    id: 17,
    name: 'Portfolio tracking',
    description:
      'Watch your investments grow exponentially, leaving other investors in the dust.',
    icon: Image16,
    height: 70,
  },
  {
    id: 18,
    name: 'Portfolio tracking',
    description:
      'Watch your investments grow exponentially, leaving other investors in the dust.',
    icon: Image17,
    width: 140,
  },
  {
    id: 19,
    name: 'Portfolio tracking',
    description:
      'Watch your investments grow exponentially, leaving other investors in the dust.',
    icon: Image18,
    width: 140,
  },
  {
    id: 20,
    name: 'Portfolio tracking',
    description:
      'Watch your investments grow exponentially, leaving other investors in the dust.',
    icon: Image19,
    height: 70,
  },
  {
    id: 21,
    name: 'Portfolio tracking',
    description:
      'Watch your investments grow exponentially, leaving other investors in the dust.',
    icon: Image20,
    height: 70,
  },
  {
    id: 5,
    name: 'Profit from your network',
    description:
      'Invite new insiders to get tips faster and beat even other Pocket users.',
    icon: Image21,
    width: 140,
  },
  {
    id: 5,
    name: 'Profit from your network',
    description:
      'Invite new insiders to get tips faster and beat even other Pocket users.',
    icon: Image22,
    height: 70,
  },
  {
    id: 5,
    name: 'Profit from your network',
    description:
      'Invite new insiders to get tips faster and beat even other Pocket users.',
    icon: Image23,
    width: 140,
  },
  {
    id: 5,
    name: 'Profit from your network',
    description:
      'Invite new insiders to get tips faster and beat even other Pocket users.',
    icon: Image24,
    height: 70,
  },
  {
    id: 5,
    name: 'Profit from your network',
    description:
      'Invite new insiders to get tips faster and beat even other Pocket users.',
    icon: Image25,
    width: 140,
  },
  {
    id: 5,
    name: 'Profit from your network',
    description:
      'Invite new insiders to get tips faster and beat even other Pocket users.',
    icon: Image26,
    width: 140,
  },
  {
    id: 5,
    name: 'Profit from your network',
    description:
      'Invite new insiders to get tips faster and beat even other Pocket users.',
    icon: Image27,
    width: 140,
  },
  {
    id: 5,
    name: 'Profit from your network',
    description:
      'Invite new insiders to get tips faster and beat even other Pocket users.',
    icon: Image28,
    width: 140,
  },
  {
    id: 5,
    name: 'Profit from your network',
    description:
      'Invite new insiders to get tips faster and beat even other Pocket users.',
    icon: Image29,
    height: 70,
  },
  {
    id: 5,
    name: 'Profit from your network',
    description:
      'Invite new insiders to get tips faster and beat even other Pocket users.',
    icon: Image30,
    width: 140,
  },
  {
    id: 5,
    name: 'Profit from your network',
    description:
      'Invite new insiders to get tips faster and beat even other Pocket users.',
    icon: Image31,
    width: 120,
  }
]

function Yours() {
  const paragraphRefs = useRef([]);
  useEffect(() => {
    gsap.registerPlugin(window);

    const paragraphs = paragraphRefs.current;

    gsap.fromTo(
      paragraphs,
      { opacity: 0, y: 0 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.5 }
    );

  }, []);
  return (

    <section className="bg-white">

      <MainMenu className="text-black" />
      <div  className="mx-auto pb-8 px-4 sm:px-6 lg:px-32">
        <div className=" my-8">
        <ul
          role="list"
          className="lg:mt-6 grid grid-cols-2 mx-4 gap-y-12 gap-x-6 text-sm sm:mt-8 sm:grid-cols-4 md:gap-y-12 lg:grid-cols-6"
        >
          {features.map((feature) => (
            <li className="flex items-center justify-center" key={feature.id}>
              <a href="#" className="filter grayscale hover:grayscale-0" ref={(el) => (paragraphRefs.current[`${feature.id}`] = el)}>
                <Image src={feature.icon} height={feature.height || 50} width={feature.width || 60} loading="lazy" position="absolute" alt={feature.name}/>
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
