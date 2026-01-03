import { Link, Outlet } from "react-router-dom";

const ContactUs = (props) =>{
    return (
    <>
    <h1> Contact Us</h1>
    <h2>Name: {props.name}</h2>
    <h2>809646635</h2>
    <Outlet/>
    <Link to="contactclass">Click here to view conetent from class based componets</Link>
    </>
    )
}

export default ContactUs;