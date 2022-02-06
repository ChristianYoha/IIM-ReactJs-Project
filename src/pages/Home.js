import '../sass/components/_home.scss';

import {Container} from 'react-bootstrap';
import Welcome from '../components/home/Welcome';

const Home = ()=>{
    return (
        <Container>
            {/* Component - Présentation sur la page d'accueil */}
            <Welcome/>
        </Container>
    )

}

export default Home;