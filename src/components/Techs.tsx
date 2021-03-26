interface CardProps {
  name: string;
  src: string;
  href: string;
}

export function Card({ name, src, href }: CardProps) {
  return (
    <div className="shadow-xl rounded flex flex-col space-y-2 p-3 items-center overflow-auto  w-32">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-32 h-32 flex items-center justify-center"
      >
        <img src={src} alt={`${name} logo`} className="w-24 py-2" />
      </a>
      <h2>{name}</h2>
    </div>
  );
}

const langs = [
  {
    name: "Javascript",
    src: "/icons/Js.svg",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    src: "/icons/Ts.svg",
    href: "https://www.typescriptlang.org/",
  },
  {
    name: "HTML5",
    src: "/icons/Html.svg",
    href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  },
  {
    name: "CSS3",
    src: "/icons/Css.svg",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
];

const front = [
  {
    name: "React",
    src: "/icons/React.svg",
    href: "https://reactjs.org/",
  },
  {
    name: "React Native",
    src: "/icons/React.svg",
    href: "https://reactnative.dev/",
  },
  {
    name: "NextJS",
    src: "/icons/Next.svg",
    href: "https://nextjs.org/",
  },
  {
    name: "Sass",
    src: "/icons/Sass.svg",
    href: "https://sass-lang.com/",
  },
  {
    name: "Styled-Components",
    src: "https://avatars.githubusercontent.com/u/20658825?s=400&v=4",
    href: "https://styled-components.com/",
  },
  {
    name: "Material-UI",
    src: "https://material-ui.com/static/logo_raw.svg",
    href: "https://material-ui.com/",
  },
  {
    name: "Tailwind CSS",
    src: "/icons/Tailwind.svg",
    href: "https://tailwindcss.com/",
  },
];

const back = [
  {
    name: "NodeJS",
    src: "/icons/Node.svg",
    href: "https://nodejs.org/en/",
  },
  {
    name: "Api Routes",
    src: "/icons/Next.svg",
    href: "https://nextjs.org/docs/api-routes/introduction",
  },
  {
    name: "Express",
    src: "/icons/Express.svg",
    href: "https://expressjs.com/",
  },
];

const tools = [
  {
    name: "Git",
    src: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    href: "https://git-scm.com/",
  },
  {
    name: "Figma",
    src:
      "https://cdn.shopify.com/s/files/1/0284/7024/7555/products/figma2x_1048x.png?v=1591893627",
    href: "https://www.figma.com/",
  },
  {
    name: "Notion",
    src:
      "https://produtive.me/wp-content/uploads/2019/08/notion-logo-no-background.png",
    href: "https://www.notion.so/",
  },
];

export function Techs() {
  return (
    <section>
      <div
        id="Techs"
        className="max-w-screen-8xl mx-auto flex flex-col items-center space-y-9 px-4 py-12 text-main font-raj"
      >
        <h3
          className="font-raj font-semibold text-6xl pb-12
            max-sm:text-5xl "
        >
          Experience
        </h3>
        <p className="font-raj font-semibold text-xl max-sm:text-lg text-center">
          During my journey in Web Development, I studied and worked with the
          following technologies
        </p>
        <div id="Languages" className="w-full">
          <h4 className="text-2xl font-semibold text-main">Languages</h4>
          <div
            id="Cards"
            className="flex font-raj font-semibold w-1/2 max-midlle:w-3/4 max-md:w-full justify-between flex-wrap 
              max-sm:grid max-sm:grid-cols-2 max-sm:place-items-center
            "
          >
            {langs.map((lang) => (
              <Card name={lang.name} src={lang.src} href={lang.href} />
            ))}
          </div>
        </div>
        <div id="FrontEnd" className="w-full">
          <h4 className="text-2xl font-semibold text-main">Front-end</h4>
          <div
            id="Cards"
            className="flex font-raj font-semibold w-4/5 max-midlle:w-3/4 max-md:w-full items-center space-x-2 flex-wrap
              max-sm:grid max-sm:grid-cols-2 max-sm:place-items-center
            "
          >
            {front.map((item) => (
              <Card name={item.name} src={item.src} href={item.href} />
            ))}
          </div>
        </div>
        <div id="BackEnd" className="w-full ">
          <h4 className="text-2xl font-semibold text-main">Back-end</h4>
          <div
            id="Cards"
            className="flex font-raj font-semibold w-1/2 max-midlle:w-3/4 max-md:w-full justify-between
              max-sm:grid max-sm:grid-cols-2 max-sm:place-items-center
            "
          >
            {back.map((item) => (
              <Card name={item.name} src={item.src} href={item.href} />
            ))}
          </div>
        </div>
        <div id="Tools" className="w-full ">
          <h4 className="text-2xl font-semibold text-main">Tools</h4>
          <div
            id="Cards"
            className="flex font-raj font-semibold w-1/2 max-midlle:w-3/4 max-md:w-full justify-between
              max-sm:grid max-sm:grid-cols-2 max-sm:place-items-center
            "
          >
            {tools.map((item) => (
              <Card name={item.name} src={item.src} href={item.href} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
