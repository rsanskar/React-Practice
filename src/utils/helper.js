export const filetrData = (searchInput) => {
  return RestaurantList.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(searchInput.toLowerCase());
  });
};
