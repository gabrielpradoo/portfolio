import { ProjectsCard } from "./ProjectsCard";

export function Projects() {
  return (
    <section id="Projects">
      <h3
        className="
            font-raj font-semibold text-6xl text-main text-center pt-12                 
            max-sm:text-5xl 
          "
      >
        Projects
      </h3>
      <div
        id="ProjectsContent"
        className="max-w-screen-8xl mx-auto flex px-4 pt-12 pb-12 space-y-4 
          flex-col 
          space-y-10 
          items-center
          max-md:space-x-0
          max-md:py-12
          "
      >
        <ProjectsCard />

        <p className="pt-12 text-lg font-raj font-semibold text-center">
          For more projects, please, access my{" "}
          <a
            href="https://github.com/praadin"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600"
          >
            GitHub Profile
          </a>
        </p>
      </div>
    </section>
  );
}
