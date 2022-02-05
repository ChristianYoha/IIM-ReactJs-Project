import '../sass/components/_projects.scss';
import {Container} from 'react-bootstrap';
import ProjectItemDetails from '../components/projects/ProjectItemDetails';

const ProjectDetails = ()=>{

    return (
        <Container>
            <ProjectItemDetails 
                id={1}
                imgs={[{src:"https://picsum.photos/300/200?grayscale", alt:"img"},{src:"https://picsum.photos/300/200?grayscale", alt:"img"}]}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis libero nec sollicitudin pretium. Quisque at libero id libero scelerisque tempor sit amet non quam. Duis porta nibh nec diam malesuada pharetra. Proin ut tempor augue, nec rhoncus risus. In et lacus augue. Vivamus porta odio ac erat venenatis pulvinar. Aenean bibendum rhoncus ex, non hendrerit purus tincidunt et. Vestibulum est ante, dignissim a sapien quis, condimentum elementum libero."
                technos="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis libero nec sollicitudin pretium. Quisque at libero id libero scelerisque tempor sit amet non quam. Duis porta nibh nec diam malesuada pharetra."
            />
        </Container>
    )
}

export default ProjectDetails;