import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "features/counter/counterSlice";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "./rootReducer";
import rootEpic from "./middleware/epic";

const epicMiddleware = createEpicMiddleware();

const middleware = [...getDefaultMiddleware(), epicMiddleware];

export default configureStore({
  middleware,
  reducer: rootReducer,
});
