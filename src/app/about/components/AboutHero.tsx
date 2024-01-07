import SpotifyStats from "./SpotifyStats";
import { experiences } from "@/data/experiences";
import { skills } from "@/data/skills";

export default function AboutHero() {
  return (
    <div className="w-full flex flex-col pb-12 font-medium">
      {/* Title */}
      <div className="relative py-4 bg-black flex items-end rounded-b-xl font-medium justify-between px-4 h-32 text-sm whitespace-nowrap"></div>

      {/* Bio */}
      <div className="flex flex-col items-start md:flex-row md:items-center gap-3 justify-between pt-10 px-4 md:px-0 w-full">
        <div className="flex flex-col items-start font-medium">
          <h2 className="text-lg">Tengku Farhan</h2>
          <p className="text-neutral-400">@kebabhan</p>
        </div>
        <SpotifyStats />
      </div>

      {/* At a glance */}
      <div className="flex flex-col gap-6 pt-16 px-4 md:px-0 items-start">
        <div className="font-medium  rounded-full px-3 py-1 text-sm flex items-center gap-2 bg-blue-50 text-blue-500">
          <p>At a glance</p>
        </div>
        <p className="text-neutral-400">
          Hi there! I&apos;m a frontend engineer building{" "}
          <a
            href="https://unbound-studio.vercel.app/"
            className="text-black inline-block"
          >
            @unboundvisual
          </a>{" "}
          but don&apos;t worry I&apos;m open to any project or work
        </p>
      </div>

      {/* Brief */}
      <div className="flex flex-col gap-6 pt-16 px-4 md:px-0 items-start">
        <div className="font-medium rounded-full px-3 py-1 text-sm flex items-center gap-2 bg-blue-50 text-blue-500">
          <p>Brief</p>
        </div>
        <p className="text-neutral-400">
          2+ years of experience in web app development with a focus on creating
          visually appealing and user-friendly websites for clients in various
          industries. Strong project management skills, ability to effectively
          communicate with cross-functional teams, and a keen eye for detail.
        </p>
      </div>

      {/* Experience */}
      <div className="w-full flex flex-col gap-6 pt-16 px-4 md:px-0 items-start">
        <div className="font-medium  rounded-full px-3 py-1 text-sm flex items-center gap-2 bg-blue-50 text-blue-500">
          <p>Experience</p>
        </div>
        <div className="flex flex-col items-start gap-10 w-full">
          {experiences.map((experience, idx) => (
            <div
              key={idx}
              className="flex items-baseline gap-4 md:gap-6 w-full"
            >
              <div className="flex flex-col items-start gap-2 text-black w-full">
                <div className="w-full flex flex-col md:flex-row gap-2 items-start md:items-center justify-between">
                  <h3 className="text-base md:text-lg">{experience.title}</h3>
                  <p className="text-sm md:text-base text-neutral-400">
                    {experience.company}
                  </p>
                </div>

                <p className="text-sm text-neutral-400">{experience.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="flex flex-col gap-6 pt-16 px-4 md:px-0 items-start">
        <div className="font-medium rounded-full px-3 py-1 text-sm flex items-center gap-2 bg-blue-50 text-blue-500">
          <p>Education</p>
        </div>
        <div className="flex flex-col items-start gap-10 w-full">
          <div className="flex items-baseline gap-4 md:gap-6 w-full">
            <div className="flex flex-col items-start gap-2 text-black w-full">
              <div className="w-full flex flex-col md:flex-row gap-2 items-start md:items-center justify-between">
                <h3 className="text-base md:text-lg">
                  Frontend Developer Bootcamp
                </h3>
                <p className="text-sm md:text-base text-neutral-400">
                  Kawah Edukasi
                </p>
              </div>

              <p className="text-sm text-neutral-400">
                July 2022 - August 2022
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-6 pt-16 px-4 md:px-0 items-start">
        <div className="font-medium  rounded-full px-3 py-1 text-sm flex items-center gap-2 bg-blue-50 text-blue-500">
          <p>Skills</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {skills.map((skill) => (
            <a
              key={skill.link}
              href={skill.link}
              target="_blank"
              className="flex items-center gap-2 px-2.5 border text-neutral-400 hover:bg-neutral-100 py-0.5 text-sm rounded-full"
            >
              {skill.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
