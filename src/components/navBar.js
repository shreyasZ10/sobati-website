import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // Import Link from react-router-dom

const NavBar = () => {
  const location = useLocation(); // Get the current location

    // If the current route is '/gallery', only render the Home link
    if (location.pathname === '/gallery' || location.pathname === '/articles') {
      return (
        <Navbar collapseOnSelect expand="md" fixed="top" bg="dark" variant="dark">
      <Navbar.Brand href="/#home" className="ml-md-5">
        <img src='/home/logo/logo2.jpeg' alt="About Us" style={{ width: '40%' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto mr-md-5">
          <Nav.Link href="/#home" className="mr-md-3">Home</Nav.Link>
          <Nav.Link href="/#about" className="mr-md-3">About Us</Nav.Link>
          <Nav.Link href="/#achievements" className="mr-md-4">Achievements</Nav.Link>
          <Nav.Link href="/#donate" className="mr-md-4">Donate</Nav.Link>
          {/* Use Link component for Gallery link */}
          <Nav.Link as={Link} to="/gallery" className="mr-md-4">Gallery</Nav.Link>
          <Nav.Link as={Link} to="/articles" className="mr-md-4">Articles</Nav.Link>
          <Nav.Link href="/#contact" className="mr-md-4">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      );
    }

  return (
    <Navbar collapseOnSelect expand="md" fixed="top" bg="dark" variant="dark">
      <Navbar.Brand href="#home" className="ml-md-5">
        <img src='/home/logo/logo2.jpeg' alt="About Us" style={{ width: '40%' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto mr-md-5">
          <Nav.Link href="#home" className="mr-md-3">Home</Nav.Link>
          <Nav.Link href="#about" className="mr-md-3">About Us</Nav.Link>
          <Nav.Link href="#achievements" className="mr-md-4">Achievements</Nav.Link>
          <Nav.Link href="#donate" className="mr-md-4">Donate</Nav.Link>
          {/* Use Link component for Gallery link */}
          <Nav.Link as={Link} to="/gallery" className="mr-md-4">Gallery</Nav.Link>
          <Nav.Link as={Link} to="/articles" className="mr-md-4">Articles</Nav.Link>
          <Nav.Link href="#contact" className="mr-md-4">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
