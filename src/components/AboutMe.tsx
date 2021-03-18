export function AboutMe() {
  return (
    <section className="bg-main text-white">
      <div
        id="AboutMe"
        className="max-w-screen-8xl mx-auto flex px-4 pt-12 pb-12 space-y-4 
          flex-col 
          max-md:space-y-6 
          max-md:items-center
          max-md:space-x-0
          max-md:py-12
          " //////////
        style={{ scrollBehavior: "smooth" }}
      >
        <div
          id="AboutMeTitle"
          className="
            
            flex flex-col
            w-full
            items-center
            max-md:space-y-6  
          "
        >
          <h3
            className="
            font-raj font-semibold text-8xl
            max-sm:text-7xl 
          "
          >
            About Me
          </h3>
          <a
            href="#"
            className="px-4 py-2 bg-white text-main font-raj font-semibold rounded w-1/2 text-center"
          >
            Check my Resume/CV
          </a>
        </div>
        <div
          id="AboutMeContent"
          className="text-justify m-0
            max-md:w-full max-md:flex max-md:flex-col
            max-md:items-center"
        >
          <p className="font-raj font-semibold text-4xl max-sm:text-3xl">
            I'm Gabriel Prado, a Brazilian web developer that likes to solve
            problems!
            <br />
            Currently seeking new challenges to further develop myself!
          </p>
          <br />
          <p className="font-raj font-normal text-2xl max-sm:text-xl">
            I have started studying Web development in late 2019 and instantly
            fell in love with it! Since then I have tried to improve a little
            bit every single day in order to become a highly capable software
            developer! <br /> <br />
            Currently, I'm living in Brazil finishing my graduation in
            Information Systems at UFMS. I have about 1+ years of web
            development experience and it is only the beginning! <br /> <br />
            Developing solutions is definitely one of my favorite hobbies! I can
            spend several hours without noticing it, the feeling of
            accomplishing a difficult task is one of my favorite!
          </p>
        </div>
      </div>
    </section>
  );
}
