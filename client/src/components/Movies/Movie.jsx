import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllMovies } from "../../api/api";
import MovieItems from "./MovieItems";

const Movie = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [movies, setMovies] = useState([]);
  //Show all Movies
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box margin={"auto"} marginTop={4}>
      <Typography
        margin={"auto"}
        variant="h4"
        padding={2}
        width={isSmallScreen ? "70%" : "40%"}
        bgcolor={"#009688"}
        color={"#fff"}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        All Movies
      </Typography>
      <Box
        width={"100%"}
        margin={"auto"}
        display={"flex"}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        {movies &&
          movies.map((movie, index) => (
            <MovieItems
              key={index}
              id={movie._id}
              posterUrl={movie.posterUrl}
              releaseDate={movie.releaseDate}
              title={movie.title}
            />
          ))}
      </Box>
    </Box>
  );
};

export default Movie;
