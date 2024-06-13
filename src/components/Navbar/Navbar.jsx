import React from "react";
import logo from "../../helper/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="link">
          <a href="">HOROSCOPES</a>
          <a href="">DAILY</a>
          <a href="">TAROT</a>
          <a href="">ARTICLES</a>
          <a href="">CONTACT</a>
      </div>
    </div>
  );
};

export default Navbar;
