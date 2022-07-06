import React from "react";
import {NavLink} from "react-router-dom"
function Navbar(){
return(
<>
<nav className="navbar navbar-expand-sm text-white justify-content-center">
      <div className="container-fluid">
        <img src="https://bootstrapmade.com/demo/templates/Delicious/index.html" />
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link text-warning" to="/">Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/menu">Menu</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/specials">Specials</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/events">Events</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/chefs">Chefs</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/">Drop Down</NavLink>
            <div className="dropdown-menu">
              <NavLink to="/" className="dropdown-item">yea</NavLink>
              <NavLink to="/" className="dropdown-item">boi</NavLink>
              <NavLink to="/" className="dropdown-item">es</NavLink>
              <NavLink to="/" className="dropdown-item">pro</NavLink>
              <NavLink to="/" className="dropdown-item">KiAaN</NavLink>
            </div>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link bg-warning" to="/table">Book a Table</NavLink>
          </li>
        </ul>
      </div>
    </nav>
</>
);
}
export default Navbar;