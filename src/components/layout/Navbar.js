import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Navbar,Nav } from 'react-bootstrap';
import logo from "../../resources/logo/logo.png"


const NavBar=()=> {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="#home" className="">
            <img
                src={logo}
                width="100"
                height="60"
                className=""
                alt="Optiscreen logo"
              />
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="">
                <Nav.Link href="#problem">Problem</Nav.Link>
                <Nav.Link href="#research">Research</Nav.Link>
                <Nav.Link href="#research">Research</Nav.Link>
                <Nav.Link href="#research">Research</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
}

export default NavBar
