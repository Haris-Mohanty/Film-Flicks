import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../api/api";
import { Box, Typography } from "@mui/material";

const Booking = () => {
  const [movie, setMovie] = useState();

  const id = useParams().id;

  useEffect(() => {
    getMovieDetails(id)
      .then((res) => setMovie(res.movie))
      .catch((err) => console.log(err));
  }, [id]); //When the id is change, call the useEffect once again

  return (
    <>
      {movie && (
        <Fragment>
          <Typography
            padding={3}
            fontFamily={"fantasy"}
            variant="h4"
            textAlign={"center"}
          >
            Book tickets of the Movie: {movie.title}
          </Typography>
          <Box display={"flex"} justifyContent={"center"}>
            <Box
              display={"flex"}
              justifyContent={"column"}
              flexDirection={"column"}
              paddingTop={3}
              width={"50%"}
              marginRight={"auto"}
            >
              <img
                width={"60%"}
                height={"370px"}
                src={movie.posterUrl}
                alt={movie.title}
              />
              <Box width={"80%"} marginTop={3} padding={2}>
                <Typography paddingTop={2}>{movie.description}</Typography>
                <Typography fontWeight={"bold"} marginTop={1}>
                  Starrer: {movie.actors.map((actor) => actor + ", ")}
                </Typography>
                <Typography fontWeight={"bolder"} marginTop={1}>
                  Release Date:{" "}
                  {new Date(movie.releaseDate).toLocaleDateString()}
                </Typography>
              </Box>
            </Box>
            <Box width={"50%"} paddingTop={3}>
                
            </Box>
          </Box>
        </Fragment>
      )}
    </>
  );
};

export default Booking;
