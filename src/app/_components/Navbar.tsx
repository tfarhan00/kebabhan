"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import LinkTransition from "./LinkTransition";

const routes = [
  {
    name: "home",
    path: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-layout-grid"
      >
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </svg>
    ),
  },
  {
    name: "about",
    path: "/about",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-user-round"
      >
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </svg>
    ),
  },
  {
    name: "labs",
    path: "/labs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-flask-conical"
      >
        <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
        <path d="M8.5 2h7" />
        <path d="M7 16h10" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const pathname = usePathname();

  function underlineSlide(routeName: string) {
    for (let i = 0; i < routes.length; i++) {
      const _routeName = routes[i].path;
      if (routeName === _routeName)
        return `translateX(calc(${i * 100}% + ${i * 12}px))`;
    }
  }

  return (
    <div className="fixed w-full left-0 bottom-0 py-4 flex items-center justify-center z-[99] pointer-events-none bg-transparent text-sm">
      <div className="relative overflow-hidden flex items-center gap-3 px-4 py-2 rounded-md border border-black/10 bg-neutral-100 text-black pointer-events-auto">
        <div
          style={{
            transform: underlineSlide(pathname),
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
