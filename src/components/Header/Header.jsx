import React from "react";

import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";
import "./Header.scss";
function Header() {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
}

export default Header;
