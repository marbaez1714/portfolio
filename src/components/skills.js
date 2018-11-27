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
            <Button outline color="secondary" className="skillIcon" onMouseOver={event => props.changeImage(props.skillName, props.logo)}>
                <img className="skillLogo" src={props.currentImage} alt={props.skillName} />
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
                    <SkillIcon changeImage={props.changeImage} skillName="JavaScript" logo={jsLogo} currentImage={props.imageState.JavaScript} />
                    <SkillIcon changeImage={props.changeImage} skillName="React" logo={reactLogo} currentImage={props.imageState.React} />
                    <SkillIcon changeImage={props.changeImage} skillName="Redux" logo={reduxLogo} currentImage={props.imageState.Redux} />
                    <SkillIcon changeImage={props.changeImage} skillName="Git" logo={gitLogo} currentImage={props.imageState.Git} />
                    <SkillIcon changeImage={props.changeImage} skillName="Nodejs" logo={nodeLogo} currentImage={props.imageState.Nodejs} />
                    <SkillIcon changeImage={props.changeImage} skillName="HTML" logo={htmlLogo} currentImage={props.imageState.HTML} />
                    <SkillIcon changeImage={props.changeImage} skillName="CSS" logo={cssLogo} currentImage={props.imageState.CSS} />
                    <SkillIcon changeImage={props.changeImage} skillName="SASS" logo={sassLogo} currentImage={props.imageState.SASS} />
                    <SkillIcon changeImage={props.changeImage} skillName="Jest" logo={jestLogo} currentImage={props.imageState.Jest} />
                    <SkillIcon changeImage={props.changeImage} skillName="Python" logo={pythonLogo} currentImage={props.imageState.Python} />
                    <SkillIcon changeImage={props.changeImage} skillName="SolidWorks" logo={swLogo} currentImage={props.imageState.SolidWorks} />
                    <SkillIcon changeImage={props.changeImage} skillName="AutoCAD" logo={autocadLogo} currentImage={props.imageState.AutoCAD} />
                </Row>
            </Container>
        </div>
    )
}