/** @format */

import { combineReducers } from "redux";
import { ProductReduce, selectedProductReducer } from "./ProductReducer";

const IndexReducer = combineReducers({
  allProducts: ProductReduce,
  product: selectedProductReducer,
});

export default IndexReducer;
