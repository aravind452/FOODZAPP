import React, { useContext, useState } from "react";
import styles from "./FoodItem.module.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
const FoodItem = ({ id, name, price, description, image }) => {
  // const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className={styles.food_item}>
      <div className={styles.food_item_img_container}>
        <img
          src={url + "/images/" + image}
          className={styles.food_item_image}
        />

        {!cartItems[id] ? (
          <img
            className={styles.add}
            src={assets.add_icon_white}
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className={styles.food_item_counter}>
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => {
                addToCart(id);
              }}
            />
          </div>
        )}
      </div>
      <div className={styles.food_item_info}>
        <div className={styles.food_item_name_rating}>
          <p>{name}</p>
          <img src={assets.rating_starts} />
        </div>
        <p className={styles.food_item_desc}>{description}</p>
        <p className={styles.food_item_price}>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
