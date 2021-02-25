//Layout of the Navbar
import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

const index = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Emeretus</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          {/* Links that in between */}
          <NavMenu>
            <NavItem>
              <NavLinks to="about"></NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default index;
