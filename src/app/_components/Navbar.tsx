"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import DarkModeButton from "./DarkModeButton";
import LinkTransition from "./LinkTransition";

const routes = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "lab",
    path: "/lab",
  },
  {
    name: "works",
    path: "/works",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  function underlineSlide(routeName: string) {
    for (let i = 0; i < routes.length; i++) {
      const _routeName = routes[i].path;
      if (_routeName === routeName) {
        return `translateX(calc(${i * 100}% + ${i * 12}px))`;
      }
    }
  }

  return (
    <div className="fixed w-full left-0 bottom-0 py-4 flex items-center justify-center z-[99] pointer-events-none bg-transparent text-sm">
      <div
        className={twMerge(
          "relative overflow-hidden flex items-center gap-3 pl-4 py-3 rounded-md border border-black/10 dark:border-white/10 bg-neutral-200 dark:bg-neutral-800 text-black pointer-events-auto",
          "dark:text-white/80"
        )}
      >
        <div
          style={{
            transform: underlineSlide(`/${pathname.split("/")[1]}`),
          }}
          className={twMerge(
            "w-14 h-[1px] bg-black dark:bg-white/80 rounded-full absolute bottom-0 transition-transform duration-200 ease-in-out "
          )}
        ></div>
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className="flex items-center gap-1 w-14 justify-center"
          >
            <p>{route.name}</p>
          </Link>
        ))}
        <DarkModeButton />
      </div>
    </div>
  );
}
