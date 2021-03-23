import { combineReducers } from "redux";
import counterReducer from "features/counter/counterSlice";

// Stub for now.
const pingReducer = (state = { isPinging: false }, action) => {
  switch (action.type) {
    case "PING":
      return { isPinging: true };

    case "PONG":
      return { isPinging: false };

    default:
      return state;
  }
};

export default combineReducers({
  counter: counterReducer,
  ping: pingReducer,
});
