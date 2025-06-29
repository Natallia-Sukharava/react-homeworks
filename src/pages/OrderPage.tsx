import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/hooks";
import type { RootState } from "../store";

import { fetchMenu } from "../store/menuSlice";
import {
  CartItem,
  removeFromCart,
  updateCartItemCount,
} from "../store/cartSlice";
import "./OrderPage.css";

const OrderPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useSelector((s: RootState) => s.cart.items);
  const meals = useSelector((s: RootState) => s.menu.meals);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");

  const handleCountChange = (mealId: string, newCount: number) => {
    if (newCount < 1) return;
    dispatch(updateCartItemCount({ mealId, count: newCount }));
  };

  const handleRemove = (mealId: string) => {
    dispatch(removeFromCart({ mealId }));
  };

  const handleOrder = () => {
    console.log("Submitting order:", { street, house, cartItems });
  };

  return (
    <main className="order-wrapper">
      <h1 className="order-title">Finish your order</h1>

      {cartItems.length === 0 && (
        <p className="order-empty">Your cart is empty.</p>
      )}

      {cartItems.map((item: CartItem) => {
        const meal = meals.find((m) => m.id === item.mealId);
        const unitPrice = meal?.price ?? item.unitPrice;
        return (
          <div className="order-card" key={item.mealId}>
            <img
              src={meal?.img}
              alt={meal?.meal}
              className="order-item-img"
            />
            <div className="order-item-info">
              <p className="order-item-name">{meal?.meal || "Unknown"}</p>
            </div>
            <p className="order-item-price">
              ${unitPrice.toFixed(2)} USD
            </p>
            <input
              type="number"
              className="order-item-count"
              value={item.count}
              min={1}
              onChange={(e) =>
                handleCountChange(item.mealId, +e.target.value)
              }
            />
            <button
              className="order-item-remove"
              onClick={() => handleRemove(item.mealId)}
            >
              X
            </button>
          </div>
        );
      })}

      <div className="order-form">
        <label className="order-field">
          <span>Street</span>
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </label>
        <label className="order-field">
          <span>House</span>
          <input
            type="text"
            value={house}
            onChange={(e) => setHouse(e.target.value)}
          />
        </label>
        <button className="order-submit" onClick={handleOrder}>
          Order
        </button>
      </div>
    </main>
  );
};

export default OrderPage;