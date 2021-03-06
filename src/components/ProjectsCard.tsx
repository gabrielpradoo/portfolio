export function ProjectsCard() {
  const projects = [
    {
      Name: "Gabriel do Prado - Personal Porfólio",
      Img: "/img/portfolio.png",
      Url: "/",
      Code: "https://github.com/praadin/portfolio",
      Description:
        "This is my personal portfolio made for people to see my projects and experiences.",
      Techs: ["NextJs", "Typescript", "Tailwind"],
    },
    {
      Name: "Move-it",
      Img: "/img/move-it.png",
      Url: "https://moveit-nlw99.vercel.app/",
      Code: "https://github.com/praadin/move-it",
      Description:
        "Move.it help peoples that stay long times on computer. With some challenges for you to move your body and eyes.",
      Techs: ["NextJs", "Typescript", "Css"],
    },
    {
      Name: "Spider-Man Hero Page",
      Img: "/img/spiderman.png",
      Url: "https://spiderman-pradin.vercel.app/",
      Code: "https://github.com/praadin/spiderman",
      Description:
        "Spider-Man Hero page created to learn Sass and Design principles.",
      Techs: ["Html", "Sass", "Javascript"],
    },
  ];

  return (
    <>
      {projects.map((item) => (
        <div
          id="ProjectCard"
          className="flex justify-around items-center bg-gray-300 p-6 rounded-md shadow-xl
          max-md:flex-col  max-md:space-y-5 font-raj
          "
        >
          <div id="left" className="w-2/5  max-md:w-11/12">
            <img
              src={item.Img}
              alt={item.Name}
              className="border border-gray-100"
            />
          </div>
          <div
            id="divider"
            className="w-px h-48 border border-main rounded-lg  max-md:hidden"
          ></div>
          <div
            id="right"
            className="w-1/2 text-main h-full flex flex-col space-y-5  max-md:w-10/12"
          >
            <div
              id="ProjectHeader"
              className="
         flex justify-between items-center
         max-sm:flex-col max-sm:items-start max-sm:space-y-5
       "
            >
              <h3 className="text-6xl font-semibold max-sm:text-4xl">
                {item.Name}
              </h3>
              <div className="flex space-x-3">
                <a
                  href={item.Url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 bg-main text-gray-300 
             rounded-md hover:opacity-80"
                >
                  Live
                </a>
                <a
                  href={item.Code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 bg-main text-gray-300 
             rounded-md hover:opacity-80"
                >
                  Source
                </a>
              </div>
            </div>
            <p className="text-xl font-semibold">{item.Description}</p>

            <div className="flex flex-col space-y-2">
              <span className="text-lg font-normal">Technologies used</span>
              <div id="Techs" className="flex space-x-4 flex-wrap">
                {item.Techs.map((tech) => {
                  if (tech == "NextJs") {
                    return <img src="/icons/Next.svg" alt="NextJs Logo" />;
                  } else if (tech == "ReactJs") {
                    return <img src="/icons/React.svg" alt="ReactJs Logo" />;
                  } else if (tech == "Typescript") {
                    return <img src="/icons/Ts.svg" alt="Typescript Logo" />;
                  } else if (tech == "Javascript") {
                    return <img src="/icons/Js.svg" alt="Javascript Logo" />;
                  } else if (tech == "MongoDB") {
                    return <img src="/icons/Mongo.svg" alt="MongoDB Logo" />;
                  } else if (tech == "Sass") {
                    return <img src="/icons/Sass.svg" alt="Sass Logo" />;
                  } else if (tech == "Tailwind") {
                    return (
                      <img src="/icons/Tailwind.svg" alt="Tailwind Logo" />
                    );
                  } else if (tech == "Css") {
                    return <img src="/icons/Css.svg" alt="Css3 Logo" />;
                  } else if (tech == "Html") {
                    return <img src="/icons/Html.svg" alt="Html Logo" />;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

// RESPONSIVIDADE DO PROJECTCARDS
// E VER O PONTO DE 900PX NO HEADER
