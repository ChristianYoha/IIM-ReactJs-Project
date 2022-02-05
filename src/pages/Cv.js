import '../sass/components/_cv.scss';
import {Container, Row, Tabs, Tab} from 'react-bootstrap';


// import logo_ds from '../images/logo/logo_ds.png';
// import logo_cci from '../images/logo/logo_cci.jpeg';
// import logo_iim from '../images/logo/logo_iim.png';
// import logo_epcci from '../images/logo/logo_epcci.jpeg';
// import logo_coa from '../images/logo/logo_cao.jpeg';

import MyBreadcrumb from '../components/MyBreadcrumb';
import Info from '../components/cv/Info';
import About from '../components/cv/About';
import Experience from '../components/cv/Experience';
import Formation from '../components/cv/Formation';

const Cv = ()=>{

    const aboutData = {
        aboutText: `Titulaire d'une Licence professionnelle en Génie Logiciel, je dispose de 4 ans d'expérience dans le domaine du développement Web. Aujourd'hui, en année de Bachelor au sein de l'Institut de l'Internet et du Multimédia (IIM), dans l'axe Déveleoppement Web, je suis à la recherche d'un stade de fin d'étude.`,
        aboutContent:[
            {
                section: "Compétences",
                sectionItems:[
                    "PHP (Laravel), Python, JavaScript (VueJS, ReactJs, React Native, NodeJS), C# (ASP.NET MVC)",
                    "SQL server, MySQL, MongoDB, FireBase",
                    "Mac OS, Windows, Linux (Ubuntu, Debian), Git, Docker,",
                    "Git, Docker,",
                    "MS Office, MS Visual Studio, Visual Studio Code, Xcode, Android Studio, MS Azure (Cloud), Photoshop, Illustrator, XDesign",
                ]
            },
            {
                section: "Langues",
                sectionItems:[
                    "Français (Professionnel)",
                    "Anglais (Academique)",
                ]
            },
            {
                section: "Divers",
                sectionItems:[
                    "Permis de conduire B",
                    "Loisirs : Football, Natation, Lecture, Cuisine, Veille technologique.",
                ]
            },
        ], 
    };

    const experiencesData = {
        experiencesContent:[
            {
                job: "DEVELOPPEUR JUNIOR",
                enterprise:{
                    name:"Djera Services SARL (Côte d'Ivoire)",
                    period:"2018 - 2021", 
                    logo:"../images/logo/logo_ds.png",
                    siteUrl:"http://www.djera-services.com"
                },
                tasksItems:[
                    "Mise en place du site internet de l’entreprise",
                    "Mise en place d’un tableau de bord pour le suivi des performances de l’entreprise",
                    "Assistant support utilisateur",
                ],
                tools:"Wordpress, PHP Laravel, Bootstrap, MySQL",
            },
            {
                job: "STAGIAIRE (CELLULE ETUDE ET DEVELOPPEMENT)",
                enterprise:{
                    name:"Chambre de Commerce et d'Industrie de Côte d'Ivoire",
                    period:"2016 – 2017", 
                    logo:"../images/logo/logo_.cci.jpeg",
                    siteUrl:"http://www.cci-ci.com"
                },
                tasksItems:[
                    "Mise en place d’un système dématérialisé de traitement des fiches d’évaluation des évènements de la CCI",
                    "Mise en place d’un système de commande de factures normalisées en ligne (SECURIS 2) dans le cadre du Programme Nationale de Sécurisation des Factures (PNSF)",
                ],
                tools:"ASP. NET MVC, Android Studio (Java), SQL Server, Bootstrap",
            },
            
        ], 
    };

    const formationsData = {
        formationsContent:[
            {
                school:{
                    name:"INSTITUT DE L'INTERNET ET DU MULTIMEDIA (IIM) PARIS",
                    logo:"../images/logo/logo_iim.png",
                    siteUrl:"http://www.iim.fr"
                },
                courses:[
                    {
                        label: "Bachelor Développement Web",
                        period: "En cours (3ème année) 2021/22"
                    },
                ],
            },
            {
                school:{
                    name:"ECOLE PRATIQUE DE LA CHAMBRE DE COMMERCE ET D'INDUSTRIE DE CÔTE D'IVOIRE",
                    logo:"../images/logo/logo_epcci.jpeg",
                    siteUrl:"https://www.epcci.edu.ci/"
                },
                courses:[
                    {
                        label: "Licence Professionnelle - Réseau et Génie Logicie",
                        period: "2017"
                    },
                    {
                        label: "BTS - Informatique Développeur d'Application",
                        period: "2016"
                    }
                ],
            },
            
        ], 
    };

    const awardsData = {
        awardContent:[
            {
                item:{
                    label:"Vainqueur du concours relatif à la conception du logo de la Conférence des Ordres des Architectes de l'UEMOA",
                    img:"../images/logo/logo_coa.jpeg",
                    siteUrl:"https://cvp.bf/coa-uemoa/"
                },
                details:[
                    {
                        label: "Conception de logo",
                        period: "2017"
                    },
                ],
            },
            
        ], 
    };


    return (
        <Container>
            <MyBreadcrumb title="Mon CV"/>
            <Info
                fullname="Christian Yoha KONE"
                job="Développeur Web FullStack"
                address="Guyancourt, Île de France"
                tel="(+33) 7 54 44 04 16"
                mail="christian.yoha@outlook.fr"
                social={[
                    {icon:"fcbk", url:"" },
                    {icon:"lkdn", url:"" },
                    {icon:"github", url:"" },
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