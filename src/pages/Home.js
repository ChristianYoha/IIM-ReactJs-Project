import '../sass/components/_home.scss';

import {Container, Row, Col, Card, Button} from 'react-bootstrap';


const Home = ()=>{

    return (
        <Container>
            <Row>
                <Col className="mt-5">
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title className="mb-5"><h1>BIENVENUE SUR MON PORTFOLIO</h1></Card.Title>
                            <Card.Text className="mb-5">
                                Je suis Christian Yoha KONE, étudiant à <strong>L'Institut de l'Internet et du Multimédai (IIM).</strong> <br/>
                                Je suis de l'axe Développement Web en 3ème année.
                            </Card.Text>
                            <a href="/projects" className="btn btn-dark">Découvrir mes projets realisés</a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}

export default Home;