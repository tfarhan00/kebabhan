"use client";

import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import LabItemContainer from "../components/LabItemContainer";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";

const targetDash = Math.round(2 * 20 * Math.PI);

export default function AudioSpectrum() {
  const [isPlay, setPlay] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [showStatus, setStatus] = useState(false);
  const audioRef = useRef<HTMLMediaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRaf = useRef<number>(0);
  const audioSrcRef = useRef<MediaElementAudioSourceNode>();
  const audioAnalyzer = useRef<AnalyserNode>();

  useEffect(() => {
    let interval: any;
    if (isPlay) {
      setStatus(true);
      interval = setTimeout(() => {
        setStatus(false);
      }, 4000);
    } else if (!isPlay) {
      clearInterval(interval);
      setStatus(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlay]);

  useEffect(() => {
    const audioEl = audioRef.current;

    if (!audioEl) return;

    if (isPlay) {
      audioEl.play().then(() => {
        setIsRunning(true);
      });
    } else if (!isPlay && isRunning) {
      audioEl.pause();
      setIsRunning(false);
    }
  }, [isPlay, isRunning]);

  useEffect(() => {
    const audioEl = audioRef.current;
    const container = containerRef.current;

    if (!audioEl) return;

    function onAudioEnd() {
      setPlay(false);
      setIsRunning(false);
      stopAnim();
    }

    const circle = document.querySelector("#circle-anim");
    const dashTo = gsap.quickTo(circle, "strokeDashoffset");

    function onTimeUpdate(e: any) {
      if (!audioEl || !container) return;
      const progress = Math.round(
        (audioEl.currentTime / audioEl.duration) * 100
      );
      const dashOffset = Math.round(targetDash * ((100 - progress) / 100));
      dashTo(dashOffset);
    }

    audioEl.addEventListener("ended", onAudioEnd);
    audioEl.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      audioEl.pause();
      audioEl.removeEventListener("ended", onAudioEnd);
      audioEl.removeEventListener("timeupdate", onTimeUpdate);
      cancelAnimationFrame(audioRaf.current);
    };
  }, []);

  // Audio visual
  function playAnim() {
    if (!audioRef.current) return;
    let audioCtx = new AudioContext();
    if (!audioSrcRef.current) {
      audioSrcRef.current = audioCtx.createMediaElementSource(audioRef.current);
      audioAnalyzer.current = audioCtx.createAnalyser();
      audioSrcRef.current.connect(audioAnalyzer.current);
      audioAnalyzer.current.connect(audioCtx.destination);
      audioAnalyzer.current.fftSize = 256;
    }
    visualizer();
  }

  function visualizer() {
    const audioBars = Array.from(
      document.querySelectorAll<HTMLElement>("#audio-bar")
    );
    const audioCon = document.querySelector<HTMLElement>("#audio-container");
    const analyzer = audioAnalyzer.current;

    if (analyzer) {
      const barsLength = audioBars.length;
      const bufferLength = analyzer.frequencyBinCount;
      const freqData = new Uint8Array(analyzer.frequencyBinCount);
      const maxHeight = (audioCon?.clientHeight ?? 0) - 32;
      const centerIdx = Math.floor(barsLength / 2);
      const groupSize = Math.floor(bufferLength / 1.5 / barsLength);
      const leftGroup = audioBars.slice(0, Math.round(barsLength / 2));
      const rightGroup = audioBars.slice(
        Math.round(barsLength / 2),
        barsLength
      );

      // Looping animation
      function updateFrequencyData() {
        if (analyzer) {
          analyzer.getByteFrequencyData(freqData);
          leftGroup.forEach((bar, idx) => {
            const revIdx = Math.round(barsLength / 2) - idx;
            const start = revIdx * groupSize;
            const end = (revIdx + 1) * groupSize;
            const groupSum = freqData
              .slice(start, end)
              .reduce((acc, value) => acc + value, 0);

            const scale = 1;

            const normalizedHeight =
              (groupSum / (groupSize * 255)) * maxHeight * scale;

            const minHeight = 12;
            const clampedHeight = Math.max(minHeight, normalizedHeight);

            bar.style.height = `${clampedHeight}px`;

            const minOpacity = 0;
            const maxOpacity = 1.0;
            const opacity =
              minOpacity + (maxOpacity - minOpacity) * (freqData[start] / 255);
            bar.style.opacity = opacity.toFixed(2);
          });

          rightGroup.forEach((bar, idx) => {
            const start = idx * groupSize;
            const end = (idx + 1) * groupSize;
            const groupSum = freqData
              .slice(start, end)
              .reduce((acc, value) => acc + value, 0);

            const scale = 1;

            const normalizedHeight =
              (groupSum / (groupSize * 255)) * maxHeight * scale;

            const minHeight = 12;
            const clampedHeight = Math.max(minHeight, normalizedHeight);

            bar.style.height = `${clampedHeight}px`;

            const minOpacity = 0;
            const maxOpacity = 1.0;
            const opacity =
              minOpacity + (maxOpacity - minOpacity) * (freqData[start] / 255);
            bar.style.opacity = opacity.toFixed(2);
          });
        }
      }

      function animationLoop() {
        updateFrequencyData();
        audioRaf.current = requestAnimationFrame(animationLoop);
      }

      function startAnimation() {
        animationLoop();
      }

      startAnimation();
    }
  }

  function stopAnim() {
    const audioBars = document.querySelectorAll<HTMLElement>("#audio-bar");
    gsap.to(audioBars, {
      height: 12,
      opacity: 1,
    });
    cancelAnimationFrame(audioRaf.current);
    audioRaf.current = 0;
  }

  const toggleAudio = () => {
    setPlay((prev) => !prev);
    if (!audioRaf.current) {
      playAnim();
    } else {
      stopAnim();
    }
  };

  return (
    <LabItemContainer>
      <div
        ref={containerRef}
        className="w-full h-[300px] flex items-center justify-center relative overflow-hidden"
      >
        {/* Music status */}
        <a
          href="https://open.spotify.com/track/3JVtezFwcpFAqvr4pdBBrd?si=1b590bbe5dd6421e"
          target="_blank"
          className={twMerge(
            "absolute top-3 left-3 -translate-y-[150%] text-black/50 dark:text-white/50 bg-white dark:bg-white/5 border rounded-full pl-3 pr-2 py-1.5 flex items-center justify-center gap-1 text-xs",
            "transition-all duration-500 ease-in-out dark:border-white/10",
            "hover:bg-neutral-50 ",
            showStatus
              ? "translate-y-[0%] shadow-lg"
              : "-translate-y-[150%] shadow-none"
          )}
        >
          <p>
            <span className="text-black/70 dark:text-white/70">
              feelthisway
            </span>
            &nbsp;- pluko
          </p>
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
            className="lucide lucide-arrow-up-right"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>

        {/* Audio */}
        <audio ref={audioRef} id="audio-el">
          <source src={"/assets/audios/feelthisway.mp3"} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>

        {/* MainVisual */}
        <div
          id="audio-container"
          className="bg-white dark:bg-white/5 rounded-full px-4 py-2 flex items-center justify-center gap-1 h-20 shadow-lg w-64 relative overflow-hidden"
        >
          {[...Array(36).keys()].map((item) => (
            <div
              id="audio-bar"
              key={item}
              style={{}}
              className="w-[0.1rem] h-3 bg-gradient-to-b from-blue-500 to-blue-400 rounded-full"
            ></div>
          ))}
        </div>

        {/* Play button */}
        <button
          onClick={toggleAudio}
          className="bg-white dark:bg-white/5 dark:border-white/10 w-10 border aspect-square rounded-full absolute bottom-5 right-5 outline-none"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Circular progress */}
            <div className="absolute w-12 h-12 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] pointer-events-none">
              <svg className="rounded-full w-full h-full -rotate-90">
                <circle
                  id="circle-anim"
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  fillOpacity={0}
                  strokeWidth="2"
                  strokeDasharray={targetDash}
                  strokeDashoffset={targetDash}
                  className="stroke-black/50 dark:stroke-white/50"
                />
              </svg>
            </div>
            {isPlay ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-pause"
              >
                <rect width="4" height="16" x="6" y="4" />
                <rect width="4" height="16" x="14" y="4" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-play -mr-1"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </div>
        </button>
      </div>
    </LabItemContainer>
  );
}

function AudioPill(props: {
  isPlaying: boolean;
  audioRef: RefObject<HTMLAudioElement>;
}) {
  return <></>;
}
