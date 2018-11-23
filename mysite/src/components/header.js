import React from 'react';
import { Container, Row, Col } from 'reactstrap';


export default function Header(props) {
    return (
        <header className="App-header slide-in-top-4s">
            <Container>
                <Row>
                    <Col xs="12" md="3"><h6>Mario Baez</h6></Col>
                    <Col xs="12" md={{ size: 4, offset: 5 }}>
                        <Row>
                            <Col xs="4"><h6>About</h6></Col>
                            <Col xs="4"><h6>Projects</h6></Col>
                            <Col xs="4"><h6>Contact</h6></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </header >

    )
}