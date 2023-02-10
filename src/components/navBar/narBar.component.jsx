import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import {
 
  Navbar,
  Nav,
  Container,
  DropdownButton,
  Dropdown,
  Row,
} from "react-bootstrap";

import "bootstrap";

//font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";



import DropdownItem from "react-bootstrap/esm/DropdownItem";
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar fixed="top" bg="primary" variant="dark" id="navbar">
          <Container>
            <Navbar.Brand href="#home">
              Users<span id="usuario-sub-bram"></span>
              <Row>
              
                  </Row>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"></Nav>
              <DropdownButton title="usuario">
                <Dropdown.Header id="dropdown-header">
                  <Row>
                    <FontAwesomeIcon icon={faUserCircle} />
                  </Row>
                  <Row>#USUARIO</Row>
                  
                 
                </Dropdown.Header>

                <Dropdown.Divider />
                
                <DropdownItem href="#/action-1">Cerrar sesion</DropdownItem>
              </DropdownButton>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </> 
    );
  }
}
