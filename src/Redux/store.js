import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Reducers/AuthReducer";
import BlogReducer from "./Reducers/BlogReducer";

export default configureStore({
  // ROOT REDUCER
  reducer: {
    authentication: AuthReducer,
    blogs: BlogReducer,
  },
});
