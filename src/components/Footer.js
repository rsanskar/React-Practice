import userContext from "../utils/userContext";
import { useContext } from "react";
const Footer = () => {
  const Context = useContext(userContext);
  return (
    <>
      <h1>This is Footer</h1>
      <h4>{Context.user.name + "" + Context.user.email}</h4>
    </>
  );
};

export default Footer;
