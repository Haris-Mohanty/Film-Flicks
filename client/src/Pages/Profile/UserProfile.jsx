import React, { useEffect, useState } from "react";
import { getUserBookings } from "../../api/api";
import { Box, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
      <Box flexDirection={"column"} justifyContent={"center"} alignItems={"center"} width={"30%"}>
        <AccountCircleIcon sx={{fontSize:"10rem"}}/>
        <Typography padding={}></Typography>
      </Box>
      <Box width={"70%"}></Box>
    </Box>
  );
};

export default UserProfile;
