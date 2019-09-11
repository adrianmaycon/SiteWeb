import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class AdminNavbarLinks extends Component {
  render() {
    return (
      <div>
        <Nav pullRight>
          <NavDropdown
            eventKey={2}
            title="Configurações"
            id="basic-nav-dropdown-right"
          >
            <MenuItem eventKey={2.1}>Minha Conta</MenuItem>
            <MenuItem eventKey={2.2}>Instituições</MenuItem>
            <MenuItem eventKey={2.3}>Biblioteca</MenuItem>
            <MenuItem eventKey={2.4}>Psicologos</MenuItem>
            <MenuItem eventKey={2.5}>Ajuda</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.5}>Sair da Conta</MenuItem>
          </NavDropdown>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
