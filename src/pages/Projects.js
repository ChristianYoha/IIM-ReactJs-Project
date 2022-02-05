import '../sass/components/_projects.scss';
import {Container, Row} from 'react-bootstrap';

import MyBreadcrumb from '../components/MyBreadcrumb';
import ProjectItem from '../components/projects/ProjectItem';

const projects = [
    {
        id:1,
        title: "Site Web entreprise - DJERA SERVICES SARL",
        shortDesc: "Site internet d'une entreprise de maintenance des réseaux électriques, localisé en Côte d'Ivoire.",
        img: { src:"https://picsum.photos/300/200?grayscale", alt:"screenshot"},
        galery: [{ src:"https://picsum.photos/300/200?grayscale", alt:"screenshot"}],
        technos:[
            "Wordpress"
        ]
    },
    {
        id:2,
        title: "Mon Eglise Catholique CI",
        shortDesc: "Une application mobile mettant à dispositon des informations sur les Eglises Catholiques de Côte d'Ivoire.",
        img: { src:"https://picsum.photos/300/200?grayscale", alt:"screenshot"},
        galery: [{ src:"https://picsum.photos/300/200?grayscale", alt:"screenshot"}],
        technos:[
            "Laravel","Mysql","React Native", "FireBase"
        ]
    },
    {
        id:3,
        title: "Dany a perdu ses dents",
        shortDesc: "Un jeux réalisé en Python, où le joueur est amené à retrouver les dents de Dany dans du PopCorn.",
        img: { src:"https://picsum.photos/300/200?grayscale", alt:"screenshot"},
        galery: [{ src:"https://picsum.photos/300/200?grayscale", alt:"screenshot"}],
        technos:[
            "Python",
        ]
    },
];

const Projects = ()=>{
    return (
        <Container>
            <MyBreadcrumb title="Mes projets"/>
            <Row>
                {
                    projects.map((data, index) => (
                        <ProjectItem 
                            key={index}
                            id={data.id} 
                            img={data.img} 
                            title={data.title} 
                            shortDesc={data.shortDesc}
                        />
                    ))
                }
            </Row>
        </Container>
    )
}

export default Projects;