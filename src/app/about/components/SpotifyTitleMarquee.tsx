"use client";

import MarqueeText from "@/app/_components/MarqueeText/MarqueeText";
import { useEffect, useRef, useState } from "react";

export default function SpotifyTitleMarquee(props: {
  title: string;
  artist: string;
}) {
  const [isOverflow, setOverflow] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const titleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const title = titleRef.current;
    const MAX_WIDTH = 115; // allowed title width is 100px

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
      <div
        ref={titleRef}
        className="absolute opacity-0 pointer-events-none flex items-center whitespace-nowrap"
        aria-hidden="true"
      >
        <p>{props.title}</p>
        <span>-</span>
        <p>{props.artist}</p>
      </div>
      <div
        style={{
          WebkitMaskImage: isOverflow
            ? `linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent 100%)`
            : "",
        }}
        className="flex overflow-hidden max-w-[115px] relative"
      >
        <MarqueeText enabled={isOverflow}>
          <div className="flex items-center gap-1 whitespace-nowrap">
            <p>{props.title}</p>
            <span>-</span>
            <p className="text-black/40 dark:text-white/50 group-hover:text-black/50 dark:group-hover:text-white/50">
              {props.artist}
            </p>
          </div>
        </MarqueeText>
      </div>
    </>
  );
}
