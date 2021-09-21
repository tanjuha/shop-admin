import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="container-fluid">
        <a className="sidebar-brand" href="#">
          Navbar
        </a>
        <div className="sidebar-nav">
          <a className="nav-link active" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Features
          </a>
          <a className="nav-link" href="#">
            Pricing
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
