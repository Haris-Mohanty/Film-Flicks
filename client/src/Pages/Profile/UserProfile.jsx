import React, { Fragment, useEffect, useState } from "react";
import { getUserBookings } from "../../api/api";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const UserProfile = () => {
  const [bookings, setBookings] = useState();

  //*********** GET ALL BOOKING OF USER ***********/
  useEffect(() => {
    getUserBookings()
      .then((res) => setBookings(res.bookings))
      .catch((err) => console.log(err));
  }, []);
  console.log(bookings);

  return (
    <Box width={"100%"} display={"flex"}>
      <Box
        width={"30%"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        
      </Box>

      <Box width={"70%"}></Box>
    </Box>
  );
};

export default UserProfile;
