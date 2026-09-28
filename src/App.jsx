import { Outlet } from "react-router";
import { Link } from "react-router";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img src='/global-news-wire-logo.svg' width="50" height="50" alt="Logo" className="me-2" />
            <span>Global News Wire</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/Employee'>Employee</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>
      <footer className="bg-body-tertiary py-1 mt-5">
        <Container fluid>
          <div className="text-center">
            © Global News Wire | All rights reserved
          </div>
        </Container>
      </footer>
    </>
  )
}

export default App
