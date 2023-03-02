import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '/logo.png'
function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-lg" sticky="top">
      <Container fluid >
        <Navbar.Brand href="#home"><img src={logo} alt="logo" style={{width:'6rem'}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#sec1">ประวัติบริษัท</Nav.Link>
            <Nav.Link href="#sec2">Evaporator and Condenser </Nav.Link>
            <Nav.Link href="#sec3">ท่อทองแดง (Copper pipe)</Nav.Link>
            <Nav.Link href="#sec4">ใบพัดลม (fan)</Nav.Link>
            <Nav.Link href="#sec5">ท่อลมแอร์</Nav.Link>
            <Nav.Link href="#sec6">แผงPCBA</Nav.Link>
            <Nav.Link href="#sec7">โฟม</Nav.Link>
            <Nav.Link href="#sec8">กล่องกระดาษ (carton box)</Nav.Link>
            <Nav.Link href="#sec9">Gusset</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;