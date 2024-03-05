import { createSlice } from "@reduxjs/toolkit";

const BlogSlice = createSlice({
  name: "blog",
  initialState: {
    data: [],
  },
  reducers: {
    // ACTION CREATORS
    storeBlogs: (state, action) => {
      if (action.payload) {
        state.data = [...action.payload];
      }
    },
  },
});

export default BlogSlice.reducer;
// Action creators are generated for each case reducer function
export const { storeBlogs } = BlogSlice.actions;
