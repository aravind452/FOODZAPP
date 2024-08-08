import React from "react";
import styles from "./ExploreMenu.module.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className={styles.explore_menu} id="explore-menu">
      <h1>Explore Menu</h1>
      <p className={styles.explore_menu_text}>
        Choose from a diverse menu featurng a detectable arrays of dishes with
        the latest ingredients and culianry expertise. Our mission is to satisfy
        your cravings and elevate your dining experience and delicious meal at a
        time.
      </p>
      <div className={styles.explore_menu_list}>
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              className={styles.explore_menu_list_item}
              onClick={() => {
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                );
              }}
            >
              <img
                src={item.menu_image}
                alt=""
                className={category === item.menu_name ? styles.active : ""}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
