import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import MainLogo from "@/components/mainLogo";

const Navigation = (props) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className="sticky top-0 z-50 py-8 ">
      <div {...props}>
        <div className="mx-auto px-4 sm:px-6 lg:px-32">
          <nav className="flex items-center">
            <div>
              <Link href="/">
                <span className="sr-only">Home</span>
                <MainLogo className="h-10 w-auto" />
              </Link>
            </div>
            <ul className="ml-auto flex flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

              <li>
                <Link href="/we"  className={"truncate text-xs hover:text-orange uppercase "  +
                  (currentRoute === "/we" ? " text-orange" : " ")}>
                  We
                </Link>
              </li>
              <li>
                <Link href="/are" className={"truncate text-xs hover:text-orange uppercase "  +
                (currentRoute === "/are" ? " text-orange" : " ")}>
                  Are
                </Link>
              </li>
              <li>
                <Link href="/creatively" className={"truncate text-xs hover:text-orange uppercase "  +
                (currentRoute === "/creatively" ? " text-orange" : " ")}>
                  Creatively
                </Link>
              </li>
              <li>
                <Link href="/yours" className={"truncate text-xs hover:text-orange uppercase "  +
                (currentRoute === "/yours" ? " text-orange" : " ")}>
                  Yours
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </div>
  );
};

export default Navigation;
