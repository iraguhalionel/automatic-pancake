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
import {Container} from "@/components/Container";

function Are() {

  return (
    <div className="bg-white h-screen">
      <Navigation className="text-black" />
      <div>
        <main>
          <section className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
              <div className="mx-auto max-w-2xl lg:max-w-6xl lg:px-12">
                <div className=" flex items-center justify-between">
                  <div className="py-16">
                    <h3 className="-mt-8 text-black font-extralight lg:w-[556px]">
                      <span className="hidden">
                        A 3600 Communication Agency An Advertising and PR Agency We may define ourselves as all of the above. But we chose to be a little bit more…
                      </span>
                    </h3>
                  </div>
                  <div className="hidden">
                    <Emblem />
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section className="snap-start bg-white text-white pt-14">
            <Container>
              <Image
                alt="Mountains"
                src={footerImage}
                className="container w-4/5 mx-auto lg:-mb-32 z-0"
              />
            </Container>


            <div className="w-screen bg-black relative z-10">
              <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div className="flex md:flex-row flex-col gap-y-12 md:gap-x-12 lg:gap-x-40 items-center justify-center py-12">
                  <div className="flex items-center space-x-3">
                    <Location />
                    <span className="font-light text-sm">Irembo House, 72 KN 5 Rd,<br />
Plot #588 Remera-Kisimenti</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone />
                    <span className="font-light text-sm">+250 791 570 011<br/>+250 788 319 228</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail />
                    <span className="font-light text-sm">ikaze@yato.rw</span>
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
                className="bg-cover w-screen h-[24px] bg-black opacity-20"
              />
            </div>


          </section>

        </main>
      </div>
    </div>
  );
}

export default Are;
