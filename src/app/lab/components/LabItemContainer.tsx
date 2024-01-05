import { PropsWithChildren } from "react";

export default function LabItemContainer({ children }: PropsWithChildren) {
  return (
    <div className="w-full border bg-neutral-50 min-h-[300px] rounded-md">
      {children}
    </div>
  );
}
