import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  return (
    <div className={styles.cart}>
      <div className={styles.cart_items}>
        <div className={styles.cart_items_title}>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div
                  className={`${styles.cart_items_title} ${styles.cart_items_item}`}
                >
                  <img src={item.image} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    className={styles.cross}
                    onClick={() => {
                      removeFromCart(item._id);
                    }}
                  >
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className={styles.cart_bottom}>
        <div className={styles.cart_total}>
          <h2>Cart Total</h2>
          <div>
            <div className={styles.cart_total_details}>
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className={styles.cart_total_details}>
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className={styles.cart_total_details}>
              <b>Total</b>
              <b>{getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECK OUT
          </button>
        </div>
        <div className={styles.cart_promocode}>
          <div>
            <p>If you have a promo code enter it here!</p>
            <div className={styles.cart_promocode_input}>
              <input type="text" placeholder="Promo Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
