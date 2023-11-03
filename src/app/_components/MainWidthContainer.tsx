import { PropsWithChildren } from "react";

export default function MainWidthContainer({ children }: PropsWithChildren) {
  return (
    <div className="w-full max-w-xl flex flex-col overflow-hidden">
      {children}
    </div>
  );
}
