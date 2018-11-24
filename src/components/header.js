import React from 'react';
import { Container, Row, Col } from 'reactstrap';


export default function Header(props) {
    return (
        <header className="App-header slide-in-top-4s">
            <Container>
                <Row>
                    <Col xs="12"><h2 style={{ fontWeight: "600" }}>Mario Baez</h2></Col>
                    <Col xs="12">
                        {/* <Row>
                            <Col xs="3"><h6 style={{ fontWeight: "600" }}>Experience</h6></Col>
                            <Col xs="3"><h6 style={{ fontWeight: "600" }}>Skills</h6></Col>
                            <Col xs="3"><h6 style={{ fontWeight: "600" }}>Projects</h6></Col>
                            <Col xs="3"><h6 style={{ fontWeight: "600" }}>Contact</h6></Col>
                        </Row> */}
                    </Col>
                </Row>
            </Container>
        </header >

    )
}