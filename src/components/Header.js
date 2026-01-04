import { useEffect, useState } from "react";
import { LOGO_IMG_URL } from "../configurations/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Instamart from "./Instamart";

export const Title = () => (
  <a href="/">
    <img className="logo h-27" src={LOGO_IMG_URL} alt="Restaurant Interior" />
  </a>
);

const Header = () => {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  //console.log("render")
  useEffect(() => {
    //console.log("This is use effect")
  }, [isLoggedIn]);

  return (
    <div className="header flex justify-between bg-amber-50 shadow sm:bg-blue-50">
      <Title />
      <div className="nav-items py-10">
        <ul className="flex">
          <Link to="/">
            <li className="px-3">Home</li>
          </Link>
          <Link to="/About">
            <li className="px-3">About</li>
          </Link>
          <Link to="/Contact">
            {" "}
            <li className="px-3">Contact</li>
          </Link>
          <li className="px-3">Cart</li>
          <Link to="/Instamart">
            <li className="px-3">Instamart</li>
          </Link>
        </ul>
      </div>
      <h1 className="py-10">{isOnline ? "🍏" : "🍎"}</h1>
      {isLoggedIn ? (
        <button onClick={() => SetIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => SetIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
