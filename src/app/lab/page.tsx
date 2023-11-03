import { Metadata } from "next";
import { labItems } from "./items";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kebabhan - Lab",
};

export default function LabPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center px-5">
      <div className="w-full max-w-xl pb-20 pt-6 flex flex-col gap-6">
        <div className="w-full flex items-center justify-start gap-3">
          <div className="font-medium rounded-full px-3 py-1 flex items-center gap-2 bg-blue-50 text-blue-500 dark:text-blue-400 dark:bg-blue-400/10">
            <p>Lab</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {labItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-4 items-start relative"
            >
              {<item.component />}
              {item.path === null ? null : (
                <Link
                  href={`/lab/${item.path}`}
                  className="bg-white border h-8 aspect-square rounded-full text-sm flex items-center justify-center gap-2 absolute top-3 right-3"
                >
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
                </Link>
              )}
              <div className="absolute pointer-events-none bottom-4 left-4 bg-neutral-200 px-4 py-1.5 text-xs rounded-full text-neutral-600 dark:text-white/80 dark:bg-white/5">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
