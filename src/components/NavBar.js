import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from './CardWidget';
import Button from 'react-bootstrap/esm/Button';
import "../App.css";

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar">
        <Container>
            <Navbar.Brand href="#home">El Kiosco Gamer</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#features">Novedades</Nav.Link>
                <NavDropdown title="Artículos" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Juegos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Periféricos
                    </NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <CardWidget/>
            </Nav>
            <Button id="loginBtn" className='bg-dark btnLogin'>Login</Button>
        </Navbar.Collapse>

        </Container>
    </Navbar>
    )
}

export default NavBar;