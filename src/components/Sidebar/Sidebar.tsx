import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar">
        <NavLink to="/" className="sidebar-brand">
          Admin
        </NavLink>
        <div className="sidebar-nav">
          <NavLink to="/" className="nav-link" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink
            to="/add-product"
            className="nav-link"
            activeClassName="active"
          >
            Add product
          </NavLink>
          <NavLink to="/about" className="nav-link" activeClassName="active">
            About
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
