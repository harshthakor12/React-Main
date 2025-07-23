import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 bg-light" id="home">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 fw-bold">
                Red and White Skill Education
              </h1>
              <p className="lead">
                We Provide Best IT Solutions:Gujarat's #1 Web Design Course
                Training Institute
              </p>
              <Button variant="primary">Get Started</Button>
            </Col>
            <Col md={6}>
              <img
                src="https://www.rnwmultimedia.edu.in/assets/img/slider/rnw_web_slider.png"
                alt="Hero"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Brand Logos */}
      <section className="py-5 bg-white" id="about">
        <Container className="text-center">
          <h2 className="mb-5 fw-bold text-uppercase">
            Pick The Right Course To Build Your Career
          </h2>
          <Row className="justify-content-center align-items-center g-4">
            {[
              {
                src: "https://www.rnwmultimedia.edu.in/assets/img/course/1.png",
                label: "Web Designing",
              },
              {
                src: "https://www.rnwmultimedia.edu.in/assets/img/course/2.png",
                label: "iOS Development",
              },
              {
                src: "https://www.rnwmultimedia.edu.in/assets/img/course/1.png",
                label: "Web Development",
              },
              {
                src: "https://www.rnwmultimedia.edu.in/assets/img/course/2.png",
                label: "Android Development",
              },
              {
                src: "https://www.rnwmultimedia.edu.in/assets/img/course/hacker.png",
                label: "Ethical Hacking",
              },
              {
                src: "https://www.rnwmultimedia.edu.in/assets/img/course/1.png",
                label: "Full Stack Development",
              },
            ].map((course, index) => (
              <Col xs={6} sm={4} md={2} key={index} className="course-item">
                <img
                  src={course.src}
                  alt={course.label}
                  className="img-fluid mb-2"
                />
                <div className="fw-medium">{course.label}</div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-light" id="services">
        <Container>
          <h2 className="text-center mb-5 fw-bold text-uppercase">We are in</h2>
          <Row className="g-4 justify-content-center">
            {[
              {
                city: "Surat",
                img: "https://www.rnwmultimedia.edu.in/new_panel/uploads/city_image-1689422869872-961501515.png",
              },
              {
                city: "Ahmedabad",
                img: "https://www.rnwmultimedia.edu.in/new_panel/uploads/city_image-1689571253161-647992325.png",
              },
              {
                city: "Amreli",
                img: "https://www.rnwmultimedia.edu.in/new_panel/uploads/city_image-1689422920706-236410409.png",
              },
            ].map((location, index) => (
              <Col md={4} key={index}>
                <Card className="h-100 text-center shadow-sm border-0">
                  <Card.Body>
                    <Card.Title className="mb-3 fs-4 fw-semibold">
                      {location.city}
                    </Card.Title>
                    <img
                      src={location.img}
                      alt={`Campus in ${location.city}`}
                      className="img-fluid"
                      style={{
                        width: "100%",
                        maxWidth: "300px",
                        height: "auto",
                        objectFit: "contain",
                        margin: "0 auto",
                      }}
                    />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Hero;
