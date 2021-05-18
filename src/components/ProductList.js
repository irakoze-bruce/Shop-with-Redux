/** @format */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import Axios from "axios";
import { setProducts } from "../container/redux/actions/ProductAction";

function ProductList(props) {
  const products = useSelector((state) => state);
  let dispatch = useDispatch();

  let fetchProduct = async () => {
    const response = await Axios.get("https://fakestoreapi.com/products").catch(
      (err) => {
        console.log("Error");
      },
    );
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  );
}

export default ProductList;
