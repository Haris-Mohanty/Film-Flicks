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
import React, { Fragment, useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { deleteMovie, getAdminById } from "../../api/api";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminProfile = () => {
  const [admin, setAdmin] = useState();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    getAdminById()
      .then((res) => setAdmin(res.getAdmin))
      .catch((err) => console.log(err));
  }, []);

  //*************** DELETE MOVIE ************/
  const handleDelete = (id) => {
    deleteMovie(id)
      .then((res) => {
        toast.success("Movie Deleted Successfully!");
        //Update the admin state by removing the deleted movie
        setAdmin((prevAdmin) => {
          const updatedMovies = prevAdmin.addedMovies.filter(
            (movie) => movie._id !== id
          );
          return { ...prevAdmin, addedMovies: updatedMovies };
        });
      })
      .catch((err) => toast.error("Failed to delete booking"));
  };

  return (
    <>
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={isSmallScreen ? "column" : "row"}
      >
        <ToastContainer />
        <Fragment>
          {" "}
          {admin && (
            <Box
              display={"flex"}
              flexDirection={isSmallScreen ? "row" : "column"}
              alignItems={"center"}
              padding={2}
              width={isSmallScreen ? "100%" : "30%"}
              mt={isSmallScreen ? 1:6}
            >
              <AccountCircleIcon sx={{ fontSize: "10rem" }} />
              <Typography
                mt={1}
                padding={1}
                width={isSmallScreen ? "100%" : "70%"}
                textAlign={"center"}
                border={"1px solid #ccc"}
                borderRadius={6}
              >
                {admin && `Email: ${admin.email}`}
              </Typography>
            </Box>
          )}
          {admin && admin.addedMovies.length > 0 && (
            <Box width={isSmallScreen ? "100%" : "70%"}>
              <Typography
                variant="h3"
                fontWeight={"bold"}
                textAlign={"center"}
                padding={2}
              >
                Added Movies
              </Typography>

              <List>
                {admin.addedMovies.map((movie, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      bgcolor: "#00d386",
                      color: "#fff",
                      textAlign: "center",
                      margin: 1,
                      ml: isSmallScreen ? "17px" : "110px",
                      borderRadius: 2,
                      boxShadow: "rgba(0, 0, 0, 0.40) 1.95px 1.95px 2.6px",
                      width: isSmallScreen ? "100%" : "75%",
                    }}
                  >
                    <ListItemText>Movie: {movie.title}</ListItemText>
                    <ListItemText>
                      Release Date: {new Date(movie.releaseDate).toDateString()}
                    </ListItemText>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(movie._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </Fragment>
      </Box>
    </>
  );
};

export default AdminProfile;
