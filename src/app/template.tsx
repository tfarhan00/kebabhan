import { PropsWithChildren } from "react";

function translateRoutePath(routePath: string) {
  switch (routePath) {
    case "/":
      return "Home";
    case "/about":
      return "About";
    case "/labs":
      return "Labs";
  }
}
// In case if I want to make page transition in the future
export default function Template({ children }: PropsWithChildren) {
  return children;
}
