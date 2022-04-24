import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbarToggler, setNavbarToggler] = useState(false);
  const [changeNavbarBG, setChangeNavbarBG] = useState(false);

  const changeNavbarBackground = () => {
    if (window.scrollY >= 800) {
      setChangeNavbarBG(true);
    } else {
      setChangeNavbarBG(false);
    }
  };
  console.log(navbarToggler);
  window.addEventListener("scroll", changeNavbarBackground);
  const handleClick = () => {
    setNavbarToggler(!navbarToggler);
  };

  const scrollTo = (path) => {
    let element = document.getElementById(path);
    element?.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
    });
  };

  const handleNavbar = (path) => {
    setNavbarToggler(false);
    scrollTo(path);
  };

  return (
    <>
      <nav
        className={changeNavbarBG ? "navbar active" : "navbar"}
        id="navbar"
        style={{
          backgroundColor: navbarToggler && "#212121",
          animation: "1s ease-in",
          color: "/fff",
        }}
      >
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={() => handleNavbar("home")}
          >
            <strong>{"<NS/>"}</strong>
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={navbarToggler ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={navbarToggler ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-links ${navbarToggler && "active"}`}
                onClick={() => handleNavbar("skills")}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-links ${navbarToggler && "active"}`}
                onClick={() => handleNavbar("projects")}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-links ${navbarToggler && "active"}`}
                onClick={() => handleNavbar("contact")}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
