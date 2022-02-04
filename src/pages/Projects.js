import '../sass/components/_projects.scss';
import {Container, Row, Col, Card, Button, Breadcrumb} from 'react-bootstrap';

const Projects = ()=>{

    return (
        <Container>
            <Row>
                <Col className="mt-5">
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title> MES PROJETS </Card.Title>
                            <Card.Text >
                                <Breadcrumb >
                                    <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                                    {/* <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                                        Library
                                    </Breadcrumb.Item> */}
                                    <Breadcrumb.Item active>Projets</Breadcrumb.Item>
                                </Breadcrumb>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col><hr/></Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Card>
                        <Card.Img variant="top" src="https://picsum.photos/300/200?grayscale" />
                        <Card.Body>
                            <Card.Title>Projet 1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                            <a href="/project/1" className="btn btn-dark">En savoir plus</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <Card.Img variant="top" src="https://picsum.photos/300/200?grayscale" />
                        <Card.Body>
                            <Card.Title>Projet 2</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                            <a href="/project/2" className="btn btn-dark">En savoir plus</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <Card.Img variant="top" src="https://picsum.photos/300/200?grayscale" />
                        <Card.Body>
                            <Card.Title>Projet 3</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                            <a href="/project/3" className="btn btn-dark">En savoir plus</a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}

export default Projects;