import React from "react";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <a className="navbar-brand" href="#">
          {props.title}
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
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            
          </ul>

          <div
            className={`custom-control custom-switch text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
          >
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
              onClick={props.toggleMode}
            />
            <label className="custom-control-label" htmlFor="customSwitch1">
              {props.modeText}
            </label>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

Navbar.propTypes = { tilte: PropTypes.string };

Navbar.defaultProps = {
  title: "My title",
  about: "About",
};