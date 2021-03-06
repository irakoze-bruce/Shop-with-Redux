/** @format */

import React, { useEffect } from "react";
import Axios from "axios";
import style from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../container/redux/actions/ProductAction";
import { useSelector } from "react-redux";

function ProductDetail(props) {
  const product = useSelector((state) => state.product);
  const { title, price, category, description, image } = product;
  let { productId } = useParams();
  let dispatch = useDispatch();
  let fetchProDetail = async () => {
    let response = await Axios.get(
      `https://fakestoreapi.com/products/${productId}`,
    ).catch((err) => {
      console.log("error", err);
    });

    dispatch(selectedProduct(response.data));
  };

  // useEffect(() => {
  //   if (productsId && productsId !== "") fetchProDetail(productsId);
  //   return () => {
  //     dispatch(removeSelectedProduct());
  //   };
  // }, [productsId]);

  useEffect(() => {
    if (productId && productId !== "") fetchProDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className={style.ProductDetail}>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className='ui placeholder segment'>
          <div className='ui two column stackable center aligned grid'>
            <div className='ui vertical divider'></div>
            <div className='middle aligned row'>
              <div className='column lp'>
                <img className={style.image} src={image} alt={title} />
              </div>
              <div className='column rp'>
                <h1>{title}</h1>
                <h2>
                  <a href='/' className='ui teal tag label'>
                    ${price}
                  </a>
                </h2>
                <h3 className='ui brown block header'>{category}</h3>
                <p>{description}</p>
                <div className='ui vertical animated button' tabIndex='0'>
                  <div className='hidden content'>
                    <i className='shop icon'></i>
                  </div>
                  <div className='visible content'>Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
