import { ProjectsCard } from "./ProjectsCard";

export function Projects() {
  return (
    <section>
      <h3
        className="
            font-raj font-semibold text-8xl text-main text-center pt-12                 
            max-sm:text-7xl 
          "
      >
        Projects
      </h3>
      <div
        id="projects"
        className="max-w-screen-8xl mx-auto flex px-4 pt-12 pb-12 space-y-4 
          flex-col 
          space-y-10 
          items-center
          max-md:space-x-0
          max-md:py-12
          "
      >
        <ProjectsCard />
      </div>
    </section>
  );
}
