import React from "react";
import dynamic from 'next/dynamic'

import '@/styles/globals.css'
import "@/styles/fonts.css"

import { Nunito_Sans } from 'next/font/google';


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
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          mixBlendMode: 'exclusion',
          marginTop: '1.5rem'
        }}
        outerStyle={{
          mixBlendMode: 'exclusion',
          borderStyle: 'solid',
          borderWidth: '1px'
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
