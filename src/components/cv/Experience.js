import {Card, Row, Col, Image} from 'react-bootstrap';

const Experience = ({experiencesData})=>{
    return (
        <>
            {
                experiencesData.experiencesContent.map((data, index) => (
                    <>
                        <Card key={index}>
                            <Card.Header as="h4">{data.job}</Card.Header>
                            <Card.Body>
                                <Card.Title>{data.enterprise.name}&nbsp;|&nbsp;{data.enterprise.period}</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>
                                            <ul>
                                                {
                                                    data.tasksItems.map((data_, index_) => (
                                                        <li key={index_}>
                                                            <p>
                                                                {data_}
                                                            </p>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            <p><strong>Outils:</strong> {data.tools}</p>
                                        </Col>
                                        <Col md="auto">
                                            <Image src={data.enterprise.logo} rounded width={150} /><br />
                                        </Col>
                                        <Col xs={12} className="text-end">
                                            <a href={data.enterprise.siteUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Voir l'entreprise</a>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                    </>
                ))
            }
        </>
    )
}
export default Experience;