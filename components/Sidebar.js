import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
      Naslovnica
      </a>

      <a className="menu-item" href="/instruktori">
      Instruktori
      </a>

      <a className="menu-item" href="/predmeti">
      Predmeti
      </a>

      <a className="menu-item" href="/uputstva">
      Uputstva
      </a>

      <a className="menu-item" href="/cjenik">
      Cjenik
      </a>

      <a className="menu-item" href="/faq">
      FAQ
      </a>

      <a className="menu-item" href="/kontakt">
      Kontakt
      </a>

      <a className="menu-item" href="/petplus">
      Pet Plus
      </a>
    </Menu>
  );
};
