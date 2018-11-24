import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function Footer(props) {
    return (
        <div className="footerWrapper">
            <Container>
                <Row>
                    <Col xs="12">
                        <a href="https://github.com/marbaez1714/portfolio" style={{ color: "white" }}><i className="fab fa-github-square"></i></a>
                        <a href="https://www.linkedin.com/in/mario-baez-a40573113" style={{ color: "white" }}><i className="fab fa-linkedin"></i></a>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <h5 className="credit">Made by Mario Baez</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}