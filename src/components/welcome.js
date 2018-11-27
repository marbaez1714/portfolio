import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import Pipe from '../images/pipe.svg'
import PipeRight from '../images/pipeRight.svg'
import Shell from '../images/shell.svg'

export default function Welcome(props) {
    return (
        <div className="welcomeWrapper">
            <Container className="welcome">
                <Row>
                    <Col xs="2">
                        <img className="pipe slide-in-left " src={Pipe} alt="" />
                    </Col>
                    <Col xs="8" className="welcomeContent" >
                        <h1 className="welcomeText fade-in-left-4s">Curious Problem Solver</h1>
                        <p className=" welcomeBlurb fade-in-left-4s">It’s a me Mario! I’m a curious person constantly looking to apply technology. </p>
                    </Col>
                    <Col xs="2">
                        <img className="pipeRight slide-in-right" src={PipeRight} alt="" />
                        <img className="shell slide-in-left-shell" src={Shell} alt="" />

                    </Col>
                </Row>
            </Container>

        </div >
    )
}