import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "./rootReducer";
import rootEpic from "./middleware/epic";

const epicMiddleware = createEpicMiddleware();

const middleware = [...getDefaultMiddleware(), epicMiddleware];

const store = configureStore({
  middleware,
  reducer: rootReducer,
});

epicMiddleware.run(rootEpic);

export default store;
