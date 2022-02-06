import '../sass/components/_cv.scss';
import {Container, Row, Tabs, Tab} from 'react-bootstrap';


import MyBreadcrumb from '../components/MyBreadcrumb';
import Info from '../components/cv/Info';
import About from '../components/cv/About';
import Experience from '../components/cv/Experience';
import Formation from '../components/cv/Formation';

import data from '../data/data.json';

const Cv = ()=>{

    const aboutData = data.aboutData;
    const experiencesData = data.experiencesData;
    const formationsData = data.formationsData;
    const awardsData = data.awardsData;

    return (
        <Container>
            {/* Component - Pour gerer le titre de chaque page et lien de navigation rapide */}
            <MyBreadcrumb title="Mon CV"/>
            {/* Component - Section Formation, prix et distinction du CV  */}
            <Info
                fullname="Christian Yoha KONE"
                job="Développeur Web FullStack"
                address="Guyancourt, Île de France"
                tel="(+33) 7 54 44 04 16"
                mail="christian.yoha@outlook.fr"
                social={[
                    {icon:"fcbk", url:"https://facebook.com/" },
                    {icon:"lkdn", url:"https://linkedin.com/in/christian-yoha" },
                    {icon:"github", url:"https://github.com/ChristianYoha" },
                ]}
            />
            <Row className="mb-4">
                <Tabs defaultActiveKey="about" className="mt-5 mb-3">
                    <Tab eventKey="about" title="A propos de moi">
                        <About aboutData={aboutData}/>
                    </Tab>
                    <Tab eventKey="experiences" title="Expériences professionelles">
                        <Experience experiencesData={experiencesData}/>
                    </Tab>
                    <Tab eventKey="formations" title="Formations, prix et distinctions">
                        <Formation formationsData={formationsData} awardsData={awardsData}/>
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    )

}

export default Cv;