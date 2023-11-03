"use client";

import { animatePageOut } from "@/animations/page-transition";
import { routePositionAtom } from "@/store/route";
import { useSetAtom } from "jotai";
import { usePathname, useRouter } from "next/navigation";
import { HTMLAttributes, PropsWithChildren } from "react";

interface LinkTransitionProps extends HTMLAttributes<HTMLButtonElement> {
  href: string;
}

export default function LinkTransition({
  href,
  children,
  ...rest
}: PropsWithChildren<LinkTransitionProps>) {
  const router = useRouter();
  const pathname = usePathname();
  const setRoutePosition = useSetAtom(routePositionAtom);

  const handleClick = () => {
    if (href === pathname) return;
    setRoutePosition(href);
    animatePageOut(href, router, pathname);
  };

  return (
    <button
      className="border-[1px] border-black p-4 rounded-xl hover:bg-black hover:text-neutral-100 cursor-pointer"
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
}
