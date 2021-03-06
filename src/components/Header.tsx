import Link from "next/link";

export function Header() {
  return (
    <header className="w-full bg-main h-20 text-white font-raj">
      <div
        id="headerContent"
        className="flex justify-between items-center h-20 max-w-screen-8xl mx-auto max-md:justify-center"
      >
        <h1 className="text-5xl font-bold px-4 max-sm:text-4xl">
          Gabriel do Prado
        </h1>
        <nav className=" flex items-center gap-24 text-2xl font-bold max-md:hidden">
          <Link href="#AboutMe">
            <a className="px-4 py-2 hover:opacity-80">About Me</a>
          </Link>
          <Link href="#Projects">
            <a className="px-4 py-2 hover:opacity-80">Projects</a>
          </Link>
          <Link href="#">
            <a className="px-4 py-2 hover:opacity-80">Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
