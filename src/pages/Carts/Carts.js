import "./Cart.css";
import { CartItem } from "../../Conponents/index";
import { useShoppingCart } from "../../Conponents/Context/ShoppingCartProvider";

const Carts = () => {
  const { cartItems } = useShoppingCart();

  return (
    <>
      <table className="table container mt-5">
        <thead>
          <tr>
            <th scope="col">Remove item</th>
            <th scope="col">Thumbnail image</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Subtotal</th>
          </tr>
        </thead>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        {/* <CartItem/> */}
      </table>
    </>
  );
};

export default Carts;
