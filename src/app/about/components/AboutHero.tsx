import SpotifyStats from "./SpotifyStats";
import { experiences } from "@/data/experiences";
import { skills } from "@/data/skills";

export default function AboutHero() {
  return (
    <div className="w-full flex flex-col pb-12">
      {/* Title */}
      <div className="py-2 flex items-center font-medium justify-between px-4 md:px-0 text-sm whitespace-nowrap">
        <SpotifyStats />
        <p>(づ ◕‿◕ )づ</p>
      </div>

      {/* Bio */}
      <div className="flex flex-col pt-10 px-4 md:px-0">
        <div className="flex items-center gap-2 font-medium">
          <h2 className="text-lg">Tengku Farhan</h2>
          <p className="text-black/50">@kebabhann</p>
        </div>
      </div>

      {/* At a glance */}
      <div className="flex flex-col gap-5 pt-12 font-medium px-4 md:px-0">
        <p className="text-lg">At a glance</p>
        <p className="text-black/50">
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
      <div className="flex flex-col gap-5 pt-10 font-medium px-4 md:px-0">
        <p className="text-lg">Brief</p>
        <p className="text-black/50">
          1+ years of experience in web app development with a focus on creating
          visually appealing and user-friendly websites for clients in various
          industries. Strong project management skills, ability to effectively
          communicate with cross-functional teams, and a keen eye for detail.
        </p>
      </div>

      {/* Experience */}
      <div className="w-full flex flex-col gap-5 pt-10 font-medium px-4 md:px-0">
        <p className="text-lg">Experience</p>
        <div className="flex flex-col items-start gap-10 pb-8 w-full">
          {experiences.map((experience, idx) => (
            <div
              key={idx}
              className="flex items-baseline gap-4 md:gap-6 w-full"
            >
              <div className="flex flex-col items-start gap-2 text-black w-full">
                <div className="w-full flex flex-col md:flex-row gap-2 items-start md:items-center justify-between">
                  <h3 className="font-medium text-base md:text-lg">
                    {experience.title}
                  </h3>
                  <p className="text-sm md:text-base text-black/50">
                    {experience.company}
                  </p>
                </div>

                <p className="text-sm text-black/50">{experience.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="flex flex-col gap-5 pt-10 font-medium px-4 md:px-0">
        <p className="text-lg">Education</p>
        <div className="flex flex-col items-start gap-10 pb-8">
          <div className="flex items-baseline gap-4 md:gap-6 w-full">
            <div className="flex flex-col items-start gap-2 text-black w-full">
              <div className="w-full flex flex-col md:flex-row gap-2 items-start md:items-center justify-between">
                <h3 className="font-medium text-base md:text-lg">
                  Frontend Developer Bootcamp
                </h3>
                <p className="text-sm md:text-base text-black/50">
                  Kawah Edukasi
                </p>
              </div>

              <p className="text-sm text-black/50">July 2022 - August 2022</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-5 pt-10 px-4 md:px-0">
        <p className="text-lg font-medium">Skills</p>
        <div className="flex gap-2 flex-wrap">
          {skills.map((skill) => (
            <a
              key={skill.link}
              href={skill.link}
              target="_blank"
              className="flex items-center gap-2 px-2 border border-black py-0.5 text-sm"
            >
              {skill.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
