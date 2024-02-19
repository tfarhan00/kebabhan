import { works } from "@/data/works";
import Image from "next/image";

export default function WorksContent() {
  return (
    <div className="w-full pb-20 pt-6 flex flex-col px-4 md:px-0 text-black/90 dark:text-white/90">
      <div className="w-full flex items-center justify-start gap-3">
        <div className="font-medium rounded-md px-3 py-1 flex items-center gap-2 bg-blue-50 text-blue-500 dark:text-blue-400 dark:bg-blue-400/10">
          <p>Works</p>
        </div>
      </div>
      <div className="flex flex-col pt-6 gap-5">
        {works.map((work) => (
          <div
            key={work.title}
            className="flex flex-col items-center gap-4 border p-5 rounded-xl dark:border-white/10"
          >
            <a
              className="overflow-hidden w-full h-[300px] md:h-[400px] relative"
              target="_blank"
              href={work.link}
            >
              {work.showcase_img.type === "video" ? (
                <video
                  muted
                  loop
                  autoPlay
                  playsInline
                  width="1918"
                  height="954"
                  className="object-contain w-full h-full"
                  poster={work.showcase_img.fallback}
                >
                  <source src={work.showcase_img.src} type="video/webm" />
                </video>
              ) : work.showcase_img.type === "img" ? (
                <div className="w-full h-full relative">
                  <Image
                    src={work.showcase_img.src}
                    alt={work.title}
                    fill
                    sizes="(max-width:768px) 600px, 800px"
                    className="w-full h-full object-cover"
                    priority={true}
                  />
                </div>
              ) : null}
            </a>
            <div className="w-full flex flex-col gap-2 items-start justify-between">
              <div className="w-full flex items-center justify-between gap-3">
                <a
                  href={work.link}
                  target="_blank"
                  className="flex items-center gap-1"
                >
                  {work.title}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
                <div className="flex items-center gap-2 text-black/40 dark:text-white/50 text-sm">
                  {work.category}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
