import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
  const transitionElement = document.getElementById("transition-element");

  if (transitionElement) {
    const tl = gsap.timeline();

    tl.set(transitionElement, {
      xPercent: 0,
    }).to(transitionElement, {
      xPercent: 100,
      duration: 0.5,
      delay: 0.1,
      ease: "power2.inOut",
    });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const animationWrapper = document.getElementById("transition-element");

  if (animationWrapper) {
    const tl = gsap.timeline();

    tl.set(animationWrapper, {
      xPercent: -100,
    }).to(animationWrapper, {
      xPercent: 0,
      duration: 0.5,
      ease: "power2.inOut",
      delay: 0.1,
      onComplete: () => {
        router.push(href);
      },
    });
  }
};
