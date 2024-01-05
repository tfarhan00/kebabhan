import dynamic from "next/dynamic";
import PhysicsPillComponent from "./physics-pill/component";

const PhysicsPillComponentLazy = dynamic(
  () => import("./physics-pill/component")
);

export const labItems = [
  {
    name: "Physics Pill",
    path: null,
    component: <PhysicsPillComponentLazy />,
  },
];
