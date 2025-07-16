import React from "react";
import { UserProvider } from "./userContext";
const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return <UserProvider value={{ user, setUser }}>{children}</UserProvider>;
};

export default UserContextProvider;
