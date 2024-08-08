import React, { useContext, useEffect, useState } from "react";
import styles from "./LoginPopup.module.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { StoreContext } from "../../Context/StoreContext";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken, user, setUser, loadCartData, token } =
    useContext(StoreContext);
  const [currState, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLoginHandler = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setUser(true);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };
  return (
    <div className={styles.login_popup}>
      <form onSubmit={onLoginHandler} className={styles.login_popup_container}>
        <div className={styles.login_popup_title}>
          <h2>{currState}</h2>
          <img src={assets.cross_icon} onClick={() => setShowLogin(false)} />
        </div>
        <div className={styles.login_popup_inputs}>
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="Your Name"
              required
              name="name"
              value={data.name}
              onChange={onChangeHandler}
            />
          )}

          <input
            type="email"
            placeholder="Your Email"
            required
            name="email"
            onChange={onChangeHandler}
            value={data.email}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={onChangeHandler}
            name="password"
            value={data.password}
          />
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
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
