import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const social = [
  {
    name: "GitHub",
    src: "AiFillGithub",
    href: "https://github.com/praadin",
  },
  {
    name: "LinkedIn",
    src: "AiFillLinkedin",
    href: "https://www.linkedin.com/in/gabriel-do-prado-de-oliveira/",
  },
  {
    name: "Instagram",
    src: "AiFillInstagram",
    href: "https://www.instagram.com/gabrielpraado_/",
  },
];

export function Apresentation({}) {
  return (
    <section className="mx-auto flex flex-col items-center space-y-12 bg-gray-300 py-12 font-raj">
      <img
        alt="Gabriel do Prado"
        className="w-96 h-96 rounded-full max-md:w-80 max-md:h-80 "
        src="https://avatars.githubusercontent.com/u/49601365?s=460&u=1633c8a8fbbbf85f0cedadba216dcf3d70463eda&v=4"
      />
      <h2 className="text-5xl font-bold text-main text-center uppercase">
        Fullstack
        <br />
        Developer
      </h2>

      <div className="text-4xl font-bold text-main uppercase flex gap-1 max-sm:flex-col max-sm:gap-2 items-center">
        <p>React</p> <span className="max-sm:hidden">-</span>{" "}
        <p>React Native</p> <span className="max-sm:hidden">-</span>
        <p>NodeJs</p>
      </div>

      <div id="social" className="flex space-x-12 mb-12">
        {social.map((item) => (
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.src === "AiFillGithub" && (
              <AiFillGithub className="w-11 h-11 text-main" />
            )}
            {item.src === "AiFillLinkedin" && (
              <AiFillLinkedin className="w-11 h-11 text-main" />
            )}
            {item.src === "AiFillInstagram" && (
              <AiFillInstagram className="w-11 h-11 text-main" />
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
