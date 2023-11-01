import { Box, Typography } from "@mui/material";
import React from "react";

const AddMovies = () => {
  return (
    <>
      <form>
        <Box
          width={"50%"}
          padding={10}
          margin={"auto"}
          display={"flex"}
          flexDirection={"column"}
          boxShadow={"10px 10px 20px #ccc"}
        >
            <Typography textAlign={"center"}></Typography>
        </Box>
      </form>
    </>
  );
};

export default AddMovies;
