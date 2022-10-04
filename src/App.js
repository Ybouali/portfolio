import Navbar from "./components/Navbar";
import Skills from "./page/Skills";
import About from "./page/About";
import Home from "./page/Home";
import Work from "./page/Work";
import Contact from "./page/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}
