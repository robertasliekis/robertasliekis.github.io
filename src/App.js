import React, { Component } from "react";

import WelcomeSection from "./components/WelcomeSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WhiteBox from "./components/WhiteBox";

import "./App.css";

export class App extends Component {
  // homepage: "https://robertasliekis.github.io/",
  render() {
    return (
      <div className="website-wrapper">
        <WelcomeSection />
        <WhiteBox />
        <About />
        <WhiteBox />
        <Projects />
        <WhiteBox />
        <Contact />
      </div>
    );
  }
}

export default App;
