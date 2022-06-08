import {Navbar, Container, Nav, Offcanvas, NavDropdown} from 'react-bootstrap'
import './NavBar.css'
import DivLogo from '../DivLogo/DivLogo'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
      <Navbar key='lg' expand='lg' className="mb-3">
        <Container fluid>
          <Link to='/'><Navbar.Brand as={'div'} className='f-vladimir'>Livianite</Navbar.Brand></Link>
          <Link to='/cart' className='ms-auto d-lg-none text-dark'><DivLogo logoprops='fas fa-shopping-cart fa-2xl me-3' /></Link>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg '/>
          <Navbar.Offcanvas id='offcanvasNavbar-expand-lg' aria-labelledby='offcanvasNavbarLabel-expand-lg' placement="end" >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className='f-vladimir mx-auto' id='offcanvasNavbarLabel-expand-lg'>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1">
                <NavLink to='/' className={({isActive}) => isActive ? 'd-none' : ''}><Nav.Link as={'div'} className='mx-1'>Home</Nav.Link></NavLink>
                <NavLink to='/quienes-somos' className={({isActive}) => isActive ? 'd-none' : ''}><Nav.Link as={'div'} className='mx-1'>Quienes Somos</Nav.Link></NavLink>
                <NavDropdown className='mx-1' title="Tienda" id='offcanvasNavbarDropdown-expand-lg'>
                  <NavLink to='/category/Ofertas' className={({isActive}) => isActive ? 'd-none' : ''}><NavDropdown.Item as={'div'} className='animate slideIn'>Ofertas</NavDropdown.Item></NavLink>
                  <NavLink to='/category/Lenceria' className={({isActive}) => isActive ? 'd-none' : ''}><NavDropdown.Item as={'div'} className='animate slideIn'>Lenceria</NavDropdown.Item></NavLink>
                  <NavLink to='/category/Interior' className={({isActive}) => isActive ? 'd-none' : ''}><NavDropdown.Item as={'div'} className='animate slideIn'>Ropa Interior</NavDropdown.Item></NavLink>
                </NavDropdown>
                <Link to='/cart' className='ms-auto justify-content-center align-items-center d-none d-lg-flex text-dark'><DivLogo logoprops='fas fa-shopping-cart fa-2xl me-3' /></Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    )
}

export default NavBar;