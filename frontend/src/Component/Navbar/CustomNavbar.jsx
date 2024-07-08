import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar'; 
import { Button } from 'react-bootstrap';
import Language from '../Language/Language';

function CustomNavbar() { 
  return (
    <BootstrapNavbar expand="lg" >
      <Container className='pt-3'>
        <BootstrapNavbar.Brand className='text-danger curved-text fs-1 fw-bolder p-3'>NETFLIX</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Language />
            <Button className='bg-danger ms-2'>Sign in</Button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default CustomNavbar;
