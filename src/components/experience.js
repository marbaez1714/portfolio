import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardBody, CardSubtitle, CardText } from 'reactstrap';
import WeirLogo from '../images/w_blue.png';
import TriumphLogo from '../images/TriumphLogo.jpg';
import GELogo from '../images/GELogo.png';

export default function Experience(props) {
    return (
        <div className="experienceWrapper">
            <Container className="experience">
                <Row className="slide-in-left">
                    <Col>
                        <h1 className="experienceTitle">Experience</h1>
                        <h6 className="smallScreen">For more details about my professional life, visit my <a href="https://www.linkedin.com/in/mario-baez-a40573113">LinkedIn</a>.</h6>
                    </Col>
                </Row>
                {/* Weir */}
                <Row className="workplace slide-in-right">
                    <Col xs="2">
                        <img src={WeirLogo} style={{ width: "90%" }} alt="" />
                    </Col>
                    <Col xs="10">
                        <Card style={{ height: "100%", textAlign: "left" }}>
                            <CardBody>
                                <CardTitle className="workplaceName"><strong>Weir SPM</strong> </CardTitle>
                                <CardSubtitle>
                                    June '17 – Present: <strong>Graduate Engineer</strong> working as a <strong>Front-End Developer</strong>.
                                </CardSubtitle>
                                <CardText>
                                    <ul className="resumeList">
                                        <li>Developed a standardized front end for responsive React / Redux web applications that provide a consistent user experience</li>
                                        <li>Developed a user interface that allows staff to quickly determine coolant equipment health</li>
                                        <li>Collaborated with staff to develop a MERN stack app with a UI that displays the health of production equipment</li>
                                        <li>Developed a tool for sorting and formatting information from data acquisition devices</li>
                                        <li>Designed a system that allows sales to create quotes for customer requests, reducing turnaround by 90%</li>
                                        <li>Developed new drone technology for use in oil and gas drill sites</li>
                                        <li>Authored capital expenditure report for 3D printing equipment purchases</li>
                                        <li>Successfully recruited talent to startup a R&D team focused on delivering new technology</li>
                                        <li>Part of an international team of passionate additive manufacturing experts</li>
                                        <li>Consolidated product families to decrease manufacturing time and reduce inventory</li>
                                        <li>Executed viability analysis of product traceability through improved inventory control and tracking</li>
                                    </ul>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                {/* Triumph */}
                <Row className="workplace slide-in-left">
                    <Col xs="2">
                        <img src={TriumphLogo} style={{ width: "90%" }} alt="" />

                    </Col>
                    <Col xs="10">
                        <Card style={{ height: "100%", textAlign: "left" }}>
                            <CardBody>
                                <CardTitle className="workplaceName"><strong>Triumph Aerostructures  </strong> </CardTitle>
                                <CardSubtitle>
                                    March 2016 – September 2016: <strong>Engineering Intern</strong> focusing on <strong>Manufacturing</strong>.
                                </CardSubtitle>
                                <CardText>
                                    <ul className="resumeList">
                                        <li>Designed a system that automated reporting of changes in manufacturing data to engineering managers</li>
                                        <li>Organized and planned the Bombardier 7000 assembly line</li>
                                        <li>Minimized the number of tools used in the assembly process to reduce lead time</li>
                                        <li>Designed tooling that allowed for safer and faster manufacturing </li>
                                    </ul>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                {/* GE */}
                <Row className="workplace slide-in-right">
                    <Col xs="2">
                        <img src={GELogo} style={{ width: "90%" }} alt="" />

                    </Col>
                    <Col xs="10">
                        <Card style={{ height: "100%", textAlign: "left" }}>
                            <CardBody>
                                <CardTitle className="workplaceName"><strong>GE Oil & Gas – Inspection Technologies  </strong> </CardTitle>
                                <CardSubtitle>
                                    June 2015 – August 2018: <strong>Engineering Intern</strong> focusing on <strong>Testing</strong>.
                                </CardSubtitle>
                                <CardText>
                                    <ul className="resumeList">
                                        <li>Verified the application of an existing technology for a creative and novel use</li>
                                        <li>Implemented new naming convention for ultrasonic blocks that allowed for ease of serialization</li>
                                        <li>Worked with NDT equipment to create 3D CAD models based on radiographic imaging</li>
                                    </ul>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>


            </Container>
        </div >
    )
}

