import { configureStore } from "@reduxjs/toolkit";
import CoursesReducer from "./Reducers/Courses.reducer";
import CartReducer from "./Reducers/Cart.reducer";

export default configureStore({
  // ROOT REDUCER
  reducer: {
    courses: CoursesReducer,
    cart: CartReducer,
  },
});
