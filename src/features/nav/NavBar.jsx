import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Button, Container } from "semantic-ui-react";

const NavBar = ({ setFormOpen }) => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img
            src="assets/logo.png"
            alt="Logo"
            style={{ marginRight: "20px" }}
          />
          Meg-events
        </Menu.Item>
        <Menu.Item as={NavLink} to="/events" name="Events" />
        <Menu.Item>
          <Button
            as={NavLink}
            to="/createEvent"
            positive
            inverted
            content="Create Event"
          />
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic inverted content="Login" />
          <Button
            basic
            inverted
            content="Register"
            style={{ marginLeft: "0.5em" }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
