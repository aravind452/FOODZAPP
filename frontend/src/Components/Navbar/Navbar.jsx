import styles from "./Navbar.module.css";
import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import { Link, useNavigate } from "react-router-dom";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken, loadCartData } =
    useContext(StoreContext);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
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
        {!token ? (
          <button
            onClick={() => {
              setShowLogin(true);
            }}
          >
            sign in
          </button>
        ) : (
          <div className={styles.navbar_profile}>
            <img src={assets.profile_icon} />
            <ul className={styles.navbar_profile_dropdown}>
              <li>
                <img src={assets.bag_icon} className={styles.img} />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
