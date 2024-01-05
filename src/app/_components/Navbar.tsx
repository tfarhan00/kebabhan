"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
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
      <div className="relative overflow-hidden flex items-center gap-3 px-4 py-2 rounded-md border border-black/10 bg-neutral-100 text-black pointer-events-auto">
        <div
          style={{
            transform: underlineSlide(`/${pathname.split("/")[1]}`),
          }}
          className={twMerge(
            "w-14 h-[1px] bg-black rounded-full absolute bottom-0 transition-transform duration-200 ease-in-out"
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
      </div>
    </div>
  );
}
