import '../sass/components/_projects.scss';
import {Container, Row} from 'react-bootstrap';

import MyBreadcrumb from '../components/MyBreadcrumb';
import ProjectItem from '../components/projects/ProjectItem';
import data from '../data/data.json';


const Projects = ()=>{
    const projects= data.projects; 
    return (
        <Container>
            {/* Component - Pour gerer le titre de chaque page et lien de navigation rapide */}
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