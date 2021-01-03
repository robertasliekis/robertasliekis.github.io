import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projects = [
  {
    name: "SWIFT ARCHITECTS WEBSITE",
    image: 1,
    description: "Fully responsive website for a company Swift Architects, a hypothetical studio which offers architectural services.",
    technologies: ["HTML", "CSS", "Sass", "Javascript", "Animations", "Responsive"],
    links: ["https://github.com/robertasliekis/architecture-website/", "https://robertasliekis.github.io/architecture-website/"]
  },
  {
    name: "MARVEL HERO SEARCH",
    image: 10,
    description:
      "Marvel heroes search website made using Marvel's public API. Search for your favourite super hero, get info about their history, creators and comic books.",
    technologies: ["HTML", "CSS", "Sass", "Javascript", "Animations", "Responsive", "Public API", "React"],
    links: ["https://github.com/robertasliekis/hero-search-code/", "https://robertasliekis.github.io/hero-search/"]
  },
  {
    name: "REACT LOGIN/REGISTER",
    image: 13,
    description: "Simple register/login website made using React and Redux.",
    technologies: ["React", "Redux", "Sass", "Javascript", "Responsive"],
    links: ["https://github.com/robertasliekis/movies-database/", "https://robertasliekis.github.io/movies-database/"]
  },
  {
    name: "MOVIES DATABASE APP",
    image: 9,
    description:
      "Movies database website made using TMDb API. Search for a movie by name or by genre. Check out upcoming and trending movies.",
    technologies: ["HTML", "CSS", "Sass", "Javascript", "jQuery", "Responsive", "Public API"],
    links: ["https://github.com/robertasliekis/movies-database/", "https://robertasliekis.github.io/movies-database/"]
  },
  {
    name: "FLUX DIGITAL WEBSITE",
    image: 2,
    description:
      "Fully responsive single page website for a company Flux Digital, a hypothetical business which offers digital marketing services.",
    technologies: ["HTML", "CSS", "Sass", "Javascript", "Animations", "Responsive"],
    links: ["https://github.com/robertasliekis/flux-digital-website", "https://robertasliekis.github.io/flux-digital-website/"]
  },
  {
    name: "ROULETTE GAME",
    image: 3,
    description: "Casino roulette game where you can bet, roll and win big money.",
    technologies: ["HTML", "CSS", "Sass", "Javascript", "Animations", "Responsive", "jQuery"],
    links: ["https://github.com/robertasliekis/roulette-game/", "https://robertasliekis.github.io/roulette-game/"]
  },
  {
    name: "VUE LOGIN/REGISTER WEBSITE",
    image: 12,
    description: "Register and login website made using Vue.js and Ant Design.",
    technologies: ["HTML", "CSS", "Sass", "Javascript", "Vue", "Ant Design"],
    links: ["https://github.com/robertasliekis/login-vue/", "https://robertasliekis.github.io/login-vue/"]
  },
  {
    name: "DELICIOUSSIO WEBSITE",
    image: 4,
    description:
      "Fully responsive single page website for a restaurant Delicioussio, a hypothetical place which offers breakfast, lunch and dinner services.",
    technologies: ["HTML", "CSS", "Sass", "Javascript", "Animations", "Responsive", "Parallax"],
    links: ["https://github.com/robertasliekis/delicioussio-website/", "https://robertasliekis.github.io/delicioussio-website/"]
  },
  {
    name: "WEATHER FORECAST APP",
    image: 8,
    description: "Weather forecast website made using OpenWeatherMap API.",
    technologies: ["HTML", "CSS", "Sass", "Javascript", "Responsive", "Public API"],
    links: ["https://github.com/robertasliekis/weather-forecast/", "https://robertasliekis.github.io/weather-forecast/"]
  },
  {
    name: "VINTAGE CYCLES WEBSITE",
    image: 5,
    description: "I love cycling myselft, so I thought to build single page website for a hypothetical shop Vintage Cycles.",
    technologies: ["HTML", "CSS", "Sass", "Javascript", "Responsive", "Animations"],
    links: ["https://github.com/robertasliekis/vintage-cycles-website/", "https://robertasliekis.github.io/vintage-cycles-website/"]
  },
  {
    name: "POMODORO TIMER APP",
    image: 7,
    description: "Customizable and easy to use looping timer to boost your working efficiency.",
    technologies: ["HTML", "CSS", "Sass", "Javascript", "Responsive", "Animations"],
    links: ["https://github.com/robertasliekis/pomodoro-timer/", "https://robertasliekis.github.io/pomodoro-timer/"]
  },
  {
    name: "BOOK SEARCH",
    image: 11,
    description: "Book search website made using Google Book API. Search for any book, read it's info and check out different genres.",
    technologies: ["HTML", "CSS", "Sass", "Javascript", "React", "Public API", "Responsive", "Animations"],
    links: ["https://github.com/robertasliekis/book-search-code/", "https://robertasliekis.github.io/book-search/"]
  }
];

export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectOpen: false,
      projectOpenNumber: null
    };
    this.projectRefs = {};
    // this.mediaScreenRef = React.createRef();
  }

  projectOpenClicked = (index) => {
    let projectsCount = Object.keys(this.projectRefs).length;
    for (let i = 0; i < projectsCount; i++) {
      this.projectRefs[i].classList.remove("project-open");
    }
    if (this.state.projectOpenNumber !== index) {
      this.projectRefs[index].classList.add("project-open");
      this.setState({ projectOpen: true, projectOpenNumber: index });
    } else {
      this.setState({ projectOpen: false, projectOpenNumber: null });
    }
  };

  render() {
    return (
      <div className="projects-section wrapper">
        <div className="projects-content container">
          <h1 className="content-heading">PROJECTS</h1>
          <div className="projects">
            {/* Projects map start------- */}
            {projects.map((project, index) => {
              return (
                <div
                  className={`project project${index}`}
                  key={`${index}`}
                  ref={(ref) => {
                    this.projectRefs[index] = ref;
                  }}
                >
                  <div
                    className={`project-image project-image${index}`}
                    style={{ backgroundImage: `url(./images/project-${project.image}.webp)` }}
                  >
                    <div className="project-overlay">
                      <div className="buttons">
                        <a aria-label="project-link" href={project.links[0]} className="button button1 button-round">
                          <FontAwesomeIcon icon={faGithub} className="icon" />
                        </a>
                        <div className="button button2 button-round" onClick={() => this.projectOpenClicked(index)}>
                          <FontAwesomeIcon icon={faPlus} className="icon" />
                        </div>
                        <a aria-label="project-link" href={project.links[1]} className="button button3 button-round">
                          <div className="text">See live</div>
                          <FontAwesomeIcon icon={faArrowRight} className="icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Project about  */}
                  <div className="project-about">
                    <h1 className="title">{project.name}</h1>
                    <div className="description">
                      {project.description}
                      <div className="technologies-list">
                        {project.technologies.map((technology, index) => {
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
                </div>
              );
            })}
            {/* Projects map end------- */}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
