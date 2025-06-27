import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartSlice";
import menuReducer from "../store/menuSlice";
import OrderPage from "./OrderPage";

function setupStore(preloadedState = {}) {
  return configureStore({
    reducer: {
      cart: cartReducer,
      menu: menuReducer,
    },
    preloadedState,
  });
}

describe("OrderPage", () => {
  it("renders empty cart message", () => {
    const store = setupStore({
      cart: { items: [], count: 0, total: 0 },
      menu: { meals: [], loading: false, error: null },
    });

    render(
      <Provider store={store}>
        <OrderPage />
      </Provider>
    );

    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
  });

  it("renders cart items", () => {
    const store = setupStore({
      cart: { items: [{ mealId: "1", count: 2, unitPrice: 10 }], count: 2, total: 20 },
      menu: { meals: [{ id: "1", price: 10, meal: "Pizza", img: "img.jpg" }], loading: false, error: null },
    });

    render(
      <Provider store={store}>
        <OrderPage />
      </Provider>
    );

    expect(screen.getByText("Pizza")).toBeInTheDocument();
    expect(screen.getByText("$10.00 USD")).toBeInTheDocument();
    expect(screen.getByDisplayValue("2")).toBeInTheDocument();
  });

  it("removes item when clicking remove", () => {
    const store = setupStore({
      cart: { items: [{ mealId: "1", count: 2, unitPrice: 10 }], count: 2, total: 20 },
      menu: { meals: [{ id: "1", price: 10, meal: "Pizza", img: "img.jpg" }], loading: false, error: null },
    });

    render(
      <Provider store={store}>
        <OrderPage />
      </Provider>
    );

    const removeBtn = screen.getByRole("button", { name: "X" });
    fireEvent.click(removeBtn);

    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
  });

  it("doesn't crash if menu.meals is empty", () => {
    const store = setupStore({
      cart: { items: [{ mealId: "2", count: 1, unitPrice: 99 }], count: 1, total: 99 },
      menu: { meals: [], loading: false, error: null },
    });

    render(
      <Provider store={store}>
        <OrderPage />
      </Provider>
    );

    expect(screen.getByText(/\$99.00 USD/)).toBeInTheDocument();
  });
});
