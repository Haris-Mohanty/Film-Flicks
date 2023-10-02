import { Box, Typography } from "@mui/material";
import React from "react";
import MovieItems from "../components/Movies/MovieItems";

const Homepage = () => {
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
        >
          {[1, 2, 3, 4].map((item) => (
            <MovieItems key={item} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
