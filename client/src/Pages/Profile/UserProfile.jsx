import React, { useEffect, useState } from "react";
import { getUserBookings } from "../../api/api";

const UserProfile = () => {
  const [bookings, setBookings] = useState();

  //*********** GET ALL BOOKING OF USER ***********/
  useEffect(() => {
    getUserBookings()
      .then((res) => setBookings(res.bookings))
      .catch((err) => console.log(err));
  }, []);
  
  return <div>
    
  </div>;
};

export default UserProfile;
