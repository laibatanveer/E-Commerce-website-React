import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShopware } from "react-icons/fa";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function NavigationBar() {
    const bgImg="https://image.slidesdocs.com/responsive-images/background/plant-floral-clean-line-yellow-nature-powerpoint-background_324e1ddf60__960_540.jpg"
    
    return (
        <>
        <Navbar  expand="lg"  style={{
          
            fontFamily:"Oswald",
           backgroundImage:`url(${bgImg})`,
           backgroundSize: "20vw 10vh" ,
           backgroundRepeat: "no-repeat",
         
       
            }}>
            <Container    >
                <Link className='navbar-brand ' to="/"> <pre><h1 className='fw-bold fst-italic'>     .beautify </h1></pre>  </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='nav-link fw-normal' to="/"><h4>Home</h4></Link>
                        <Link className='nav-link fw-normal' to="/products"><h4>Products</h4></Link>
                        <Link className=' ms-4 btn btn-success rounded-5' to="/login">Login</Link>
                        <Link className='ms-3 btn rounded-5' to="/signup">SignUp</Link>


                    </Nav>
                </Navbar.Collapse>
                </Container>
            
        </Navbar>
        </>
    );
}

export default NavigationBar;