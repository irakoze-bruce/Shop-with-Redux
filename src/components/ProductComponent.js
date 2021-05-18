/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent(props) {
  const products = useSelector((state) => state.allProducts.products);
  let renderList = products.map((product) => {
    const { id, title, image, category, price } = product;
    return (
      <div className='four column wide' key={id}>
        <Link to={`/product/${id}`}>
          {" "}
          <div className='ui link cards'>
            <div className='card'>
              <div className='image'>
                <img src={image} alt={title} />
              </div>
              <div className='content'>
                <div className='header'>{title}</div>
                <div className='meta price'>$ {price}</div>
                <div className='meta'>{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
}

export default ProductComponent;
