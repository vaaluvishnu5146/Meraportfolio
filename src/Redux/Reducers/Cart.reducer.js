import { createSlice } from "@reduxjs/toolkit";

const CartReducer = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    // Action creators goes inside
    addToCart: (state, action) => {
      if (action.payload) {
        state.items = [...state.items, { ...action.payload, quantity: 1 }];
      }
    },
    handleCountChange: (state, action) => {
      if (action.payload) {
        const cartItemsCopy = [...state.items];
        const filteredInstance = cartItemsCopy.find(
          (items) => items.id === action.payload.id
        );
        if (filteredInstance) {
          action.payload.type === "inc"
            ? (filteredInstance.quantity += 1)
            : (filteredInstance.quantity -= 1);
          state.items = cartItemsCopy;
        }
      }
    },
  },
});

export const { addToCart, handleCountChange } = CartReducer.actions;
export default CartReducer.reducer;
