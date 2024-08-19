import React from "react";
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside className="sidebar">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
