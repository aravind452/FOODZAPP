import React, { useContext } from "react";
import styles from "./Order.module.css";
import { StoreContext } from "../../Context/StoreContext";
const Order = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className={styles.place_order}>
      <div className={styles.place_order_left}>
        <p className={styles.title}>Delivery Information</p>
        <div className={styles.multi_fields}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Street" />
        <div className={styles.multi_fields}>
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className={styles.multi_fields}>
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className={styles.place_order_right}>
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
          <button onClick={() => navigate("/order")}>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default Order;
