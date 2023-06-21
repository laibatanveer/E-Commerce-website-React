import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShopware } from "react-icons/fa";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <Navbar  bg="warning"  expand="lg">
            <Container>
                <Link className='navbar-brand fw-bold fst-italic' to="/"><FaShopware/>  EVO MART</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='nav-link fw-normal' to="/">Home</Link>
                        <Link className='nav-link fw-normal' to="/products">Products</Link>
                        <Link className=' ms-4 btn btn-success rounded-pill' to="/login">Login</Link>
                        <Link className='ms-3 btn btn-warning rounded-pill' to="/signup">SignUp</Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;