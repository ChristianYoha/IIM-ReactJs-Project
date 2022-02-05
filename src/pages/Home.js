import '../sass/components/_home.scss';

import {Container} from 'react-bootstrap';
import Welcome from '../components/home/Welcome';

const Home = ()=>{
    return (
        <Container>
            <Welcome/>
        </Container>
    )

}

export default Home;