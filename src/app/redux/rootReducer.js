import { combineReducers } from "redux";
import counterReducer from "features/counter/counterSlice";
import postsReducer from "components/redux-with-observables/postsSlice";

export default combineReducers({
  counter: counterReducer,
  posts: postsReducer,
});
