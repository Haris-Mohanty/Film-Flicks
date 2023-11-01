import {
  Box,
  Button,
  Checkbox,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const labelProps = {
  mb: "11px",
};

const AddMovies = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    posterUrl: "",
    releaseDate: "",
    featured: false,
  });
  
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
          <Typography textAlign={"center"} variant="h5" fontFamily={"verdana"}>
            Add New Movie
          </Typography>
          <FormLabel sx={labelProps}>Title</FormLabel>
          <TextField name="title" variant="standard" margin="normal" />
          <FormLabel sx={labelProps}>Description</FormLabel>
          <TextField name="description" variant="standard" margin="normal" />
          <FormLabel sx={labelProps}>Poster Url</FormLabel>
          <TextField name="posterUrl" variant="standard" margin="normal" />
          <FormLabel sx={labelProps}>Release Date</FormLabel>
          <TextField name="releaseDate" variant="standard" margin="normal" />
          <FormLabel sx={labelProps}>Actor</FormLabel>
          <Box display={"flex"}>
            <TextField name="actor" variant="standard" margin="normal" />
            <Button>Add Actor</Button>
          </Box>
          <Box>
            <Checkbox sx={{ marginRight: "auto" }} />
            <FormLabel sx={labelProps}>Featured</FormLabel>
          </Box>
          <Button
            variant="contained"
            sx={{
              width: "30%",
              margin: "auto",
              bgcolor: "#2b2d4a",
              ":hover": {
                bgcolor: "#121217",
              },
            }}
          >
            Add New Movie
          </Button>
        </Box>
      </form>
    </>
  );
};

export default AddMovies;
