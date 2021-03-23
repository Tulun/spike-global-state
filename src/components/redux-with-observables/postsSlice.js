import { createSlice } from "@reduxjs/toolkit";

// This create the actions and reducers for you.
// See redux toolkit for documentation.
export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    fetching: false,
    error: "",
  },
  reducers: {
    // Slight gotcha here -- as this is technically the "epic" action, action has to be added here, although it is not used in this case.
    fetchPosts: (state, action) => {
      return { ...state, fetching: true };
    },
    // This is the success function after the epic runs with the data.
    fetchPostsSuccess: (state, action) => {
      return { ...state, data: action.payload, fetching: false };
    },
    // This dispatches on failure.
    fetchPostsError: (state, action) => {
      return { ...state, error: action.payload, fetching: false };
    },
  },
});

export const actions = postsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectPosts = (state) => state.posts.data;

export default postsSlice.reducer;
