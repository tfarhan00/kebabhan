"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const route = usePathname();
  return (
    <div className="fixed w-full left-0 bottom-0 py-4 flex items-center justify-center z-[99] pointer-events-none bg-transparent text-sm">
      <div className="relative overflow-hidden flex items-center gap-3 px-4 py-1.5 rounded-full border bg-neutral-100 pointer-events-auto">
        <div
          className={twMerge(
            "w-12 h-[2px] bg-black rounded-full absolute bottom-0 transition-transform duration-200 ease-in-out",
            route === "/about"
              ? "translate-x-[calc(100%+12px)]"
              : "translate-x-[0%]"
          )}
        ></div>
        <Link href="/" className="flex items-center w-12 justify-center">
          home
        </Link>
        <Link href="/about" className="flex items-center w-12 justify-center">
          about
        </Link>
      </div>
    </div>
  );
}
