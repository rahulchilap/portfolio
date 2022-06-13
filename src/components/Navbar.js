import React from "react";
import logo from "../logo.png";
import { Link } from "react-scroll";
//react font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo.." className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon
              icon={faBars}
              style={{
                color: "white",
              }}
            />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link smooth={true} to="home" className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="about"
                  offset={-110}
                  className="nav-link"
                  href="/"
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="services"
                  offset={-110}
                  className="nav-link"
                  href="/"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="experience"
                  className="nav-link"
                  offset={-110}
                  href="/"
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="portfolio"
                  offset={-110}
                  className="nav-link"
                  href="/"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="contacts"
                  offset={-110}
                  className="nav-link"
                  href="/"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
