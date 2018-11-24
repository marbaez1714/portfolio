import React from 'react';
import { Container, Row, Col } from 'reactstrap';


export default function Header(props) {
    return (
        <header className="App-header slide-in-top-4s">
            <Container>
                <Row>
                    <Col xs="12"><h6>Mario Baez</h6></Col>
                    <Col xs="12">
                        <Row>
                            <Col xs="3"><h6>Experience</h6></Col>
                            <Col xs="3"><h6>Skills</h6></Col>
                            <Col xs="3"><h6>Projects</h6></Col>
                            <Col xs="3"><h6>Contact</h6></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </header >

    )
}