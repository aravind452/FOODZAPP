import styles from "./Navbar.module.css";
import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import { Link } from "react-router-dom";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  console.log("navbar");
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <img src={assets.logo} alt="Logo" className={styles.logo} />
      </Link>
      <ul className={styles.navbar_menu}>
        <Link
          to="/"
          onClick={() => {
            setMenu("home");
          }}
          className={menu === "home" ? styles.active : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => {
            setMenu("menu");
          }}
          className={menu === "menu" ? styles.active : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => {
            setMenu("mobile-app");
          }}
          className={menu === "mobile-app" ? styles.active : ""}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          onClick={() => {
            setMenu("contact-us");
          }}
          className={menu === "contact-us" ? styles.active : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className={styles.navbar_right}>
        <img src={assets.search_icon} alt="search" />
        <div className={styles.navbar_search_icon}>
          <Link to="/cart">
            <img src={assets.basket_icon} />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : styles.dot} />
        </div>
        <button
          onClick={() => {
            setShowLogin(true);
          }}
        >
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
