import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import htmlLogo from '../images/html.svg';
import cssLogo from '../images/css.svg';
import sassLogo from '../images/sass.svg';
import jsLogo from '../images/js.png';
import nodeLogo from '../images/node.png';
import reactLogo from '../images/react.png';
import reduxLogo from '../images/redux.png';
import gitLogo from '../images/git.png';
import pythonLogo from '../images/python.png';
import swLogo from '../images/solidworks.png';
import jestLogo from '../images/jest.png';
import autocadLogo from '../images/autocad.png';

function SkillIcon(props) {
    return (
        <Col xs="4" md="3" className="slide-in-right">
            <Button outline color="secondary" className="skillIcon">
                <img className="skillLogo" src={props.logo} alt={props.skillName} />
            </Button>
            <h6 style={{ marginTop: "0.5rem" }}>
                {props.skillName}
            </h6>
        </Col>
    )
}




export default function Skills(props) {
    return (
        <div className="skillsWrapper">
            <Container className="skills">
                <Row className="slide-in-left">
                    <Col>
                        <h1 className="skillsTitle">Skills</h1>
                    </Col>
                </Row>
                <Row>
                    <SkillIcon skillName="JavaScript" logo={jsLogo} />
                    <SkillIcon skillName="React" logo={reactLogo} />
                    <SkillIcon skillName="Redux" logo={reduxLogo} />
                    <SkillIcon skillName="Git" logo={gitLogo} />
                    <SkillIcon skillName="Node.js" logo={nodeLogo} />
                    <SkillIcon skillName="HTML" logo={htmlLogo} />
                    <SkillIcon skillName="CSS" logo={cssLogo} />
                    <SkillIcon skillName="SASS" logo={sassLogo} />
                    <SkillIcon skillName="Jest" logo={jestLogo} />
                    <SkillIcon skillName="Python" logo={pythonLogo} />
                    <SkillIcon skillName="SolidWorks" logo={swLogo} />
                    <SkillIcon skillName="AutoCAD" logo={autocadLogo} />
                </Row>
            </Container>
        </div>
    )
}