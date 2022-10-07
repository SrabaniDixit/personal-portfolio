import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img10.jpg";

import projImg11 from "../assets/img/project-img11.jpg";
import projImg12 from "../assets/img/project-img12.jpg";
import projImg13 from "../assets/img/project-img13.jpg";
import projImg14 from "../assets/img/project-img14.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certificates = () => {

  const certificates = [
    {
      title: "Web Development Internship",
      description: "The Sparks Foundation",
      imgUrl: projImg6,
    },
    {
      title: "Introduction to cloud computing",
      description: "IBM Skills Network",
      imgUrl: projImg1,
    },
    {
      title: "Introduction to Web Development with HTML, CSS, JavaScript",
      description: "IBM Skills Network",
      imgUrl: projImg5,
    },
    {
      title: "Developing Cloud Native Applications",
      description: "IBM Skills Network",
      imgUrl: projImg4,
    },
    {
      title: "Developing Cloud Apps with Node.js and React",
      description: "IBM Skills Network",
      imgUrl: projImg3,
    },
    {
      title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
      description: "IBM Skills Network",
      imgUrl: projImg2,
    },
   
    {
      title: "Google Cloud Fundamentals: Core Infrastructure",
      description: "Google Cloud",
      imgUrl: projImg11,
    },
    {
      title: "Essential Google Cloud Infrastructure: Foundation",
      description: "Google Cloud",
      imgUrl: projImg12,
    },
    {
      title: "Elastic Google Cloud Infrastructure: Scaling and Automation",
      description: "Google Cloud",
      imgUrl: projImg13,
    },
    {
      title: "Reliable Google Cloud Infrastructure: Design and Process",
      description: "Google Cloud",
      imgUrl: projImg14,
    },
  ];
  return (
    <section className="certificate" id="certificate">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Certificates</h2>
                <p>Listed below are some of the certifications that I obtained.</p>
                <Tab.Container id="certificates-tabs" defaultActiveKey="first">
                  <Nav  className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          certificates.map((certificate, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...certificate}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
  