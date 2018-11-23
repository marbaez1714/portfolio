import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import Pipe from '../images/pipe.svg'

export default function Welcome(props) {
    return (
        <div className="welcomeWrapper slide-in-left-quick">
            <Container className="welcome">
                <Row>
                    <Col xs="2">
                        <img className="pipe slide-in-left " src={Pipe} />
                    </Col>
                    <Col xs="6">
                        <h1 className="welcomeText fade-in-left-4s">Curious Problem Solver</h1>
                        <p className="fade-in-left-4s">It’s a me Mario! I’m a curios person constantly looking for ways to apply technology in ways that will improve the lives of others. </p>
                    </Col>
                </Row>
            </Container>

        </div >
    )
}