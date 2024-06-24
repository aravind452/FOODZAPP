import React, { act, useState } from "react";
import styles from "./Sidebar.module.css";
import { assets } from "../../assets/assets";
import { NavLink, useLocation } from "react-router-dom";
const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <nav className={styles.sidebar}>
      <div className={styles.sidebar_options}>
        <NavLink
          to="/add"
          className={`${styles.sidebar_option} ${
            currentPath === "/add" ? styles.active : ""
          }`}
        >
          <img src={assets.add_icon} />
          <p>Add Items</p>
        </NavLink>
        <NavLink
          to="/list"
          className={`${styles.sidebar_option} ${
            currentPath === "/list" ? styles.active : ""
          }`}
        >
          <img src={assets.order_icon} />
          <p>List Items</p>
        </NavLink>
        <NavLink
          to="/orders"
          className={`${styles.sidebar_option} ${
            currentPath === "/orders" ? styles.active : ""
          }`}
        >
          <img src={assets.order_icon} />
          <p>Orders</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
