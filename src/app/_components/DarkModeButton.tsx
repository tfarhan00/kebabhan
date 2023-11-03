"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeButton() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="px-4 h-7 w-14 ml-1 flex items-center justify-center border-l-2 border-l-black/10 dark:border-l-white/10">
        <div className="w-[20px] aspect-square rounded bg-white/10 animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="px-4 h-7 w-14 ml-1 flex items-center justify-center border-l-2 border-l-black/10 dark:border-white/10">
      <button
        onClick={() => {
          theme == "dark" ? setTheme("light") : setTheme("dark");
        }}
      >
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sun-medium dark:stroke-yellow-300"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 3v1" />
            <path d="M12 20v1" />
            <path d="M3 12h1" />
            <path d="M20 12h1" />
            <path d="m18.364 5.636-.707.707" />
            <path d="m6.343 17.657-.707.707" />
            <path d="m5.636 5.636.707.707" />
            <path d="m17.657 17.657.707.707" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-moon-star"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            <path d="M19 3v4" />
            <path d="M21 5h-4" />
          </svg>
        )}
      </button>
    </div>
  );
}
