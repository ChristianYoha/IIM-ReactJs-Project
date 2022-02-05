import {Card} from 'react-bootstrap';

const About = ({aboutData})=>{
    console.log(aboutData);
    return (
        <>
            <p>{aboutData.aboutText}</p>
            {
                aboutData.aboutContent.map((data, index) => (
                    <>
                        <Card key={index}>
                            <Card.Header as="h4">{data.section}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <ul>
                                        {
                                            data.sectionItems.map((data_, index_)=>(
                                                <li key={index_}>
                                                    <p>
                                                        {data_}
                                                    </p>
                                                </li>
                                            ))
                                        }
                                    </ul>
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
export default About;