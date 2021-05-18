/** @format */

import { createStore } from "redux";
import IndexReducer from "./redux/Reducers/IndexReducer";

const Store = createStore(
  IndexReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default Store;
