import "./Product.css";

import { Icon } from "@iconify/react";

import { useShoppingCart } from "../Context/ShoppingCartProvider";

const Product = (product) => {
  const { id, title, price, category, image } = product.data;
  const { getItemsQuantity, inscreaseCartQuantity } = useShoppingCart();
  const quantity = getItemsQuantity(id);
//   console.log(quantity);
  return (
    <>
      <div className="col product">
        <img src={image} alt="product" className="" />
        <div className="description">
          <p className="">
            <b className="fs-5">{title}</b>
          </p>
          <span className="text-uppercase">{category}</span>
          <p>{quantity}</p>
          {/* <p>{description}</p> */}
          <p>${price}</p>
        </div>
        <button
          className="addToCartBtn btn btn-success"
          type="button"
          onClick={() => inscreaseCartQuantity(id)}
        >
          Add To Cart <Icon icon="material-symbols:shopping-cart" />
        </button>
      </div>
    </>
  );
};

export default Product;
