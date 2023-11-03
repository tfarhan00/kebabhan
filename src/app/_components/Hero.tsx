import { stacks } from "@/data/stacks";
import { works } from "@/data/works";
import { writings } from "@/data/writings";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full flex flex-col pb-12 pt-4 text-black/90 dark:text-white/90">
      {/* Desc */}
      <div className="pt-10 px-4 md:px-0 flex flex-col gap-5">
        <p className="text-lg md:text-xl font-medium">
          Hi, I&apos;m Farhan!{" "}
          <span className="text-black/40 dark:text-white/50">
            {" "}
            <span className="tracking-normal">{"-->"}</span>
            <span className="font-vt323 text-[26px] font-normal">
              {" "}
              Full-stack Developer
            </span>{" "}
            💻
            <br />
          </span>
        </p>
        <p className="text-black/40 dark:text-white/50 font-medium md:text-lg tracking-tight md:tracking-normal">
          I&apos;ve been working through various fields of web and mobile apps
          from{" "}
          <span className="inline-flex text-black/80 dark:text-white/80">
            Web3
          </span>{" "}
          to{" "}
          <span className="inline-flex text-black/80 dark:text-white/80">
            Enterprise
          </span>
          . I&apos;m passionate about pushing the limits of software to craft
          meaningful experiences for both my clients and their users. Take a
          drink and happy exploring {":)"}
        </p>
      </div>

      {/* Hire me please :) */}
      <div className="pt-8 px-4 md:px-0 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-green-400 w-2 aspect-square rounded-full"></div>
          <p className="text-xs md:text-sm text-black/40 dark:text-white/50">
            Available for work
          </p>
        </div>
        <a
          href="mailto:kebabhandev@gmail.com"
          className="bg-black/90 dark:bg-white/90 dark:text-black dark:hover:bg-neutral-100 hover:bg-neutral-700 text-white px-4 rounded-full py-1.5 font-medium text-xs md:text-sm flex items-center gap-2"
        >
          Discuss a project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up-right"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      </div>

      {/* Works */}
      <div className="mt-20 px-4 md:px-0 font-medium">
        <div className="w-full flex items-center justify-start gap-3">
          <div className="font-medium rounded-full px-3 py-1 text-sm flex items-center gap-2 bg-blue-50 text-blue-500 dark:text-blue-400 dark:bg-blue-400/10">
            <p>Recent Work</p>
          </div>
        </div>
        <div className="flex flex-col pt-6 md:pt-8 gap-5">
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

      {/* Stacks */}
      <div className="pt-16 px-4 md:px-0 font-medium">
        <div className="w-full flex items-center justify-start gap-3">
          <div className="font-medium rounded-full px-3 py-1 text-sm flex items-center gap-2 bg-blue-50 text-blue-500 dark:text-blue-400 dark:bg-blue-400/10">
            <p>Tech Stack</p>
          </div>
        </div>

        <div className="flex flex-col gap-8 pt-6 md:pt-8 ">
          {stacks.map((stack) => (
            <div key={stack.name} className="flex items-center gap-3">
              <div className="bg-white h-6 aspect-square rounded-full overflow-hidden dark:bg-knight relative">
                <Image
                  src={stack.icon}
                  alt={stack.name}
                  fill
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 60px, 90px"
                  loading="lazy"
                />
              </div>
              <a
                href={stack.link}
                target="_blank"
                className="text-sm md:text-base"
              >
                {stack.name}
              </a>
              <p className="ml-auto text-black/40 dark:text-white/50 text-xs md:text-sm">
                {stack.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Writings */}
      <div className="pt-16 px-4 md:px-0">
        <div className="w-full flex items-center justify-start gap-3">
          <div className="font-medium rounded-full px-3 py-1 text-sm flex items-center gap-2 bg-blue-50 text-blue-500 dark:text-blue-400 dark:bg-blue-400/10">
            <p>Latest Article</p>
          </div>
        </div>

        <div className="flex flex-col pt-6 md:pt-8 ">
          {writings.map((write) => (
            <div key={write.title} className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
              <a
                href={write.link}
                target="_blank"
                className="text-sm md:text-base hover:underline font-medium"
              >
                {write.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
