import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <Navbar style={{backgroundColor:'#0099FF'}} data-bs-theme="dark">
        <Container>
          <Navbar.Brand ><Link to={'/'} style={{textDecoration:'none',color:'white'}} >DailyQuiz</Link></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link >Login</Nav.Link>
            <Nav.Link >Register</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header