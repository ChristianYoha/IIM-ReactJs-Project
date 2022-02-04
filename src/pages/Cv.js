import '../sass/components/_cv.scss';
import {Container, Row, Col, Card, Button, Image, Breadcrumb, Tabs, Tab} from 'react-bootstrap';
import profile_pic from '../images/other/profile_pic.jpeg';
import logo_ds from '../images/logo/logo_ds.png';
import logo_cci from '../images/logo/logo_cci.jpeg';
import logo_iim from '../images/logo/logo_iim.png';
import logo_epcci from '../images/logo/logo_epcci.jpeg';
import logo_coa from '../images/logo/logo_cao.jpeg';

const Cv = ()=>{

    return (
        <Container>
            <Row>
                <Col className="mt-5">
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title><h1>Mon CV</h1></Card.Title>
                            <Card.Text >
                                <Breadcrumb>
                                    <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                                    {/* <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                                        Library
                                    </Breadcrumb.Item> */}
                                    <Breadcrumb.Item active>Mon CV</Breadcrumb.Item>
                                </Breadcrumb>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col><hr/></Col>
            </Row>
            <Row>
                <Col md="auto">
                    <Image src={profile_pic} roundedCircle width={200}/>
                </Col>
                <Col className="my-auto">
                    <h1>Christian Yoha KONE</h1>
                    <h3>Développeur Web FullStack.</h3>
                    <p className="fst-italic">"Je suis à la recherche de stage de fin d'étude Bachelor."</p>
                    <table>
                        <tr>
                            <td> <strong>Tel</strong> : +33 7 54 44 04 16</td>
                            <td> <strong>Mail</strong> : christian.yoha@outlook.fr</td>
                        </tr>
                        <tr>
                            <td colSpan="2"> <strong>Adresse</strong> : Guyancourt, Île de France</td>
                        </tr>
                    </table>
                </Col>
            </Row>
            <Row className="mb-4">
                <Tabs defaultActiveKey="about" className="mt-5 mb-3">
                    <Tab eventKey="about" title="A propos de moi">
                        <p>
                            Titulaire d'une Licence professionnelle en Génie Logiciel, je dispose de 4 ans d'expérience dans le domaine du développement Web. <br/>
                            Aujourd'hui, en année de Bachelor au sein de l'Institut de l'Internet et du Multimédia (IIM), dans l'axe <strong>Déveleoppement Web</strong>, je suis à la recherche d'un stade de fin d'étude.
                        </p>
                        <Card>
                            <Card.Header as="h4">Compétences</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <ul>
                                        <li>
                                            <p>
                                                PHP (Laravel), Python, JavaScript (VueJS, ReactJs, React Native, NodeJS), C# (ASP.NET MVC)
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                SQL server, MySQL, MongoDB, FireBase
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Mac OS, Windows, Linux (Ubuntu, Debian), Git, Docker,
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Git, Docker,
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                MS Office, MS Visual Studio, Visual Studio Code, Xcode, Android Studio, MS Azure (Cloud), Photoshop, Illustrator, XDesign
                                            </p>
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br/>
                        <Card>
                            <Card.Header as="h4">Langues</Card.Header>
                            <Card.Body>
                                <ul>
                                    <li>
                                        <p>
                                            Français (Professionnel)
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Anglais (Academique)
                                        </p>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                        <br/>
                        <Card>
                            <Card.Header as="h4">Divers</Card.Header>
                            <Card.Body>
                                <ul>
                                    <li>
                                        <p>
                                            Permis de conduire B
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Loisirs : Football, Natation, Lecture, Cuisine, Veille technologique.
                                        </p>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Tab>
                    <Tab eventKey="experiences" title="Expériences professionelles">
                        <Card>
                            <Card.Header as="h4">DEVELOPPEUR JUNIOR</Card.Header>
                            <Card.Body>
                                <Card.Title>Djera Services SARL (Côte d'Ivoire) | 2018 - 2021</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>
                                            <ul>
                                                <li>
                                                    <p>
                                                        Mise en place du site internet de l’entreprise
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        Mise en place d’un tableau de bord pour le suivi des performances de l’entreprise
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        Assistant support utilisateur
                                                    </p>
                                                </li>
                                            </ul>
                                            <p><strong>Outils:</strong> Wordpress, PHP Laravel, Bootstrap, MySQL</p>
                                            
                                        </Col>
                                        <Col md="auto">
                                            <Image src={logo_ds} rounded width={150}/><br/>
                                        </Col>
                                        <Col xs={12} className="text-end">
                                            <a href="https://www.djera-services.com" target="_blank" className="btn btn-dark btn-sm">Voir l'entreprise</a>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br/>
                        <Card>
                            <Card.Header as="h4">STAGIAIRE (CELLULE ETUDE ET DEVELOPPEMENT)</Card.Header>
                            <Card.Body>
                                <Card.Title>Chambre de Commerce et d'Industrie de Côte d'Ivoire | 2016 – 2017</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>
                                            <ul>
                                                <li>
                                                    <p>
                                                        Mise en place d’un système dématérialisé de traitement des fiches d’évaluation des évènements de la CCI
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        Mise en place d’un système de commande de factures normalisées en ligne (SECURIS 2) dans le cadre du Programme Nationale de Sécurisation des Factures (PNSF)
                                                    </p>
                                                </li>
                                            </ul>
                                            <p><strong>Outils:</strong> Wordpress, PHP Laravel, Bootstrap, MySQL</p>
                                            
                                        </Col>
                                        <Col md="auto">
                                            <Image src={logo_cci} rounded width={200}/><br/>
                                        </Col>
                                        <Col xs={12} className="text-end">
                                            <a href="https://cci-ci.com/" target="_blank" className="btn btn-dark btn-sm">Voir l'entreprise</a>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Tab>
                    <Tab eventKey="formations" title="Formations, prix et distinctions">
                        <Card>
                            <Card.Header as="h4">Formations</Card.Header>
                            <Card.Body>
                                <Card.Title>INSTITUT DE L'INTERNET ET DU MULTIMEDIA (IIM) PARIS</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>
                                            <ul>
                                                <li>
                                                    <p>
                                                        Bachelor Développement Web | En cours (3ème année) <strong>2021/22</strong>
                                                    </p>
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col md="auto">
                                            <Image src={logo_iim} rounded width={150} /><br />
                                        </Col>
                                    </Row>
                                </Card.Text>
                                <hr/>
                                <Card.Title>ECOLE PRATIQUE DE LA CHAMBRE DE COMMERCE ET D'INDUSTRIE DE CÔTE D'IVOIRE</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>
                                            <ul>
                                                <li>
                                                    <p>
                                                        Licence Professionnelle - Réseau et Génie Logiciel | <strong>2017</strong>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        BTS - Informatique Développeur d'Application | <strong>2016</strong>
                                                    </p>
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col md="auto">
                                            <Image src={logo_epcci} rounded width={150} /><br />
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                        <Card>
                            <Card.Header as="h4">Prix et distinction</Card.Header>
                            <Card.Body>
                                <Card.Title>Vainqueur du concours relatif à la conception du logo de la Conférence des Ordres des Architectes de l'UEMOA</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>
                                            <ul>
                                                <li>
                                                    <p>
                                                        Conception de logo
                                                    </p>
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col md="auto">
                                            <Image src={logo_coa} rounded width={200} /><br />
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    )

}

export default Cv;