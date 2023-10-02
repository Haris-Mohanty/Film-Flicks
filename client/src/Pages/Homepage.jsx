import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieItems from "../components/Movies/MovieItems";
import { Link } from "react-router-dom";
import { getAllMovies } from "../api/api";

const Homepage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);
  console.log(movies)
  return (
    <>
      <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={2}>
        <Box margin={"auto"} width={"90%"} height={"50vh"} padding={2}>
          <img
            src="https://static.moviecrow.com/gallery/20230508/215637-Jawan%20Release%20Date%20Shah%20Rukh%20Khan%20Poster.png"
            alt="movies1"
            width={"100%"}
            height={"100%"}
          />
        </Box>
        <Box padding={5} margin={"auto"}>
          <Typography variant="h4" textAlign={"center"} fontWeight={"bold"}>
            Latest Release
          </Typography>
        </Box>
        <Box
          display={"flex"}
          width={"80%"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          marginLeft={18}
        >
          {[1, 2, 3, 4].map((item) => (
            <MovieItems key={item} />
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
