import React, { useEffect, useState } from "react";
import { getUserBookings } from "../../api/api";
import { Box } from "@mui/material";

const UserProfile = () => {
  const [bookings, setBookings] = useState();

  //*********** GET ALL BOOKING OF USER ***********/
  useEffect(() => {
    getUserBookings()
      .then((res) => setBookings(res.bookings))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box width={"100%"} display={"flex"}>
      <Box width={"30%"}></Box>
      <Box width={"70%"}></Box>
    </Box>
  );
};

export default UserProfile;
