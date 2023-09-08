import React from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Link className="menu-item" href="/">
      Naslovnica
      </Link>

      <Link className="menu-item" href="/instruktori">
      Instruktori
      </Link>

      <Link className="menu-item" href="/predmeti">
      Predmeti
      </Link>

      <Link className="menu-item" href="/uputstva">
      Uputstva
      </Link>

      <Link className="menu-item" href="/cjenik">
      Cjenik
      </Link>

      <Link className="menu-item" href="/faq">
      FAQ
      </Link>

      <Link className="menu-item" href="/kontakt">
      Kontakt
      </Link>

      <Link className="menu-item" href="/petplus">
      Pet Plus
      </Link>
    </Menu>
  );
};
