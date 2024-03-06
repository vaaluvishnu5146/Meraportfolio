import { createSlice } from "@reduxjs/toolkit";

const CoursesSlice = createSlice({
  name: "Courses",
  initialState: {
    data: [],
  },
  reducers: {
    // Action creators goes inside
    saveCourses: (state, action) => {
      if (action.payload) {
        state.data = action.payload;
      }
    },
  },
});

export const { saveCourses } = CoursesSlice.actions;
export default CoursesSlice.reducer;
