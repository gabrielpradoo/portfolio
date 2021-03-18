import { AboutMe } from "../components/AboutMe";
import { Apresentation } from "../components/Apresentation";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Apresentation />
      <AboutMe />
    </div>
  );
}
