import React from "react";
import dynamic from 'next/dynamic'

import '@/styles/globals.css'
import "@/styles/fonts.css"

import Emblem from "@/components/emblem";


const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

export default function App({ Component, pageProps }) {

  return (
    <>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;0,6..12,800;0,6..12,900;0,6..12,1000;1,6..12,200;1,6..12,300;1,6..12,400;1,6..12,500;1,6..12,600;1,6..12,700;1,6..12,800;1,6..12,900;1,6..12,1000&display=swap');
          :root {
            --nunitoSans-font: 'Nunito Sans', sans-serif;
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
          borderWidth: '3.5px',
          marginTop: '0.1rem'
        }}
        innerStyle={{
          mixBlendMode: 'exclusion',
          borderWidth: '0px',
          marginTop: '-1.1rem'
        }}
        trailingSpeed={12}
      >
          <div className="text-white cursor2">
            <Emblem />
          </div>
      </AnimatedCursor>
      <Component {...pageProps} />
    </>
  )
}
