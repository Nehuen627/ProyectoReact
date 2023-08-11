import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from './CardWidget';
import Button from 'react-bootstrap/esm/Button';
import "../../App.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar">
        <Container>
            <Navbar.Brand>
                <NavLink to="/" className="links" activeClassName="active-link">El Kiosco Gamer</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link>
                    <NavLink to="/"className="links" activeClassName="active-link">Home</NavLink>
                </Nav.Link>
                <NavDropdown title="Artículos" id="collasible-nav-dropdown">
                    <NavDropdown.Item>
                        <NavLink to="/category/juegos"className="links" activeClassName="active-link">Juegos</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <NavLink to="/category/perifericos"className="links" activeClassName="active-link">Perifericos</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <NavLink to="/general"className="links" activeClassName="active-link">General</NavLink>
                    </NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
                <NavLink to="/cart">
                    <CardWidget/>
                </NavLink>
            </Nav>
            <Button id="loginBtn" className='bg-dark btnLogin'>Login</Button>
        </Navbar.Collapse>

        </Container>
    </Navbar>
    )
}

export default NavBar;