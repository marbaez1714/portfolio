import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardBody, CardText, CardImg, Button } from 'reactstrap';

export default function Projects(props) {
    return (
        <div className="projectsWrapper">
            <Container className="projects">
                <Row className="slide-in-left">
                    <Col>
                        <h1 className="projectsTitle">Personal Projects</h1>
                        <p>As I grow as a developer, I will add more of my personal projects here for you to see.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ size: "6", offset: "3" }}>
                        <Card className="projectCard">
                            <CardImg top src="https://img.scryfall.com/cards/art_crop/en/c18/212.jpg?1535504874" alt="Battlesphere Art" />
                            <CardBody>
                                <CardTitle className="projectCardTitle">Battlesphere - WIP</CardTitle>
                                <CardText className="smallScreenHide">Battlesphere is my first large project. The app is designed to give players of Magic the Gathering a central location to search for cards, build decks, gather information, and play games.  </CardText>
                                <Row>
                                    <Col md="6">
                                        <a href="https://battlesphere.herokuapp.com/"><Button style={{ width: "100%" }}>Visit</Button></a>
                                    </Col>
                                    <Col md="6">
                                        <a href="https://github.com/marbaez1714/battlesphere"><Button style={{ width: "100%" }}>GitHub</Button></a>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
