import { stacks } from "@/data/stacks";
import { works } from "@/data/works";
import { writings } from "@/data/writings";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full flex flex-col pb-12 pt-4">
      {/* Title */}
      <div className="py-2 flex items-center font-medium justify-between px-4 md:px-0 text-sm whitespace-nowrap">
        <div className="flex items-center gap-3">
          <div className="flex items-center md:gap-1.5">
            <p>kebabhan</p>
            <p className="text-black/40 hidden md:inline">
              {"// frontend developer"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-green-400 w-2 aspect-square rounded-full"></div>
          <a
            href="mailto:farhanalryan2@gmail.com"
            className="text-xs font-normal flex items-center gap-1 hover:underline text-black/50"
          >
            <p>available for work</p>
          </a>
        </div>
      </div>
      {/* Desc */}
      <div className="pt-10 px-4 md:px-0">
        <p className="text-lg md:text-xl font-medium tracking-tight">
          Hi, I&apos;m Farhan!{" "}
          <span className="inline-bloxk text-black/40">
            {" "}
            <span className="tracking-normal">{"-->"}</span> As a passionate
            developer I&apos;ve been working through various fields of web apps,
            from{" "}
            <span className="inline-flex text-black/80 items-center gap-1">
              <span className="mt-1 md:mt-0.5">Web3</span>
            </span>{" "}
            to{" "}
            <span className="inline-flex text-black/80 items-center gap-1">
              <span className="mt-1 md:mt-0.5">Enterprise</span>
            </span>
            .<br />I strive to push the boundaries of software and create
            meaningful experiences for my clients and their users.
          </span>
        </p>
      </div>

      {/* Hire me please :) */}
      <div className="pt-6 px-4 md:px-0 flex items-start">
        <a
          href="mailto:farhanalryan2@gmail.com"
          className="bg-black hover:bg-neutral-700 text-white px-4 rounded-full py-1.5 font-medium text-sm flex items-center gap-2"
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
          <div className="font-medium  rounded-full px-3 py-1 text-sm flex items-center gap-2 bg-blue-50 text-blue-500">
            <p>Recent Work</p>
          </div>
        </div>
        <div className="flex flex-col pt-6 md:pt-8 gap-5">
          {works.map((work) => (
            <div
              key={work.title}
              className="flex flex-col items-center gap-4 border p-4"
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
                    className="object-cover w-full h-full"
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
                  <div className="flex items-center gap-2 text-black/40 text-sm">
                    {work.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stacks */}
      <div className="pt-14 px-4 md:px-0 font-medium">
        <div className="w-full flex items-center justify-start gap-3">
          <div className="font-medium  rounded-full px-3 py-1 text-sm flex items-center gap-2 bg-blue-50 text-blue-500">
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
              <p className="ml-auto text-black/40 text-xs md:text-sm">
                {stack.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Writings */}
      <div className="pt-14 px-4 md:px-0 font-medium">
        <div className="w-full flex items-center justify-start gap-3">
          <div className="font-medium  rounded-full px-3 py-1 text-sm flex items-center gap-2 bg-blue-50 text-blue-500">
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
                className="uppercase text-sm hover:underline"
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
