import React from "react";
import styles from "./Navbar.module.css";
import { assets } from "../../assets/assets.js";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src={assets.logo} />
      <img className={styles.profile} src={assets.profile_image} />
    </div>
  );
};

export default Navbar;
