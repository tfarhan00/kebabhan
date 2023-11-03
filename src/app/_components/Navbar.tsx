"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const route = usePathname();
  return (
    <div className="fixed bottom-4 left-[50%] -translate-x-[50%] px-4 py-1.5 z-[99] rounded-full bg-black text-sm flex text-white items-center gap-3">
      <Link href="/" className="flex items-center gap-2">
        {route === "/" && (
          <div className="h-1.5 bg-white aspect-square rounded-full"></div>
        )}
        home
      </Link>
      <Link href="/about" className="flex items-center gap-2">
        {route === "/about" && (
          <div className="h-1.5 bg-white aspect-square rounded-full"></div>
        )}
        about
      </Link>
    </div>
  );
}
