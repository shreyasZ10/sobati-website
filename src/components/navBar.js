import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../App.css'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (location.pathname === '/gallery' || location.pathname === '/articles' || location.pathname === '/ourteam' || location.pathname === '/ourstudents') {
    return (
      <Navbar collapseOnSelect expand="md" fixed="top" bg="dark" variant="dark" className="flex-column">
        {!scrolled && (
          <Navbar.Brand href="/#home" className="mx-auto">
            <img src='/home/logo/logo3.jpeg' alt="About Us" style={{ width: '100%', height: '250px' }} />
          </Navbar.Brand>
        )}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="w-100">
          <Nav className="mx-auto justify-content-around">
            <Nav.Link href="/#home" className="mr-md-3">Home</Nav.Link>
            <Nav.Link href="/#about" className="mr-md-3">About Us</Nav.Link>
            <Nav.Link href="/#achievements" className="mr-md-4">Our Projects</Nav.Link>
            <Nav.Link href="/#donate" className="mr-md-4">Donate</Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="mr-md-4">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/articles" className="mr-md-4">Articles</Nav.Link>
            <Nav.Link as={Link} to="/ourteam" className="mr-md-4">Our Team</Nav.Link>
            <Nav.Link as={Link} to="/ourstudents" className="mr-md-4">Our Students</Nav.Link>
            <Nav.Link href="/#contact" className="mr-md-4">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  return (
    <Navbar collapseOnSelect expand="md" fixed="top" bg="dark" variant="dark" className="flex-column">
      {!scrolled && (
        <Navbar.Brand href="#home" className="mx-auto">
          <img src='/home/logo/logo3.jpeg' alt="About Us" style={{ width: '100%', height: '250px' }} />
        </Navbar.Brand>
      )}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="w-100">
        <Nav className="mx-auto justify-content-around">
          <Nav.Link href="#home" className="mr-md-3">Home</Nav.Link>
          <Nav.Link href="#about" className="mr-md-3">About Us</Nav.Link>
          <Nav.Link href="#achievements" className="mr-md-4">Our Projects</Nav.Link>
          <Nav.Link href="#donate" className="mr-md-4">Donate</Nav.Link>
          <Nav.Link as={Link} to="/gallery" className="mr-md-4">Gallery</Nav.Link>
          <Nav.Link as={Link} to="/articles" className="mr-md-4">Articles</Nav.Link>
          <Nav.Link as={Link} to="/ourteam" className="mr-md-4">Our Team</Nav.Link>
          <Nav.Link as={Link} to="/ourstudents" className="mr-md-4">Our Students</Nav.Link>
          <Nav.Link href="#contact" className="mr-md-4">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
