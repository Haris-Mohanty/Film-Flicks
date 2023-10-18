import React, { Fragment, useEffect, useState } from "react";
import { getUserBookings } from "../../api/api";
import { Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
      {bookings && bookings.length > 0 && (
        <Fragment>
          {" "}
          <Box
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"30%"}
            padding={3}
          >
            <AccountCircleIcon sx={{ fontSize: "10rem", textAlign:"center", ml:10 }} />
            <Typography
              padding={1}
              width={"70%"}
              textAlign={"center"}
              border={"1px solid #ccc"}
              borderRadius={6}
            >
              Name: {bookings[2].name}
            </Typography>
            <Typography
              padding={1}
              width={"70%"}
              textAlign={"center"}
              border={"1px solid #ccc"}
              borderRadius={6}
            >
              Email: {bookings[2].email}
            </Typography>
          </Box>
          <Box width={"70%"}></Box>
        </Fragment>
      )}
    </Box>
  );
};

export default UserProfile;
