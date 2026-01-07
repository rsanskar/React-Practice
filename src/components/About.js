import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import { Link, Outlet } from "react-router-dom";
import React from "react";
import userContext from "../utils/userContext";

// const About2 = () => {
//     return(
//         <div>
//             <h1>About Us Page</h1>
//             <p>
//                 This is a about us page - Finding the path
//             </p>
//             <h5>
//                  <Outlet/>
//                 <Link to="Profile"> click here to view profile </Link>
//                 {/* <ProfileFunctionalComponent name="Ravula Sanskar"/>
//                 <Profile name="Ravula Sanskar"/> */}
//             </h5>
//         </div>
//     )
// }
class About extends React.Component {
  constructor(props) {
    super(props);
    {
    }
    console.log("Parent - Component Constructor");
  }
  componentDidMount() {
    console.log("Parent - Component Did Mount");
  }
  render() {
    console.log("Parent - Component Render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>This is a about us page - Finding the path</p>
        <userContext.Consumer>
          {({ user }) => (
            <p className="text-3xl font-bold">{user.name + " " + user.email}</p>
          )}
        </userContext.Consumer>
        <h5>
          <Outlet />
          {/* <Link to="Profile"> click here to view profile </Link>  */}
          {/* {<ProfileFunctionalComponent name="Ravula Sanskar"/>}                 */}
          <Profile name="First Child" />
          {/* {<Profile name="Second Child"/>}  */}
        </h5>
      </div>
    );
  }
}

export default About;

// a.	Parent Component Constructor
// b.	Parent Component Render
// c.	Child 1 Component Constructor
// d.	Child 1 Component Render
// e.	Child 2 Component Constructor
// f.	Child 2 Component Render
// g.	Child 1 Component Did Mount
// h.	Child 2 Component Did Mount
// i.	Parent Component Did Mount
