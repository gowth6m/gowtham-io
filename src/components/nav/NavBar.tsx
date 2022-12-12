import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleClass = function toggleClass(
    element: Element,
    stringClass: string
  ) {
    if (element.classList.contains(stringClass))
      element.classList.remove(stringClass);
    else element.classList.add(stringClass);
  };

  const handleClick = () => {
    var lineOne = Array.from(
      document.getElementsByClassName("menu-icon__line")
    )[0];
    var lineTwo = Array.from(
      document.getElementsByClassName("menu-icon__line")
    )[1];
    var lineThree = Array.from(
      document.getElementsByClassName("menu-icon__line")
    )[2];
    toggleClass(lineOne, "menu_icon_line_one");
    toggleClass(lineTwo, "menu_icon_line_two");
    toggleClass(lineThree, "menu_icon_line_three");
    setClick(!click);
  };

  const openSocial = (socialLink: string) => {
    window.open(socialLink);
  };

  return (
    <>
      <nav className="navbar screen-max">
        <div className="nav-container">
          <NavLink
            to="/"
            className="nav-logo"
            onClick={() => handleClickScroll("home")}
          >
            <img
              src={process.env.PUBLIC_URL + "/assets/logo_transparent.svg"}
              alt="logo"
              className="navbar-logo"
            ></img>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                onClick={() => {
                  handleClick();
                  handleClickScroll('home');
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={() => {
                  handleClick();
                  handleClickScroll('aboutme');
                }}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className="nav-links"
                onClick={handleClick}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={handleClick}>
                Contact Us
              </NavLink>
            </li>
            <div className="nav-socials">
              <div
                onClick={() => openSocial("https://github.com/gowth6m")}
                className="nav-socials-item"
              >
                <i className="fa-brands fa-2xl fa-github"></i>
              </div>
              <div
                onClick={() =>
                  openSocial("https://www.linkedin.com/in/gowth6m/")
                }
                className="nav-socials-item"
              >
                <i className="fa-brands fa-2xl fa-linkedin"></i>
              </div>
              <div
                onClick={() => openSocial("https://www.google.com")}
                className="nav-socials-item"
              >
                <i className="fa-brands fa-2xl fa-youtube"></i>
              </div>
              <div
                onClick={() => openSocial("https://twitter.com/gowth6m")}
                className="nav-socials-item"
              >
                <i className="fa-brands fa-2xl fa-twitter"></i>
              </div>
            </div>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <div className="menu-icon hover-target">
              <span className="menu-icon__line menu-icon__line-left"></span>
              <span className="menu-icon__line"></span>
              <span className="menu-icon__line menu-icon__line-right"></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
