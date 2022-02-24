import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
    
    
    <Navbar.Brand href="/">Diner</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link href="/findRecipe">Browse Recipe</Nav.Link>
    </Nav>
  </Navbar>
  )
}

export default Header