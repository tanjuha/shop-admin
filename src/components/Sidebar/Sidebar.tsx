import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
        <a className="sidebar-brand" href="#">
         Admin
        </a>
        <div className="sidebar-nav">
          <a className="nav-link " href="#">
            Home
          </a>
          <a className="nav-link active" href="#">
            Add product
          </a>
          <a className="nav-link" href="#">
            About
          </a>
        </div>
    </nav>
  );
};

export default Sidebar;
