import React from "react";
import styles from "./App.module.css";
import { assets } from "../../assets/assets";
const AppDownload = () => {
  return (
    <div className={styles.app_download} id="app-download">
      <p>
        For Better Experiencce Download <br /> Tomato App
      </p>
      <div className={styles.app_download_platforms}>
        <img src={assets.play_store} />
        <img src={assets.app_store} />
      </div>
    </div>
  );
};

export default AppDownload;
