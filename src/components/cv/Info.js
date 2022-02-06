import {Row, Col, Card, Image} from 'react-bootstrap';
import profile_pic from '../../img/profile_pic.jpeg';

const Info = ({fullname, job, address, tel, mail, social})=>{
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col md="auto">
                        <Image src={profile_pic} roundedCircle width={200} />
                    </Col>
                    <Col className="my-auto">
                        <h2>{fullname}</h2>
                        <h4>{job}</h4>
                        <table>
                            <tr>
                                <td colSpan="2"> <strong>Adresse:&nbsp;</strong>{address}</td>
                            </tr>
                            <tr>
                                <td><small> <strong>Tel:&nbsp;</strong>{tel}</small></td>
                                <td> &nbsp;&nbsp;<strong>Mail:&nbsp;</strong>{mail}</td>
                            </tr>
                            <tr>
                                <td colSpan="2">fcbk | lkdn | github</td>
                            </tr>
                        </table>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
export default Info;