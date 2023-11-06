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
      {bookings && bookings.length > 0 && (
        <Fragment>
          <Box
            width={"30%"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={3}
          >
            <AccountCircleIcon
              sx={{ fontSize: "10rem", textAlign: "center", ml: 8 }}
            />
            <Typography
              padding={1}
              width={"70%"}
              textAlign={"center"}
              border={"1px solid #ccc"}
              borderRadius={6}
            >
              Name: {bookings[0].user.name}
            </Typography>
            <Typography
              mt={1}
              padding={1}
              width={"70%"}
              textAlign={"center"}
              border={"1px solid #ccc"}
              borderRadius={6}
            >
              email: {bookings[0].user.email}
            </Typography>
          </Box>

          <Box width={"70%"} display={"flex"} flexDirection={"column"}>
            <Typography
              variant="h3"
              fontFamily={"verdana"}
              textAlign={"center"}
              padding={2}
              fontWeight={"bold"}
            >
              Bookings
            </Typography>
            <Box
              margin={"auto"}
              display={"flex"}
              flexDirection={"center"}
              width={"80%"}
            >
              <List>
                {bookings.map((booking, index) => (
                  <ListItem
                    sx={{
                      backgroundColor: "#003d86",
                      color: "#fff",
                      textAlign: "center",
                      margin: 1,
                      borderRadius:2,
                      boxShadow: "rgba(0, 0, 0, 0.54) 1.95px 1.95px 2.6px"
                    }}
                  >
                    <ListItemText
                      sx={{ margin: 1, width: "auto", textAlign: "left" }}
                    >
                      Movie: {booking.movie.title}
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
