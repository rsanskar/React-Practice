import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Ravula Sanskar",
    email: "rvsanskar@gmail.com",
  },
});

userContext.displayName = "userContext";

export default userContext;
