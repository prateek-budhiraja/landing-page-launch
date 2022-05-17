import React from "react";
import { Navbar, NavLink, NavbarBrand, NavbarText } from "reactstrap";

import { BsTwitter, BsInstagram } from "react-icons/bs";

const Nav = () => {
  return (
    <Navbar className="nav">
      <NavbarBrand className="brand text-dark" href="#">
        Appleeeee
      </NavbarBrand>
      <NavbarText>
        <NavLink href="#" className="socials text-dark">
          <BsInstagram size={"2vh"} />
        </NavLink>
        <NavLink href="#" className="socials text-dark">
          <BsTwitter size={"2vh"} />
        </NavLink>
      </NavbarText>
    </Navbar>
  );
};

export default Nav;
