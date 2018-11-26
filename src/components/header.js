import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function Header(props) {
    return (
        <header className="App-header slide-in-top-4s">
            <Container>
                <Row>

                    <Col xs={{ size: "8", offset: "2" }}>
                        <h2 style={{ fontWeight: "600" }}>Mario Baez</h2>
                    </Col>
                    <Col xs={{ size: "1" }}>
                        <div>
                            <a href="https://github.com/marbaez1714/portfolio" style={{ color: "white" }}><i className="fab fa-github-square fabheader" ></i></a>
                            <a href="https://www.linkedin.com/in/mario-baez-a40573113" style={{ color: "white" }}><i className="fab fa-linkedin fabheader"></i></a>
                        </div>
                    </Col>
                    {/* <Col xs="12">
                        <Row>
                            <Col xs="3"><h6 style={{ fontWeight: "600" }}>Experience</h6></Col>
                            <Col xs="3"><h6 style={{ fontWeight: "600" }}>Skills</h6></Col>
                            <Col xs="3"><h6 style={{ fontWeight: "600" }}>Projects</h6></Col>
                            <Col xs="3"><h6 style={{ fontWeight: "600" }}>Contact</h6></Col>
                        </Row>
                    </Col> */}
                </Row>
            </Container>
        </header >
    )
}