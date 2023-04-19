import "./Shop.css";
// import { useState } from "react";

import Products from "../../Products/Products";
import Product from "../../Conponents/Product/Product";

function Shop() {
  return (
    <div className="container text-center mt-5">
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        {Products.map((product) => (
          <Product data={product} key={product.id}/>
        ))}
      </div>
    </div>
  );
}

export default Shop;
