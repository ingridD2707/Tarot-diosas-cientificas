import { NavLink, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function SiteNavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">🔮 Tarot</Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            
            <Nav.Link as={NavLink} to="/" end>
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cartas">
              Todas las cartas
            </Nav.Link>
            <Nav.Link as={NavLink} to="/tirada">
            Tirada
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
