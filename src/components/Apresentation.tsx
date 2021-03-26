export function Apresentation() {
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
        <a
          href="https://github.com/praadin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/GitHub.svg" alt="GitHub" className="w-11 h-11" />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-do-prado-de-oliveira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/Linkedin.svg" alt="Linkedin" className="w-11 h-11" />
        </a>
        <a
          href="https://www.instagram.com/gabrielpraado_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/Instagram.svg"
            alt="Instagram"
            className="w-11 h-11"
          />
        </a>
      </div>
    </section>
  );
}
