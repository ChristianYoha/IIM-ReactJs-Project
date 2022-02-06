import {Row, Col, Tabs, Tab, Carousel} from 'react-bootstrap';
import { useParams} from 'react-router-dom';
import MyBreadcrumb from '../../components/MyBreadcrumb';
import data from '../../data/data.json';

const ProjectItemDetails = ({id, imgs, description, technos})=>{
    const projects= data.projects;
    let {projectId} = useParams();
    let selctedProject = projects.find(item => item.id === parseInt(projectId));
    return (
        <>
        {/* Component - Pour gerer le titre de chaque page et lien de navigation rapide */}
        <MyBreadcrumb title={selctedProject.title} previous="Mes projets" previousUrl="/projects" />
        <Row>
            <Col lg={7}>
                <Carousel fade interval={2000}>
                    {selctedProject.gallery.map((data, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100 h-50"
                                src={data.src}
                                alt={data.alt}
                                height={100}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Col>
            <Col>
                <Tabs defaultActiveKey="description" className="mb-3">
                    <Tab eventKey="description" title="Description">
                        <p>
                            {selctedProject.shortDesc}
                        </p>
                    </Tab>
                    <Tab eventKey="tech-use" title="Technologies utilisées">
                        <u>
                            {selctedProject.technos.map((data_, index) => (
                                <li key={index}>{data_}</li>
                            ))}
                        </u>
                    </Tab>
                </Tabs>
            </Col>
        </Row>
        </>
    )
}

export default ProjectItemDetails;