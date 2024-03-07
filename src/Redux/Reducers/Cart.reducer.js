import { createSlice } from "@reduxjs/toolkit";
import { computeBilling } from "../../utils";

function computeCartPricing(state = {}) {
  const { total, grandTotal } = computeBilling(
    state.items,
    state.coupon,
    state.platformCharges
  );
  return {
    ...state,
    total,
    grandTotal,
  };
}

const CartReducer = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    coupon: {
      name: "COUPA50",
      value: 50,
      type: "%",
    },
    total: 0,
    grandTotal: 0,
    platformCharges: 10,
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
    handleCartValueComputation: (state) => {
      return {
        ...state,
        ...computeCartPricing(state),
      };
    },
  },
});

export const { addToCart, handleCountChange, handleCartValueComputation } =
  CartReducer.actions;
export default CartReducer.reducer;
