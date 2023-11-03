"use client";

import MarqueeText from "@/app/_components/MarqueeText/MarqueeText";
import { useEffect, useRef, useState } from "react";

export default function SpotifyTitleMarquee(props: { title: string }) {
  const [isOverflow, setOverflow] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const titleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const title = titleRef.current;
    const MAX_WIDTH = 100; // allowed title width is 100px

    function detectTitleOverflow() {
      if (!title || !isMounted) return;
      const width = title.offsetWidth;
      if (width > MAX_WIDTH) {
        setOverflow(true);
      } else {
        setOverflow(false);
      }
    }

    detectTitleOverflow();
  }, [isMounted]);

  if (!isMounted)
    return (
      <div className="h-3.5 w-[100px] rounded-sm bg-neutral-400 animate-pulse"></div>
    );

  return (
    <>
      {/* Shadow text element to detect width of the title */}
      <p
        ref={titleRef}
        className="absolute opacity-0 pointer-events-none"
        aria-hidden="true"
      >
        {props.title}
      </p>
      <div
        style={{
          WebkitMaskImage: isOverflow
            ? `linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent 100%)`
            : "",
        }}
        className="flex overflow-hidden max-w-[100px] relative"
      >
        <MarqueeText enabled={isOverflow}>
          <p>{props.title}</p>
        </MarqueeText>
      </div>
    </>
  );
}
