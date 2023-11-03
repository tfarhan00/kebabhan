import dynamic from "next/dynamic";
import { Suspense } from "react";

const PhysicsPillComponentLazy = dynamic(
  () => import("./physics-pill/component"),
  {
    ssr: false,
    loading: () => <LazyLoadingSkeleton />,
  }
);
const AudioSpectrumComponentLazy = dynamic(
  () => import("./audio-spectrum/component"),
  {
    ssr: false,
    loading: () => <LazyLoadingSkeleton />,
  }
);

export const labItems = [
  {
    name: "Physics Pill",
    path: null,
    component: PhysicsPillComponentLazy,
  },
  {
    name: "Spectrum",
    path: null,
    component: AudioSpectrumComponentLazy,
  },
];

function LazyLoadingSkeleton() {
  return (
    <div className="w-full h-[300px] border rounded-md bg-neutral-100 dark:border-white/10 dark:bg-white/5 animate-pulse"></div>
  );
}
