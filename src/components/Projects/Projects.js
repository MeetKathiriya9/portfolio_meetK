import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="TalkFusion"
              description="Personal Chat Room or Workspace to share Messages and hangout with friends build with react.js, node.js, and Firebase Firestore. Have features which allows user for realtime messaging as well as supports reactions on messages, restrict bad words, sentimate analysis, translate messages into other language by just one click and many more."
              ghLink="https://github.com/MeetKathiriya9/TalkFusion"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Dream Estate"
              description="SYSTEM FOR REAL ESTATE MANAGEMENT. This project is about real estate industry which includes frontend and backend in React Js, Vite JS, Node Js, Express JS with database functionalities like Add New Product, Search Products and many like E-Commerce Project."
              ghLink="https://github.com/MeetKathiriya9/DreamEstate.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Lafka Food"
              description="SYSTEM FOR SHOPPING TO FOOD ITEMS. Developed this project with React Js. There are many functionalities in this project like Add to cart, Api calling etc. "
              ghLink="https://github.com/MeetKathiriya9/Lafka_Food.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather App"
              description="SYSTEM FOR GETTING REAL TIME WEATHER INFORMATION FROM API. This tool serves the information about weather from API and help us to know what situation is there in any specific city. With it you can know the predicted time of sunrise and sunset of particular city. 
"
              ghLink="https://github.com/MeetKathiriya9/weather-app.git"
              demoLink="https://weather-app-amber-mu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="LOGIS SAMPLE WEBSITE"
              description="Developed this website with HTML And CSS (Responsive Website) ."
              ghLink="https://github.com/MeetKathiriya9/Logis_sample.git"
              demoLink="https://heroic-florentine-253ac8.netlify.app" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TextAssist.ai"
              description="textassist.ai leverages cutting-edge AI to revolutionize text assistance, offering seamless solutions for paraphrasing, summarization, translation, and beyond. Redefine productivity and elevate your creative expression with innovation at your fingertips." 
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://textassist.coderkubes.com"
            />
           </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
