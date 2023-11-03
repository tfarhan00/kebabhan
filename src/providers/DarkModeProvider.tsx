// app/providers.jsx

"use client";

import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export default function DarkModeProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
