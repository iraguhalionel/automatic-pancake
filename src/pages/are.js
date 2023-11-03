import React from "react";

import Emblem from "@/components/emblem";
import footerImage from "@/images/team.png"
import Image from "next/image";
import strategyPic from "@/images/services/Strategy.png"
import DigitalMarketing from "@/images/services/DigitalMarketing.png"
import Branding from "@/images/services/Branding.png"
import Event from "@/images/services/Event.png"
import Production from "@/images/services/Production.png"
import Navigation from "@/components/Navigation";
import {Facebook, Imigongo, Instagram, Linkedin, Location, Mail, Phone, Twitter, Youtube} from "@/images/Icons";
import Link from "next/link";
import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import {Container} from "@/components/Container";

import imageMugabo from '@/images/team/Kessy.png'
import imageRita from '@/images/team/Rita.png'
import imageJules from '@/images/team/Jules.png'
import imageLucky from '@/images/team/Lucky.png'
import imageBrian from '@/images/team/Geza.png'
import imageIsimbi from '@/images/team/Guilaine.png'
import MainMenu from "@/components/MainMenu";

function Are() {

  const team = [
    {
      title: 'Leadership',
      people: [
        {
          name: 'Brian Geza Hativatye',
          role: 'Managing Director',
          image: { src: imageBrian },
        },
        {
          name: 'Mugishawimana Lucky Celestin',
          role: 'Multimedia Production Director',
          image: { src: imageLucky },
        },
        {
          name: 'Izere Isimbi Guilaine',
          role: 'Digital Marketing Director',
          image: { src: imageIsimbi },
        },
        {
          name: 'Ndindilimana Jules',
          role: 'Chief Finance Officer',
          image: { src: imageJules },
        },
        {
          name: 'Kessy Mugabo Kayiganwa',
          role: 'Strategic Comms Director',
          image: { src: imageMugabo },
        },
        {
          name: 'Umuhoza Sandrine Rita',
          role: 'Logistics and Public Relations Director',
          image: { src: imageRita },
        },
      ],
    },
  ]

  return (
    <div className="bg-white">
      <MainMenu className="text-black" />
      <div>
        <main>
          <section className="snap-start text-white">
            <div className="mx-auto max-w-2xl lg:max-w-7xl my-24 sm:my-12 lg:my-12">
              <div className="space-y-24">
                {team.map((group) => (
                  <FadeInStagger key={group.title}>
                    <Border as={FadeIn} />
                    <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
                      <div><h2
                        className="font-display text-2xl font-semibold text-neutral-950">Our Team</h2></div>
                      <div className="lg:col-span-3">

                        <ul
                          role="list"
                          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                        >
                          {group.people.map((person) => (
                            <li key={person.name}>
                              <FadeIn>
                                <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                                  <Image
                                    alt=""
                                    {...person.image}
                                    className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                                  />
                                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                                    <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                      {person.name}
                                    </p>
                                    <p className="mt-2 text-sm text-white">
                                      {person.role}
                                    </p>
                                  </div>
                                </div>
                              </FadeIn>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </FadeInStagger>
                ))}
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
                            <span className="font-light text-sm flex gap-2"><a href="tel:+250 791 570 011">+250 791 570 011</a>/<a href="tel:+250 788 319 228">+250 788 319 228</a></span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Mail />
                            <a href="mailto:ikaze@yato.rw" className="font-light text-sm">ikaze@yato.rw</a>
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
  );
}

export default Are;
