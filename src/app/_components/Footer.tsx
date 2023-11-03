export default function Footer() {
  return (
    <div className="w-full py-2 mb-16 md:mb-0 flex items-center justify-between px-4 md:px-0 text-sm">
      <p>2023 &copy; kebabhan</p>
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/tfarhan00"
          target="_blank"
          className="hover:underline"
        >
          github
        </a>
        <span>/</span>
        <a
          href="https://www.instagram.com/kebabhan_/"
          target="_blank"
          className="hover:underline"
        >
          insta
        </a>
        <span>/</span>
        <a
          href="https://twitter.com/kebabhandev"
          target="_blank"
          className="hover:underline"
        >
          x
        </a>
        <span>/</span>
        <a
          href="https://www.linkedin.com/in/tengkufarhan/"
          target="_blank"
          className="hover:underline"
        >
          linkedin
        </a>
      </div>
    </div>
  );
}
