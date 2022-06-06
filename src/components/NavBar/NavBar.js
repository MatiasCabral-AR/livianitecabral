import {Navbar, Container, Nav, Offcanvas, NavDropdown} from 'react-bootstrap'
import './NavBar.css'
import DivLogo from '../DivLogo/DivLogo'
import { Link } from 'react-router-dom'
import App from '../../App'

const NavBar = () => {
    return (
      <Navbar key='lg' expand='lg' className="mb-3">
        <Container fluid>
          <Link to='/'><Navbar.Brand as={'div'} className='f-vladimir'>Livianite</Navbar.Brand></Link>
          <DivLogo divprops='ms-auto d-lg-none' logoprops='fas fa-shopping-cart fa-2xl me-3' />
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg '/>
          <Navbar.Offcanvas id='offcanvasNavbar-expand-lg' aria-labelledby='offcanvasNavbarLabel-expand-lg' placement="end" >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className='f-vladimir mx-auto' id='offcanvasNavbarLabel-expand-lg'>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1">
                <Link to='/'><Nav.Link as={'div'} className='mx-1' href="#action1">Home</Nav.Link></Link>
                <Link to='/quienes-somos'><Nav.Link as={'div'} className='mx-1' href="#action2">Quienes Somos</Nav.Link></Link>
                <NavDropdown className='mx-1' title="Tienda" id='offcanvasNavbarDropdown-expand-lg'>
                  <NavDropdown.Item className='animate slideIn' href="#action3">Diseños</NavDropdown.Item>
                  <NavDropdown.Item className='animate slideIn' href="#action4">Ofertas y Stock Inmediato</NavDropdown.Item>
                </NavDropdown>
                <DivLogo divprops='ms-auto justify-content-center align-items-center d-none d-lg-flex' logoprops='fas fa-shopping-cart fa-2xl me-3' />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    )
}

export default NavBar;