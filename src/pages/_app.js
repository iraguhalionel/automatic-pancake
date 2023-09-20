import React from "react";
import dynamic from 'next/dynamic'

import '@/styles/globals.css'
import "@/styles/fonts.css"

import { Nunito_Sans } from 'next/font/google';
import Emblem from "@/components/emblem";

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '800', '900']
});

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

export default function App({ Component, pageProps }) {

  return (
    <>
      <style jsx global>
        {`
          :root {
            --nunitoSans-font: ${nunitoSans.style.fontFamily};
          }
        `}
      </style>
      <AnimatedCursor
        innerSize={0}
        outerSize={0}
        innerScale={1}
        outerScale={1}
        outerAlpha={2}
        innerAlpha={2}
        hasBlendMode={true}
        outerStyle={{
          mixBlendMode: 'exclusion',
          borderStyle: 'solid',
          borderWidth: '4px',
          marginTop: '0.1rem'
        }}
        innerStyle={{
          // mixBlendMode: 'difference',
          // borderStyle: 'solid',
          borderWidth: '0px',
          marginTop: '-1.2rem'
        }}
        trailingSpeed={12}
      >
        <Emblem />
      </AnimatedCursor>
      <Component {...pageProps} />
    </>
  )
}
