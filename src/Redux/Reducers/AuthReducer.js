import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "authentication",
  initialState: {
    loggedIn: false,
  },
  reducers: {
    setLoggedIn: (state, action) => {
      console.log(action);
      //   if (action.payload) {
      //     state.tasks.push(action.payload);
      //   }
    },
  },
});

export default AuthSlice.reducer;

// Action creators are generated for each case reducer function
export const { setLoggedIn } = AuthSlice.actions;
