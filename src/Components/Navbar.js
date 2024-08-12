import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./NavbarStyles.css";
import logo from "../assets/amoxtli.png"; // Adjust the path as needed

class Navbar extends Component {
  state = { clicked: false, scrolled: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <nav
        className={`NavbarItems obj-width shadow ${
          this.state.scrolled ? "blurred" : ""
        }`}
      >
        <h1>
          <NavLink to="/" activeClassName="active">
            <img
              src={logo}
              alt="Amoxtli Logo"
              className="navbar-logo"
              style={{ height: "50px", width: "auto" }} // Adjust size as needed
            />
          </NavLink>
        </h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                className={item.cName}
                to={item.url}
                activeClassName="active"
              >
                <i className={item.icon}></i>
                {item.title}
              </NavLink>
            </li>
          ))}
          <NavLink className="talkToUs" target="_blank" to="/talk-to-us">
            Talk to us
          </NavLink>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
