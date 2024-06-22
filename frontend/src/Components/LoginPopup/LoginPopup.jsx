import React, { useState } from "react";
import styles from "./LoginPopup.module.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className={styles.login_popup}>
      <form className={styles.login_popup_container}>
        <div className={styles.login_popup_title}>
          <h2>{currState}</h2>
          <img src={assets.cross_icon} onClick={() => setShowLogin(false)} />
        </div>
        <div className={styles.login_popup_inputs}>
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}

          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className={styles.login_popup_condition}>
          <input type="checkbox" required />
          <p>By Continuing I agree!!!!!!!</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => {
                setCurrState("Sign Up");
              }}
            >
              Click Here!
            </span>
          </p>
        ) : (
          <p>
            Already have an account{" "}
            <span
              onClick={() => {
                setCurrState("Login");
              }}
            >
              Login Here!
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
