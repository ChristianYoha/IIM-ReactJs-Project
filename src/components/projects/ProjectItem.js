import {Col, Card} from 'react-bootstrap';
const ProjectItem = ({id, title, img, shortDesc})=>{
    return (
        <Col lg={4} md={6} className="mb-4 mx-auto">
            <Card>
                <Card.Img variant="top" src={img.src} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{shortDesc}</Card.Text>
                    <a href={`/project/`+ id} className="btn btn-dark">En savoir plus</a>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default ProjectItem;