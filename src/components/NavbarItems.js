import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
function NavbarItems() {
  return (
    <div className='navbar'>
         <Navbar  data-bs-theme="light"  fixed="top">
        <Container>
          <Navbar.Brand href="#home" className='fs-3 fw-bold'>CoffeeMake</Navbar.Brand>
          <Nav className="ms-auto fs-4 nav-items">
          
            <Nav.Link className='fw-bold' href="#home ">Home</Nav.Link>
            <Nav.Link className='ms-3 fw-bold' href="#features">Menu</Nav.Link>
            <Nav.Link className='ms-3 fw-bold' href="#about-us">About us</Nav.Link>
            <Nav.Link className='ms-3 fw-bold' href="#Products">Products</Nav.Link>
            
            <Nav.Link className='login ms-5 fw-bold' href="Login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarItems