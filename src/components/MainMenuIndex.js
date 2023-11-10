import {useId, useState} from 'react'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Container } from '@/components/Container'
import Navigation from "@/components/NavigationSlim";
import Link from "next/link";
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import {useRouter} from "next/router";


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

const MainMenu = (props) => {
  console.log(props)

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
      <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
        <header>
          <div
              aria-hidden={expanded ? 'true' : undefined}
              inert={expanded ? '' : undefined}

          >
            <Navigation
                {...props}
                panelId={panelId}
                icon={MenuIcon}
                toggleRef={openRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded)
                  window.setTimeout(() =>
                      closeRef.current?.focus({ preventScroll: true })
                  )
                }}
            />
          </div>

          <motion.div
              layout
              id={panelId}
              style={{ height: expanded ? 'auto' : '0rem' }}
              className="absolute left-0 right-0 top-0 z-50 overflow-hidden bg-neutral-950"
              aria-hidden={expanded ? undefined : 'true'}
              inert={expanded ? undefined : ''}
          >
            <motion.div layout >
              <div ref={navRef}>
                <Navigation
                    invert
                    panelId={panelId}
                    icon={XIcon}
                    toggleRef={closeRef}
                    expanded={expanded}
                    onToggle={() => {
                      setExpanded((expanded) => !expanded)
                      window.setTimeout(() =>
                          openRef.current?.focus({ preventScroll: true })
                      )
                    }}
                />
              </div>
              <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px h-screen before:bg-neutral-800">
                <Container>
                  <div className="grid grid-cols-1 text-white text-center h-screen items-center ">
                    <div>
                      <ul className="flex flex-col text-2xl font-header gap-8">
                        <li>
                          <Link href="/we"  className={"truncate hover:text-orange uppercase "  +
                              (currentRoute === "/we" ? " text-orange" : " ")}>
                            We
                          </Link>
                        </li>
                        <li>
                          <Link href="/are" className={"truncate hover:text-orange uppercase "  +
                              (currentRoute === "/are" ? " text-orange" : " ")}>
                            Are
                          </Link>
                        </li>
                        <li>
                          <Link href="/creatively" className={"truncate hover:text-orange uppercase "  +
                              (currentRoute === "/creatively" ? " text-orange" : " ")}>
                            Creatively
                          </Link>
                        </li>
                        <li>
                          <Link href="/yours" className={"truncate hover:text-orange uppercase "  +
                              (currentRoute === "/yours" ? " text-orange" : " ")}>
                            Yours
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Container>
              </div>
            </motion.div>
          </motion.div>
        </header>

      </MotionConfig>
  )}
export default MainMenu;
