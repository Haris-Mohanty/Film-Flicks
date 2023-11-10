import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, newBooking } from "../../api/api";
import {
  Box,
  Button,
  FormLabel,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Booking = () => {
  const [movie, setMovie] = useState();

  const [inputs, setInputs] = useState({ seatNumber: "", date: "" });

  const id = useParams().id;

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    getMovieDetails(id)
      .then((res) => setMovie(res.movie))
      .catch((err) => toast.error(err.response.data.message));
  }, [id]); //When the id is change, call the useEffect once again

  //GETTING BOOKING DETAILS
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //BOOKING SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    newBooking({ ...inputs, movie: movie._id })
      .then((res) => toast.success("The movie booked successfully!"))
      .catch((err) => toast.error(err.response.data.message));
  };

  return (
    <>
      {movie && (
        <Fragment>
          <ToastContainer />
          <Typography
            padding={2}
            fontFamily={"fantasy"}
            variant={isSmallScreen ? "h5" : "h4"}
            textAlign={"center"}
            letterSpacing={1.7}
            color={"#0074e4"}
          >
            Book tickets of the Movie: {movie.title}
          </Typography>

          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={isSmallScreen ? "column" : "row"}
          >
            <Box width={isSmallScreen ? "100%" : "55%"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                paddingTop={2}
                width={isSmallScreen ? "100%" : "80%"}
                marginRight={"auto"}
                ml={4}
                color={"#009688"}
              >
                <Box ml={7}>
                  <img
                    width={"60%"}
                    height={isSmallScreen ? "300px" : "380px"}
                    src={movie.posterUrl}
                    alt={movie.title}
                  />
                </Box>
                <Box width={isSmallScreen ? "90%" : "80%"} marginTop={1}>
                  <Typography paddingTop={1}>{movie.description}</Typography>
                  <Typography fontWeight={"bold"} mt={1} color={"#00bf63"}>
                    Starrer: {movie.actors.map((actor) => actor + ", ")}
                  </Typography>
                  <Typography fontWeight={"bolder"} mt={1} color={"#00bf63"}>
                    Release Date:{" "}
                    {new Date(movie.releaseDate).toLocaleDateString()}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              width={isSmallScreen ? "100%" : "45%"}
              mt={isSmallScreen ? 1 : 5}
            >
              <Box width={isSmallScreen ? "90%" : "75%"}>
                <form onSubmit={handleSubmit}>
                  <Box
                    padding={5}
                    margin={"auto"}
                    display={"flex"}
                    flexDirection={"column"}
                  >
                    <FormLabel>Seat Number:</FormLabel>
                    <TextField
                      name="seatNumber"
                      value={inputs.seatNumber}
                      onChange={handleChange}
                      type="number"
                      margin="normal"
                      variant="standard"
                      placeholder="Enter any number between 1-99"
                    />
                    <FormLabel>Booking Date:</FormLabel>
                    <TextField
                      name="date"
                      value={inputs.date}
                      onChange={handleChange}
                      type="date"
                      margin="normal"
                      variant="standard"
                    />
                    <Button type="submit" sx={{ mt: 3 }}>
                      Book Now
                    </Button>
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Fragment>
      )}
    </>
  );
};

export default Booking;
