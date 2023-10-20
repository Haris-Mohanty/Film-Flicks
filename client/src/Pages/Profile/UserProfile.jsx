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
  console.log(bookings)

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
            <AccountCircleIcon
              sx={{ fontSize: "10rem", textAlign: "center", ml: 10 }}
            />
            <Typography
              padding={1}
              width={"70%"}
              textAlign={"center"}
              border={"1px solid #ccc"}
              borderRadius={6}
            >
              {bookings[2] && `Name: ${bookings[2].name}`}
            </Typography>
            <Typography
              mt={1}
              padding={1}
              width={"70%"}
              textAlign={"center"}
              border={"1px solid #ccc"}
              borderRadius={6}
            >
              {bookings[2] && `Email: ${bookings[2].email}`}
            </Typography>
          </Box>
          <Box width={"70%"} display={"flex"} flexDirection={"column"}>
            <Typography
              variant="h3"
              fontWeight={"bold"}
              textAlign={"center"}
              padding={2}
            >
              Bookings
            </Typography>
            <Box
              margin={"auto"}
              display={"flex"}
              flexDirection={"column"}
              width={"80%"}
            >
              <List>
                {bookings.map((booking, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      textAlign: "center",
                      margin: 1,
                      border:"2px solid gray"
                    }}
                  >
                    <ListItemText
                      sx={{ margin: 1, width: "auto", textAlign: "left" }}
                    >
                      {booking.title && `Movie: ${booking.title}`}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Fragment>
      )}
    </Box>
  );
};

export default UserProfile;
