import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar">
        <NavLink to="/shop-admin" className="sidebar-brand">
          Admin
        </NavLink>
        <div className="sidebar-nav">
          <NavLink to="/shop-admin" className="nav-link" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink
            to="/shop-admin/add-product"
            className="nav-link"
            activeClassName="active"
          >
            Add product
          </NavLink>
          <NavLink to="/shop-admin/about" className="nav-link" activeClassName="active">
            About
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
