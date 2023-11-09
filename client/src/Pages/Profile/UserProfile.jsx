import React, { Fragment, useEffect, useState } from "react";
import {
  deleteBooking,
  deleteUser,
  getUserBookings,
  getUserByID,
} from "../../api/api";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState();

  const [user, setUser] = useState();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  //*********** GET ALL BOOKING OF USER ***********/
  useEffect(() => {
    getUserBookings()
      .then((res) => setBookings(res.bookings))
      .catch((err) => console.log(err));

    getUserByID()
      .then((res) => setUser(res.getUser))
      .catch((err) => console.log(err));
  }, []);

  //****************** DELETE USER BOOKING  **********************/
  const handleDelete = (id) => {
    deleteBooking(id)
      .then((res) => {
        toast.success("Booking deleted successfully");
        // After a successful delete, filter out the deleted booking from the state
        setBookings((prevBookings) =>
          prevBookings.filter((booking) => booking._id !== id)
        );
      })
      .catch((err) => toast.error("Failed to delete booking"));
  };

  //****************** DELETE USER **********************/
  const handleDeleteUser = (id) => {
    deleteUser(id)
      .then((res) => {
        toast.success("User Deleted Successfully!");
        localStorage.removeItem("userId");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => toast.err("Failed to Delete User!"));
  };

  return (
    <Box width={"100%"} display={"flex"}>
      <ToastContainer />

      <Fragment>
        {user && (
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
              Name: {user.name}
            </Typography>
            <Typography
              mt={1}
              padding={1}
              width={"70%"}
              textAlign={"center"}
              border={"1px solid #ccc"}
              borderRadius={6}
            >
              Email: {user.email}
            </Typography>
            <Typography mt={1} width={"70%"} textAlign={"center"} color={"red"}>
              Delete User
              <IconButton
                color="error"
                onClick={() => handleDeleteUser(user._id)}
              >
                <DeleteIcon />
              </IconButton>
            </Typography>
          </Box>
        )}

        {bookings && bookings.length > 0 && (
          <Box width={"70%"} display={"flex"} flexDirection={"column"}>
            <Typography
              variant="h3"
              fontFamily={"verdana"}
              textAlign={"center"}
              padding={3}
              fontWeight={"bold"}
            >
              Bookings
            </Typography>
            <Box
              margin={"auto"}
              display={"flex"}
              flexDirection={"center"}
              width={"70%"}
            >
              <List>
                {bookings.map((booking, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      backgroundColor: "#003d86",
                      color: "#fff",
                      textAlign: "center",
                      margin: 1,
                      borderRadius: 2,
                      boxShadow: "rgba(0, 0, 0, 0.54) 1.95px 1.95px 2.6px",
                    }}
                  >
                    <ListItemText
                      sx={{ margin: 1, width: "auto", textAlign: "left" }}
                    >
                      Movie: {booking.movie.title}
                    </ListItemText>
                    <ListItemText
                      sx={{ margin: 1, width: "auto", textAlign: "left" }}
                    >
                      Seat Number: {booking.seatNumber}
                    </ListItemText>
                    <ListItemText
                      sx={{ margin: 1, width: "auto", textAlign: "left" }}
                    >
                      Booking Date: {new Date(booking.createdAt).toDateString()}
                    </ListItemText>
                    <IconButton
                      onClick={() => handleDelete(booking._id)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        )}
      </Fragment>
    </Box>
  );
};

export default UserProfile;
