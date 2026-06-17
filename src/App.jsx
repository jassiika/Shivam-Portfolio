import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CharacterMessage from "./components/CharacterMessage";
import Loader from "./components/Loader";

function App() {
  const [message, setMessage] = useState("");
  const [animation, setAnimation] = useState("greeting");

  return (
    <>
      <Loader />
      <CharacterMessage message={message} />
      <Navbar
        setMessage={setMessage}
        setAnimation={setAnimation}
      />

      <main>
        <Hero animation={animation} />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
