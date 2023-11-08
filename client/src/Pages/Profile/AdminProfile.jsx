import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { deleteMovie, getAdminById } from "../../api/api";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminProfile = () => {
  const [admin, setAdmin] = useState();

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
      <Box width={"100%"} display={"flex"}>
        <ToastContainer />
        <Fragment>
          {" "}
          {admin && (
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
                mt={1}
                padding={1}
                width={"70%"}
                textAlign={"center"}
                border={"1px solid #ccc"}
                borderRadius={6}
              >
                {admin && `Email: ${admin.email}`}
              </Typography>
            </Box>
          )}
          {admin && admin.addedMovies.length > 0 && (
            <Box width={"70%"} display={"flex"} flexDirection={"column"}>
              <Typography
                variant="h3"
                fontWeight={"bold"}
                textAlign={"center"}
                padding={2}
              >
                Added Movies
              </Typography>
              <Box
                margin={"auto"}
                display={"flex"}
                flexDirection={"column"}
                width={"80%"}
              >
                <List>
                  {admin.addedMovies.map((movie, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        bgcolor: "#00d386",
                        color: "#fff",
                        textAlign: "center",
                        margin: 1,
                        borderRadius: 2,
                        boxShadow: "rgba(0, 0, 0, 0.40) 1.95px 1.95px 2.6px",
                      }}
                    >
                      <ListItemText
                        sx={{ margin: 1, width: "auto", textAlign: "left" }}
                      >
                        Movie: {movie.title}
                      </ListItemText>
                      <ListItemText
                        sx={{ margin: 1, width: "auto", textAlign: "left" }}
                      >
                        Release Date:{" "}
                        {new Date(movie.releaseDate).toDateString()}
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
            </Box>
          )}
        </Fragment>
      </Box>
    </>
  );
};

export default AdminProfile;
