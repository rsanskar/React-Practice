import { RestaurantList } from "../configurations/constants";

const useRestaurant = (id) => {
  const restaurant = RestaurantList.find((x) => x.id == id);
  return restaurant;
};

export default useRestaurant;
