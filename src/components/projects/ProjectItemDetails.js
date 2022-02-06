import {Row, Col, Tabs, Tab, Carousel} from 'react-bootstrap';
import { useParams} from 'react-router-dom';
import MyBreadcrumb from '../../components/MyBreadcrumb';

const ProjectItemDetails = ({id, imgs, description, technos})=>{
    const projects = [
        {
            id:1,
            title: "Site Web entreprise - DJERA SERVICES SARL",
            shortDesc: "Site internet d'une entreprise de maintenance des réseaux électriques, localisé en Côte d'Ivoire.",
            img: { src:"/images/other/ds1.png", alt:"screenshot"},
            gallery: [
                { src:"/images/other/ds1.png", alt:"screenshot"},
                { src:"/images/other/ds2.png", alt:"screenshot"},
                { src:"/images/other/ds3.png", alt:"screenshot"},
                { src:"/images/other/ds4.png", alt:"screenshot"},
                { src:"/images/other/ds5.png", alt:"screenshot"},
                { src:"/images/other/ds6.png", alt:"screenshot"},
            ],
            technos:[
                "Wordpress"
            ]
        },
        {
            id:2,
            title: "Mon Eglise Catholique CI",
            shortDesc: "Une application mobile mettant à dispositon des informations sur les Eglises Catholiques de Côte d'Ivoire.",
            img: { src:"/images/other/church1.jpeg", alt:"screenshot"},
            gallery: [
                { src:"/images/other/church1.jpeg", alt:"screenshot"},
                { src:"/images/other/church2.jpeg", alt:"screenshot"},
                { src:"/images/other/church3.jpeg", alt:"screenshot"},
                { src:"/images/other/church4.jpeg", alt:"screenshot"},
                { src:"/images/other/church5.jpeg", alt:"screenshot"},
                { src:"/images/other/church6.jpeg", alt:"screenshot"},
            ],
            technos:[
                "Laravel","Mysql","React Native", "FireBase"
            ]
        },
        {
            id:3,
            title: "Dany a perdu ses dents",
            shortDesc: "Un jeux réalisé en Python, où le joueur est amené à retrouver les dents de Dany dans du PopCorn.",
            img: { src:"https://picsum.photos/300/200?grayscale", alt:"screenshot"},
            gallery: [{ src:"https://picsum.photos/300/200?grayscale", alt:"screenshot"}],
            technos:[
                "Python",
            ]
        },
    ];
    let {projectId} = useParams();
    let selctedProject = projects.find(item => item.id === parseInt(projectId));
    console.log(selctedProject);
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