import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";
import logo from "../assets/Logo.svg";
import "./navbar.css"


export const NavBar = () => {
    return (
      <div className="menuNav">
          <Nav className="navbar">
              <img src={logo} alt="logo" width={70} />            
              <Nav.Link href="#inicio">Inicio</Nav.Link>
              <Nav.Link href="#catalogo">Catalogo</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          <div className="carro">
              <CartWidget />
          </div>
      </div>
      );
};






      

