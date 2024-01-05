"use client";

import Rive from "@rive-app/react-canvas";

export default function ComingSoonBanner() {
  return (
    <div className="w-full h-full flex-col flex items-center justify-center relative">
      <h1 className="font-semibold text-4xl absolute bg-white text-transparent bg-clip-text mix-blend-difference">
        Let me cook
      </h1>
      <Rive
        src="https://cdn.rive.app/animations/vehicles.riv"
        stateMachines="bumpy"
        className="w-full aspect-video max-w-xl"
      />
    </div>
  );
}
