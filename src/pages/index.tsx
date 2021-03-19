import { AboutMe } from "../components/AboutMe";
import { Apresentation } from "../components/Apresentation";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Header />
      <Apresentation />
      <AboutMe />
      <Projects />
    </div>
  );
}
