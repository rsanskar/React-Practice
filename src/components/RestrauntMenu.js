import { useParams } from "react-router-dom";
import { RestaurantList } from "../configurations/constants";
import useRestaurant from "../utils/useRestaurant";

const RestaruntMenu = () => {
  //how to read the dynamic url params
  const params = useParams();
  const { id } = params;

  //const restaurant = RestaurantList.find(x=>x.id == id);
  const restaurant = useRestaurant(id); // This is a custom hook
  if (!restaurant) return <h2>Restaurant not found</h2>;
  return (
    <div className="menu-details">
      <h1>{restaurant.name}</h1>
      <img
        src={restaurant.image}
        alt={restaurant.name}
        id="restro-menu-details"
      />
      <p>Cuisines: {restaurant.cusines.join(", ")}</p>
      <p>Rating: {restaurant.rating}</p>
    </div>
  );
};

export default RestaruntMenu;
