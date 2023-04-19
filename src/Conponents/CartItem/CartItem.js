import "./CartItem.css";

import Products from "../../Products/Products";

import { useShoppingCart } from "../../Conponents/index";


const CartItem = ({ id, quantity }) => {

  const { removeFromCart, inscreaseCartQuantity, decreaseCartQuantity }
  = useShoppingCart();

  const item = Products.find((i) => i.id === id);

  if (item == null) return null;


  return (
    <>
        <tbody>
          <tr className="">
            <td className="product-remove">
              <button onClick={removeFromCart()}> &times; </button>
            </td>

            <td className="">
              <img
                src={item.image}
                className=""
                alt="CartItem"
                width="200"
                height="200"
              />
            </td>

            <td className="product-name">
              <p>{item.title}</p>
            </td>

            <td className="">
              <span className="">${item.price}</span>
            </td>

            <td className="product-quantity">
              <button className="minus" onClick={decreaseCartQuantity()}>
                -
              </button>
              <input
                type="number"
                className=""
                id="Quantity"
                value={quantity}
                size="2"
                min="0"
              />
              <button className="add" onClick={inscreaseCartQuantity()}>
                +
              </button>
            </td>

            <td className="">
              <span className="">${item.price * quantity}</span>
            </td>
          </tr>
        </tbody>
    </>
  );
};

export default CartItem;
