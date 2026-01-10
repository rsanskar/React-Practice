import { use } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeitem } from "../utils/cartSlice";

const ItemCard = ({ id, name, image, description, rating }) => {
  const dispacth = useDispatch();
  const HandleDeleteItem = () => {
    dispacth(removeitem());
  };
  return (
    <div className="item-card bg-gray-300 border border-black h-90 w-50 m-2.5 p-2.5 shadow-2xs">
      <img src={image}></img>
      <h2 id="resto-name" className="text-2xl font-bold">
        {name}
      </h2>
      <h3>{description}</h3>
      <h4>{rating} stars</h4>
      <button
        className="bg-red-500 rounded-xl p-1 font-bold text-white"
        onClick={() => HandleDeleteItem()}
      >
        delete Item
      </button>
    </div>
  );
};

export default ItemCard;
