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
      <input
        type="text"
        className="search-input"
        placeholder="Search here"
        value={searchInput}
        onChange={(e) => {
          SetsearchInput(e.target.value);
        }}
      />
      <button
        className="btn-Search"
        onClick={(e) => {
          const filteredRestaurants = filetrData(searchInput);
          Setrestaurants(filteredRestaurants);
        }}
      >
        Search
      </button>
      <button
        className="btn-cancel"
        onClick={() => {
          SetsearchInput("");
          Setrestaurants(RestaurantList);
        }}
      >
        Cancel
      </button>
      <div className="resto-list">
        {restaurants.map((element, i) => (
          <RestoCard key={element.name + element.image} {...element} />
        ))}
      </div>
    </>
  );
};
export default Body;
