import { getSpotifySong } from "@/server/api/spotify";
import Image from "next/image";

export default async function SpotifyStats() {
  const song = await getSpotifySong();
  if (song === null) return;
  return (
    <a
      href={song.songUrl}
      target="_blank"
      className="flex items-center bg-white gap-3 border pl-1.5 pr-2 py-1 rounded-full text-xs hover:bg-black hover:text-white hover:border-transparent group"
    >
      <div className="h-6 aspect-square rounded-full overflow-hidden relative">
        <Image
          src={song.coverUrl}
          alt={song.title}
          fill
          sizes="(max-width:768px) 50px, 60px"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center gap-1">
        <p className="max-w-[180px] truncate">{song.title}</p>
        <span className="hidden md:inline">-</span>
        <p className="text-black/50 group-hover:text-white/50 hidden md:inline">
          {song.artist}
        </p>
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
      </div>
    </a>
  );
}
