import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

function MainNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar-container">
            <Container>
                <Navbar.Brand href="/">Master Mezzanine UK</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/' className="text-dark mr-5">Home</Nav.Link>
                        <Nav.Link as={Link} to='/Pages/ImagePage' className="text-dark mr-5">Gallery</Nav.Link>
                        <Nav.Link as={Link} to='/Pages/AboutUsPage' className="text-dark mr-5">About Us</Nav.Link>
                        <Nav.Link as={Link} to='/Pages/ContactUs' className="text-dark mr-5">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;

