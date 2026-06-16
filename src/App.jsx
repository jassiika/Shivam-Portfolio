import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThreeScene from "./components/ThreeScene";
import CharacterMessage from "./components/CharacterMessage";

function App() {
  const [message, setMessage] = useState("");

  return (
    <>
      <ThreeScene />
      <CharacterMessage message={message} />
      <Navbar setMessage={setMessage} />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;