// Navbar.js
import { useState } from "react";
import pw_logo from '../../assets/images/pw_logo.png';
import { IoMdMenu } from "react-icons/io";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-main">

      <div className="nav-left-content">

        <IoMdMenu className="menu" onClick={() => setMenuOpen(!menuOpen)} />
          <div className="nav-image-contener">
        <img
          src={pw_logo}
          alt="Description"
          className="logo-image"
        />
        </div>

          <button type="submit" className="login-register-button-mobile">
          Login/Register
        </button>
      </div>

      <div className={menuOpen ? "nav-right-content open" : "nav-right-content"}>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact us</NavLink>
          </li>
        </ul>

        <button type="submit" className="login-register-button">
          Login/Register
        </button>

      </div>

    </nav>
  );
};

export default Navbar;