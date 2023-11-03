import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

enum RoutePos {
  home,
  about,
  lab,
  works,
}

const routeList = {
  "/": RoutePos.home,
  "/about": RoutePos.about,
  "/lab": RoutePos.lab,
  "/works": RoutePos.works,
};

function translateDirectionOut(route: string, currentRoute: string) {
  const prevRoute = routeList[currentRoute as keyof typeof routeList];
  const nextRoute = routeList[route as keyof typeof routeList];
  return prevRoute > nextRoute ? -100 : 100;
}

const duration = 0.5;
const delay = 0.1;
let translateIn = 0;

export const animatePageIn = () => {
  const transitionElement = document.getElementById("transition-element");
  if (transitionElement) {
    const tl = gsap.timeline();
    tl.set(transitionElement, {
      yPercent: 0,
    }).to(transitionElement, {
      yPercent: translateIn === 100 ? -100 : 100,
      duration: duration,
      delay: delay,
      ease: "power2.inOut",
      onComplete: () => {
        translateIn = 0;
      },
    });
  }
};

export const animatePageOut = (
  href: string,
  router: AppRouterInstance,
  currentRoute: string
) => {
  const animationWrapper = document.getElementById("transition-element");
  if (translateIn) return;
  if (animationWrapper) {
    const tl = gsap.timeline();
    const translateOut = translateDirectionOut(href, currentRoute);
    translateIn = translateOut;
    tl.set(animationWrapper, {
      yPercent: translateOut,
    }).to(animationWrapper, {
      yPercent: 0,
      duration: duration,
      ease: "power2.inOut",
      delay: delay,
      onComplete: () => {
        router.push(href);
      },
    });
  }
};
