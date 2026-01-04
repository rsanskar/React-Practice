import { useEffect, useState } from "react";
import { RestaurantList } from "../configurations/constants";
import RestoCard from "./RestroCard";
import ShimmerUI from "./Shimmer";
import { filetrData } from "../utils/helper";
import useOnline from "../utils/useOnline";

// const Body = () => {
//   //const searchInput = "KFC";
//   let [restaurants, Setrestaurants] = useState(RestaurantList);
//   const [searchInput, SetsearchInput] = useState(""); // It return an array [variablename, function to update the variable]
//   const [searchClicked,SetsearchClicked] = useState("false");
//   useEffect(()=>{
//     console.log("This will be called when the dependency changes");
//   },[restaurants])
//   return (
//     <>
//       <input
//         type="text"
//         className="search-input"
//         placeholder="Search here"
//         value={searchInput}
//         onChange={(e) => {
//           SetsearchInput(e.target.value);
//         }}
//       />
//       <button className="btn-Search" onClick={(e)=>{
//            const filteredRestaurants = filetrData(searchInput);
//           Setrestaurants(filteredRestaurants);
//         }}>Search</button>
//        <button className="btn-cancel" onClick={()=>{
//         SetsearchInput("");
//         Setrestaurants(RestaurantList);
//        }}>Cancel</button>
//       <div className="resto-list">
//         {restaurants.map((element, i) => (
//           <RestoCard key={element.name + element.image} {...element} />
//         ))}
//       </div>
//     </>
//   );
// };

const Body = () => {
  //const searchInput = "KFC";
  let [restaurants, Setrestaurants] = useState(RestaurantList);
  // const searchButtonCss = {
  //   background: "ash",
  //   opocity: 0.1,
  // };
  const [searchInput, SetsearchInput] = useState(""); // It return an array [variablename, function to update the variable]
  const [searchClicked, SetsearchClicked] = useState("false");
  useEffect(() => {
    //API Call
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  };
  let isOnline = useOnline();
  if (!isOnline) {
    return (
      <>
        <h1>Looks Like You are offline</h1>
      </>
    );
  }

  if (!RestaurantList) return null;
  return restaurants.length == 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="searchContainer my-5 bg-amber-50 p-3">
        <input
          type="text"
          className="search-input border-2 rounded-sm focus:bg-gray-200"
          //style={searchButtonCss}
          placeholder="Search here"
          value={searchInput}
          onChange={(e) => {
            SetsearchInput(e.target.value);
          }}
        />
        <button
          className="btn-Search px-2 mx-3 bg-green-200 hover:bg-green-500 border-2 rounded-sm text-white"
          onClick={(e) => {
            const filteredRestaurants = filetrData(searchInput);
            Setrestaurants(filteredRestaurants);
          }}
        >
          Search
        </button>
        <button
          className="btn-cancel px-2 bg-amber-600 hover:bg-amber-800 border-2 rounded-sm text-white"
          onClick={() => {
            SetsearchInput("");
            Setrestaurants(RestaurantList);
          }}
        >
          Cancel
        </button>
      </div>
      <div className="resto-list flex flex-wrap justify-between">
        {restaurants.map((element, i) => (
          <RestoCard key={element.name + element.image} {...element} />
        ))}
      </div>
    </>
  );
};
export default Body;
