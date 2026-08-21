import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
    <>
      <Navbar bg="primary p-3" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" className='text-light fs-3'>Navbar</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home" as={NavLink} to={"/"} className='text-light'>Home</Nav.Link>
            <Nav.Link href="#features" as={NavLink} to={"/service"} className='text-light'>Service</Nav.Link>
            <Nav.Link href="#pricing" as={NavLink} to={"/product/1"} className='text-light'>Product</Nav.Link>
            <Nav.Link href="#pricing" as={NavLink} to={"/contact"} className='text-light'>Contact</Nav.Link>
          </Nav>
          <Button className='bg-success'>Log In</Button>
        </Container>
      </Navbar>
    </>
  );
}
export default Navigation;
