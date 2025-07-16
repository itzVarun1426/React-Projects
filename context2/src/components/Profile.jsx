import React from "react";
import { useContext } from "react";
import UserContext from "../context/userContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>please login this is not logged in page</div>;
  }
  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
    </div>
  );
};

export default Profile;
