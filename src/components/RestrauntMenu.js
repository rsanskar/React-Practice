import { useParams } from "react-router-dom";
import { RestaurantList } from "../configurations/constants";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { additem } from "../utils/cartSlice";

const RestaruntMenu = () => {
  //how to read the dynamic url params
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();

  const HandleAddItem = () => {
    dispatch(additem("graps"));
  };

  const addFoodItem = (item) => {
    dispatch(additem(item));
  };

  //const restaurant = RestaurantList.find(x=>x.id == id);
  const restaurant = useRestaurant(id); // This is a custom hook
  if (!restaurant) return <h2>Restaurant not found</h2>;
  console.log(restaurant);
  return (
    <div className="menu-details flex">
      <div>
        <h1>{restaurant.name}</h1>
        <img
          src={restaurant.image}
          alt={restaurant.name}
          id="restro-menu-details"
          className="h-72"
        />
        <button
          className="border-2 bg-amber-100 rounded-b-sm"
          onClick={() => HandleAddItem()}
        >
          Add Item
        </button>
        <p>Cuisines: {restaurant.cusines.join(", ")}</p>
      </div>
      <div className="m-5">
        <h2 className="font-bold text-2xl underline">Items</h2>
        {restaurant.dishes.map((dish, idx) => (
          <div key={idx * Math.random()} className="flex">
            <p key={idx * Math.random()}>{dish.name}</p>
            <button
              className="border-2 bg-blue-200 m-1"
              onClick={() => addFoodItem(dish)}
            >
              additem
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaruntMenu;
