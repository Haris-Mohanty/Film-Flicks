import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieItems from "../components/Movies/MovieItems";
import { Link } from "react-router-dom";
import { getAllMovies } from "../api/api";

const Homepage = () => {
  const [movies, setMovies] = useState([]);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Box
        width={"100%"}
        height={"100%"}
        margin={"auto"}
        marginTop={2}
      >
        <Box
          margin={"auto"}
          width={isSmallScreen ? "100%" : "90%"}
          height={"50vh"}
          padding={isSmallScreen ? 0 : 2}
        >
          <img
            src="https://static.moviecrow.com/gallery/20230508/215637-Jawan%20Release%20Date%20Shah%20Rukh%20Khan%20Poster.png"
            alt="movies1"
            width={"100%"}
            height={"100%"}
          />
        </Box>

        <Box padding={5} margin={"auto"}>
          <Typography
            variant="h4"
            textAlign={"center"}
            fontWeight={"bold"}
            color={"#D2691E"}
          >
            Latest Release
          </Typography>
        </Box>

        <Box display={"flex"} margin={"auto"}>
          <Button
            LinkComponent={Link}
            to="/movies"
            variant="outlined"
            sx={{ margin: "auto", bgcolor: "#9370DB", color: "#fff" }}
          >
            Book Movie
          </Button>
        </Box>

        <Box
          display={"flex"}
          width={"80%"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          marginLeft={isSmallScreen ? 5 : 20}
        >
          {movies &&
            movies
              .slice(0, 4)
              .map((movie, index) => (
                <MovieItems
                  key={index}
                  id={movie.id}
                  title={movie.title}
                  posterUrl={movie.posterUrl}
                  releaseDate={movie.releaseDate}
                />
              ))}
        </Box>
        <Box display={"flex"} padding={5} margin={"auto"}>
          <Button
            LinkComponent={Link}
            to="/movies"
            variant="outlined"
            sx={{ margin: "auto", color: "#2d2d42" }}
          >
            View All Movies
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
