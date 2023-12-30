"use client";

import { animatePageIn } from "@/animations/page-transition";

import { PropsWithChildren } from "react";

function translateRoutePath(routePath: string) {
  switch (routePath) {
    case "/":
      return "Home";
    case "/about":
      return "About";
    case "/labs":
      return "Labs";
  }
}
export default function Template({ children }: PropsWithChildren) {
  // useEffect(() => {
  //   animatePageIn();
  // }, []);

  return children;
}
