import { PropsWithChildren } from "react";
import style from "./MarqueeText.module.css";
import { twMerge } from "tailwind-merge";

export default function MarqueeText(
  props: PropsWithChildren<{ enabled?: boolean }>
) {
  const { enabled = true } = props;

  if (!enabled) return props.children;

  return (
    <div className={style.marquee}>
      <div className={twMerge(style.marquee__content, style.scroll)}>
        {props.children}
      </div>
      <div
        className={twMerge(style.marquee__content, style.scroll)}
        aria-hidden="true"
      >
        {props.children}
      </div>
    </div>
  );
}
