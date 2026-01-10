import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispacth = useDispatch();
  const HandleClearCart = () => {
    dispacth(clearCart());
  };
  return (
    <>
      <p>This is Cart</p>
      <button
        className="bg-red-500 rounded-xl p-2 font-bold text-white"
        onClick={() => HandleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex">
        {items.map((item, idx) => (
          <ItemCard key={Math.random()} {...item} />
        ))}
      </div>
    </>
  );
};

export default Cart;
