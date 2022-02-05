import {Card, Row, Col, Image} from 'react-bootstrap';
const Formation = ({formationsData, awardsData})=>{
    return (
        <>
            <Card>
                <Card.Header as="h4">Formations</Card.Header>
                <Card.Body>
                    {formationsData.formationsContent.map((data, index) => (
                        <div key={index}>
                            <Card.Title>{data.school.name}</Card.Title>
                            <Card.Text>
                                <Row>
                                    <Col>
                                        <ul>
                                            {
                                                data.courses.map((data_, index_) => (
                                                    <li key={index_}>
                                                        <p>
                                                            {data_.label}&nbsp;|&nbsp;{data_.period}
                                                        </p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </Col>
                                    <Col md="auto">
                                        <Image src={data.school.logo} rounded width={150} /><br />
                                    </Col>
                                </Row>
                            </Card.Text>
                            <hr />
                        </div>
                    ))}
                </Card.Body>
            </Card>
            <br />
            <Card>
                <Card.Header as="h4">Prix et distinction</Card.Header>
                <Card.Body>
                    {awardsData.awardContent.map((data, index) => (
                    <div key={index}>
                        <Card.Title>{data.item.label}</Card.Title>
                        <Card.Text>
                            <Row>
                                <Col>
                                    <ul>
                                        {
                                            data.details.map((data_, index_) => (
                                                <li key={index_}>
                                                    <p>
                                                        {data_.label}&nbsp;|&nbsp;{data_.period}
                                                    </p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </Col>
                                <Col md="auto">
                                    <Image src={data.item.img} rounded width={200} /><br />
                                </Col>
                            </Row>
                        </Card.Text>
                    </div>
                    ))}
                </Card.Body>
            </Card>
        </>
    )
}

export default Formation;