import { useEffect, useState } from "react";
import { LOGO_IMG_URL } from "../configurations/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Instamart from "./Instamart";

export const Title = () => (
  <a href="/">
    <img className="logo" src={LOGO_IMG_URL} alt="Restaurant Interior" />
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
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/About">
            <li>About</li>
          </Link>
          <Link to="/Contact">
            {" "}
            <li>Contact</li>
          </Link>
          <li>Cart</li>
          <Link to="/Instamart">
            <li>Instamart</li>
          </Link>
        </ul>
      </div>
      <h1>{isOnline ? "🍏" : "🍎"}</h1>
      {isLoggedIn ? (
        <button onClick={() => SetIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => SetIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
