import React from "react";
import { NavDropdown, Navbar, Container, Nav } from "react-bootstrap";

export default function Navbar2() {
  return (
    <Navbar  bg="transparent" expand="lg" style={{position:"fixed", width:"100%", zIndex:5}}>
  <Container>
    <Navbar.Brand > <h4 style={{textShadow:"1px 1px 2px #fff", color:"#000" }}> Carlos Quijano </h4> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}
