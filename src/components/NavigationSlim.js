import React from "react";
import Link from "next/link";
import MainLogo from "@/components/mainLogo";
import clsx from 'clsx'

const NavigationMenu = ({
                      panelId,
                      invert = false,
                      icon: Icon,
                      expanded,
                      onToggle,
                      toggleRef,...props
                    }) => {
  return (
    <div className="absolute w-screen top-0 z-50 py-8">
      <div {...props}>
        <div className="mx-auto px-4 sm:px-6 lg:px-32">
          <nav className="flex items-center">
            <div className={clsx(
              '',
              invert
                ? 'text-white'
                : 'text-black'
            )}>
              <Link href="/">
                <span className="sr-only">Home</span>
                <MainLogo className="h-10 w-auto" />
              </Link>
            </div>
            <ul className="ml-auto flex flex-col">
              <button
                ref={toggleRef && toggleRef}
                type="button"
                onClick={onToggle && onToggle}
                aria-expanded={expanded && expanded.toString()}
                aria-controls={panelId}
                className={clsx(
                  'group -m-2.5 rounded-full p-2.5 transition',
                  invert ? 'hover:bg-white/10' : 'hover:bg-neutral-950/10'
                )}
                aria-label="Toggle navigation"
              >
                <Icon
                  className={clsx(
                    'h-6 w-6',
                    invert
                      ? 'fill-white group-hover:fill-neutral-200'
                      : 'fill-neutral-950 group-hover:fill-neutral-700'
                  )}
                />
              </button>

            </ul>
          </nav>
        </div>
      </div>

    </div>
  );
};

export default NavigationMenu;
