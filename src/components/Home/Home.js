import React from "react";
import Intro from "../Intro/Intro";
import Project from "../Project/Project";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <div>
      <Intro />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default Home;
