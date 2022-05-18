import {Navbar, Container, Nav, Offcanvas, NavDropdown, Form, Button, FormControl} from 'react-bootstrap'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
      <Navbar key='lg' expand='lg' className="mb-3">
        <Container fluid>
          <Navbar.Brand className='f-vladimir' href="#">Livianite</Navbar.Brand>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg '/>
          <Navbar.Offcanvas id='offcanvasNavbar-expand-lg' aria-labelledby='offcanvasNavbarLabel-expand-lg' placement="end" >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className='f-vladimir mx-auto' id='offcanvasNavbarLabel-expand-lg'>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link className='mx-1' href="#action1">Home</Nav.Link>
                <Nav.Link className='mx-1' href="#action2">Quienes Somos</Nav.Link>
                <NavDropdown className='mx-1' title="Tienda" id='offcanvasNavbarDropdown-expand-lg'>
                  <NavDropdown.Item className='animate slideIn' href="#action3">Diseños</NavDropdown.Item>
                  <NavDropdown.Item className='animate slideIn' href="#action4">Ofertas y Stock Inmediato</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl type="search" placeholder="Busca un producto..." className="me-2" aria-label="Search" />
                <Button variant="light">Buscar</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    )
}

export default NavBar;