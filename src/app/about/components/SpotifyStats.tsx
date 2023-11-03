import { getSpotifySong } from "@/app/api/spotify/route";
import Image from "next/image";

export default async function SpotifyStats() {
  const song = await getSpotifySong();
  if (song === null) return;
  return (
    <div className="flex items-center gap-3">
      <div className="h-5 aspect-square rounded-full overflow-hidden relative">
        <Image
          src={song.coverUrl}
          alt={song.title}
          fill
          sizes="(max-width:768px) 50px, 60px"
          className="w-full h-full object-cover"
        />
      </div>
      <a
        href={song.songUrl}
        target="_blank"
        className="flex items-center gap-1 hover:underline"
      >
        <p className="max-w-[180px] truncate">{song.title}</p>
        <span className="hidden md:inline">-</span>
        <p className="text-black/50 hidden md:inline">{song.artist}</p>
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
  );
}
