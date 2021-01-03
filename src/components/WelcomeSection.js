import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

export class WelcomeSection extends Component {
  scrollToSection(element) {
    const projectsOffset = $("." + element).offset().top;
    $("html,body").animate({ scrollTop: projectsOffset }, "slow");
  }

  render() {
    return (
      <div className="welcome-section wrapper">
        <div className="background-container" id="background-container">
          <div className="points-container"></div>
        </div>
        <div className="welcome-content container">
          <div className="welcome-text">
            <div className="text-line text-line1">
              Hello, I'm
              <span className="colored-text">ROBERTAS LIEKIS.</span>
            </div>
            <div className="text-line text-line2">I'm front-end developer.</div>
            <div className="button-wide" onClick={() => this.scrollToSection("projects-section")}>
              View my work
              <div className="icon-container">
                <FontAwesomeIcon icon={faArrowRight} className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomeSection;
