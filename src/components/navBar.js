import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" className="justify-content-between">
      <Navbar.Brand href="#home" className="ml-5">Sobati Foundation</Navbar.Brand>
      <Nav>
        <Nav.Link href="#home" className="mr-3">Home</Nav.Link>
        <Nav.Link href="#about" className="mr-3">About Us</Nav.Link>
        <Nav.Link href="#achievements" className="mr-4">Achievements</Nav.Link>
        <Nav.Link href="#contact" className="mr-4">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;