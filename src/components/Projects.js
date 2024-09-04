import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import weather_app from "../assets/img/weather_app.png";
import netflix from "../assets/img/netflix.png";
import epis from "../assets/img/epis.png";
import RSP from "../assets/img/RPS.png";
import todo from "../assets/img/todo.png";
import login from "../assets/img/login.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Epestemico Website",
      description: "A dynamic website for my college's fest, 'Epestemico' created using HTML, CSS, and JavaScript, featuring event details, schedules, and an engaging user experience.",
      imgUrl: epis,
      repoUrl: "https://github.com/Kriti523/Epistemico-23"
    },
    {
      title: "Rock, Paper and Scissors",
      description: "An interactive Rock, Paper, Scissors game built with HTML, CSS, and JavaScript, featuring a fun and responsive interface that allows users to play against the computer. & Development",
      imgUrl: RSP,
      repoUrl:"https://github.com/Kriti523/Rock-paper-and-scissors-Game-"
    },
    {
      title: "Netflix Clone",
      description:
        "A pixel-perfect Netflix homepage clone built purely on HTML and CSS, showcasing attention to detail and design precision while replicating the original layout and styling.",
      imgUrl: netflix,
      repoUrl: "https://github.com/Kriti523/Netflix_clone"
    },
    {
      title: "Weather App",
      description:
        "built with HTML, Bootstrap, and JavaScript that provides real-time weather data, including temperature, humidity, and wind speed, with a clean and responsive user interface.",
      imgUrl: weather_app,
      repoUrl: "https://github.com/Kriti523/Weather_App"
    },
    {
      title: "TO-DO App",
      description:
        "A React-based to-do list application featuring full CRUD operations, allowing users to create, read, update, and delete tasks with ease.",
      imgUrl: todo,
      repoUrl:"https://github.com/Kriti523/To-Do-List"
    },
    {
      title: "Login-Signup Page",
      description:
        "A React-based login/signup page with a backend supported by local storage, providing a seamless user authentication experience without relying on a server.",
      imgUrl: login,
      repoUrl: "https://github.com/Kriti523/Login-Signup-Page"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Crafts and Contributions</h2>
                  <p>
                    Explore the journey through my professional experience and
                    the projects I've crafted. Each step reflects my growth,
                    creativity, and dedication to building impactful solutions.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <div className="experience-container">
                          <h2 className="experience-title">Traya Health</h2>
                          <h1 className="experience-title">
                            Software Development Engineer Intern
                          </h1>
                          <h3 className="experience-duration centered-text">
                            June 14 - August 14 | Bangalore
                          </h3>
                          <p className="experience-description">
                            I had an incredible time at Traya Health, where I
                            got to dive into exciting projects and work with an
                            amazing team. From giving the product drawer a fresh
                            look with TypeScript and React Query to redesigning
                            the How-to-Use Products page (which boosted user
                            satisfaction by 20%!), every day was a new
                            adventure. I also tackled migrating project assets
                            to a CDN, slashing page load times by 30%, and used
                            TypeScript to cut bugs by 25%. The highlight?
                            Collaborating with talented colleagues and soaking
                            up all the knowledge Bangalore had to offer. It was
                            more than just work—it was a fantastic learning
                            experience and a lot of fun!
                          </p>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
