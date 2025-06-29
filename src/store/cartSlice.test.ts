import cartReducer, {
  addToCart,
  removeFromCart,
  updateCartItemCount,
  clearCart,
  CartItem,
} from "./cartSlice";

describe("cartSlice", () => {
  const initialState = {
    items: [] as CartItem[],
    count: 0,
    total: 0,
  };

  it("should handle addToCart", () => {
    const item: CartItem = { mealId: "1", count: 1, unitPrice: 10 };
    const nextState = cartReducer(initialState, addToCart(item));
    expect(nextState.items.length).toBe(1);
    expect(nextState.count).toBe(1);
    expect(nextState.total).toBe(10);
  });

  it("should increase count if same item added twice", () => {
    const item: CartItem = { mealId: "1", count: 1, unitPrice: 10 };
    let state = cartReducer(initialState, addToCart(item));
    state = cartReducer(state, addToCart(item));
    expect(state.items.length).toBe(1);
    expect(state.items[0].count).toBe(2);
    expect(state.count).toBe(2);
    expect(state.total).toBe(20);
  });

  it("should update item count", () => {
    const startState = {
      ...initialState,
      items: [{ mealId: "1", count: 1, unitPrice: 10 }],
      count: 1,
      total: 10,
    };
    const nextState = cartReducer(
      startState,
      updateCartItemCount({ mealId: "1", count: 3 })
    );
    expect(nextState.items[0].count).toBe(3);
    expect(nextState.count).toBe(3);
    expect(nextState.total).toBe(30);
  });

  it("should remove item if count updated to 0", () => {
    const startState = {
      ...initialState,
      items: [{ mealId: "1", count: 2, unitPrice: 10 }],
      count: 2,
      total: 20,
    };
    const nextState = cartReducer(
      startState,
      updateCartItemCount({ mealId: "1", count: 0 })
    );
    expect(nextState.items.length).toBe(0);
    expect(nextState.count).toBe(0);
    expect(nextState.total).toBe(0);
  });

  it("should remove item", () => {
    const startState = {
      ...initialState,
      items: [{ mealId: "1", count: 1, unitPrice: 10 }],
      count: 1,
      total: 10,
    };
    const nextState = cartReducer(startState, removeFromCart({ mealId: "1" }));
    expect(nextState.items.length).toBe(0);
    expect(nextState.count).toBe(0);
    expect(nextState.total).toBe(0);
  });

  it("should not change cart if trying to remove non-existent item", () => {
    const startState = {
      ...initialState,
      items: [{ mealId: "1", count: 1, unitPrice: 10 }],
      count: 1,
      total: 10,
    };
    const nextState = cartReducer(startState, removeFromCart({ mealId: "2" }));
    expect(nextState).toEqual(startState);
  });

  it("should clear cart", () => {
    const startState = {
      ...initialState,
      items: [{ mealId: "1", count: 2, unitPrice: 5 }],
      count: 2,
      total: 10,
    };
    const nextState = cartReducer(startState, clearCart());
    expect(nextState.items.length).toBe(0);
    expect(nextState.count).toBe(0);
    expect(nextState.total).toBe(0);
  });
});
