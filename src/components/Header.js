import { Navbar, Nav, Container} from 'react-bootstrap';

const Header = ()=>{
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">CHRISTIAN YOHA - PORTFOLIO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav className="">
                            <Nav.Link href="/">Accueil</Nav.Link>
                            <Nav.Link href="/Projects">Projets</Nav.Link>
                            <Nav.Link href="/cv">Mon CV</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
};

export default Header;