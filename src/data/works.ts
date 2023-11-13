import netraLogo from "@/assets/images/logo/netra_logo.png";
import maintekLogo from "@/assets/images/logo/maintek_logo.png";

export const works = [
  {
    icon: netraLogo,
    title: "Netra",
    link: "https://netra.live",
    desc: "Royalty sharing platform that allows fans to co-own a song, consequently supporting their favorite artists while earning royalties alongside them.",
    category: "Marketplace",
    showcase_img: {
      type: "img",
      src: "/assets/images/works/netra.png",
      fallback: "",
    },
  },
  {
    icon: maintekLogo,
    title: "Maintek Group",
    link: "https://maintekgroup.com",
    desc: "Full service general contracting & construction management company that offers a wide range of preconstruction & construction services tailored to meet specific project needs.",
    category: "Portfolio",
    showcase_img: {
      type: "video",
      src: "/assets/videos/maintek_video.webm",
      fallback: "/assets/fallback/maintek_poster.webp",
    },
  },
];
