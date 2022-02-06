import { useLocation } from "react-router-dom";
import {Container, Row, Col, Card} from 'react-bootstrap';

function NoMatch() {
    let location = useLocation();

    return (
        <Container>
            <Row>
            <Col className="mt-5">
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title className="mb-5"><h1>Oups!</h1></Card.Title>
                        <Card.Text className="mb-5">
                            Aucune page ne correspond à cette adresse : <code>{location.pathname}</code>
                        </Card.Text>
                        <a href="/" className="btn btn-dark">Retour à la page d'accueil</a>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container>
    )
}

export default NoMatch;