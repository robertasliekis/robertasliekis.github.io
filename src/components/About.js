import React, { Component } from "react";

const technologies = ["HTML", "CSS", "Sass", "JavaScript", "React", "Redux", "Git", "GitHub", "Photoshop"];

export class About extends Component {
  render() {
    return (
      <div className="about-section wrapper">
        <div className="about-content container">
          <h1 className="content-heading">ABOUT</h1>
          <div className="about-info">
            <div className="profile-picture"></div>
            <p>
              I am a front-end developer based in Vilnius, Lithuania. Started learning front-end development by myself in december 2019.
              Before becoming a developer I was working with 3d graphics and animations where I learned a lot creative thinking, animations,
              timing, design, product delivery and keeping work simple.
            </p>
          </div>
          <div className="technologies-list">
            {technologies.map((technology, index) => {
              return (
                <div className="technology" key={index}>
                  <div className="dot"></div>
                  {technology}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
