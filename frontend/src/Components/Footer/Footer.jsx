import React from "react";
import styles from "./Footer.module.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className={styles.footer} id="footer">
      <div className={styles.footer_content}>
        <div className={styles.footer_content_left}>
          <img src={assets.logo} />
          <p>
            To create a smooth underline effect for a li tag in CSS, you can use
            various methods, such as using pseudo-elements, CSS animations, or
            transitioning properties. Here’s how you can achieve a smooth
            underline effect:
          </p>
          <div className={styles.footer_social_icons}>
            <img src={assets.facebook_icon} alt="hello" />
            <img src={assets.twitter_icon} />
            <img src={assets.linkedin_icon} />
          </div>
        </div>
        <div className={styles.footer_content_center}>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={styles.footer_content_right}>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>6565656565656</li>
            <li>kdhfksdfhkj@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className={styles.copyright}>COPYRIGHT</p>
    </div>
  );
};

export default Footer;
