import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/Contact";
import RestaruntMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
//deafult import
import Header from "./components/Header";

//named import
import { Title } from "./components/Header";
import About from "./components/About";
import ContactClassBasedComponent from "./components/ContactClassBasedComponent";
import ShimmerUI from "./components/Shimmer";
import Instamart1 from "./components/Instamart1";
import userContext from "./utils/userContext";
const Instamart = lazy(() => import("./components/Instamart"));
import { Provider } from "react-redux";
import store from "./utils/store";
/*
    Header
        -Logo
        -Nav Items
        -Cart
    Body
        -Search Bar
        -Restratur list
            - Restarunt Card
                -Images
                -Name
                -Rating
                -cusins

    Footer
        -Links
        -Copy Right
*/

// const restoImage = <img src="" alt="resto card"></img>

// const RestoDeatils = ()=>{
//     return(
//         <>
//             <h2 id="resto-name">Paradise</h2>
//             <h3>Biryani, Sweets</h3>
//             <h4>4.3 Stars</h4>
//         </>
//     );
// }

// const RestoCard = (props) =>{
//     console.log(props);
//     return(
//         <div className="resto-card">
//             <img src={props.resto?.image}></img>
//             <h2 id="resto-name">{props.resto?.name}</h2>
//             <h3>{props.resto?.cusines.join(", ")}</h3>
//             <h4>{props.resto?.rating} stars</h4>
//         </div>
//     );
// }

// const RestoCard = ({resto}) =>{
//     return(
//         <div className="resto-card">
//             <img src={resto?.image}></img>
//             <h2 id="resto-name">{resto?.name}</h2>
//             <h3>{resto?.cusines.join(", ")}</h3>
//             <h4>{resto?.rating} stars</h4>
//         </div>
//     );
// }

const AppLayout = () => {
  const [user, SetUser] = useState({
    name: "Modified Name",
    email: "Modified Email",
  });
  return (
    <Provider store={store}>
      <userContext.Provider value={{ user: user, SetUser: SetUser }}>
        <React.Fragment>
          <Header />
          <Outlet />
          <Footer />
        </React.Fragment>
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "Profile",
            element: <Profile />,
          },
          {
            path: "Profileclass",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <ContactUs name="sanskar" />,
        children: [
          {
            path: "contactclass",
            element: <ContactClassBasedComponent name="sanskar" />,
          },
        ],
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaruntMenu />,
      },
      {
        path: "/Instamart",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/Instamart1",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Instamart1 />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
