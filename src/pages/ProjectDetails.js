import '../sass/components/_projects.scss';
import {Container, Row, Col, Card, Tabs, Tab, Breadcrumb, Carousel} from 'react-bootstrap';

const ProjectDetails = ()=>{

    return (
        <Container>
            <Row>
                <Col className="mt-5">
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title> Projet 1 </Card.Title>
                            <Card.Text >
                                <Breadcrumb >
                                    <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                                    <Breadcrumb.Item href="/projects">Mes projets</Breadcrumb.Item>
                                    <Breadcrumb.Item active>Projet 1</Breadcrumb.Item>
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
                <Col lg={6}>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://picsum.photos/300/200?grayscale"
                                alt="img1"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://picsum.photos/300/200?grayscale"
                                alt="img2"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col>
                    <Tabs defaultActiveKey="description" className="mb-3">
                        <Tab eventKey="description" title="Description">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis libero nec sollicitudin pretium. Quisque at libero id libero scelerisque tempor sit amet non quam. Duis porta nibh nec diam malesuada pharetra. Proin ut tempor augue, nec rhoncus risus. In et lacus augue. Vivamus porta odio ac erat venenatis pulvinar. Aenean bibendum rhoncus ex, non hendrerit purus tincidunt et. Vestibulum est ante, dignissim a sapien quis, condimentum elementum libero.
                            </p>
                        </Tab>
                        <Tab eventKey="tech-use" title="Technologies utilisée">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis libero nec sollicitudin pretium. Quisque at libero id libero scelerisque tempor sit amet non quam. Duis porta nibh nec diam malesuada pharetra.
                            </p>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    )

}

export default ProjectDetails;