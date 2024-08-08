import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_contents}>
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featurng a detectable arrays of dishes with
          the latest ingredients and culianry expertise. Our mission is to
          satisfy your cravings and elevate your dining experience and delicious
          meal at a time.
        </p>
        <button>View Button</button>
      </div>
    </div>
  );
};

export default Header;
