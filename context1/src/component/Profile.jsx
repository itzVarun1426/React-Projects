import React from 'react'
import UserContext from '../context/UserContext';
import { useContext } from 'react'; 

const Profile = () => {
  const { user } = useContext(UserContext);         

 if (!user) {
    return <div>Please log in to see your profile.</div>;
  }

  return (
    <div>
      Welcome {user.username}!
      <h2>Your Profile</h2>
    </div>
  )
}

export default Profile
