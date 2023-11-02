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
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
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
          <FormLabel>Title</FormLabel>
          <TextField
            value={inputs.title}
            onChange={handleChange}
            name="title"
            variant="standard"
            margin="normal"
            sx={labelProps}
          />
          <FormLabel>Description</FormLabel>
          <TextField
            value={inputs.description}
            onChange={handleChange}
            name="description"
            variant="standard"
            margin="normal"
            sx={labelProps}
          />
          <FormLabel>Poster Url</FormLabel>
          <TextField
            value={inputs.posterUrl}
            onChange={handleChange}
            name="posterUrl"
            variant="standard"
            margin="normal"
            sx={labelProps}
          />
          <FormLabel>Release Date</FormLabel>
          <TextField
            type="date"
            value={inputs.releaseDate}
            onChange={handleChange}
            name="releaseDate"
            variant="standard"
            margin="normal"
            sx={labelProps}
          />
          <FormLabel>Actor</FormLabel>
          <Box display={"flex"}>
            <TextField
              name="actor"
              variant="standard"
              margin="normal"
              sx={labelProps}
            />
            <Button>Add Actor</Button>
          </Box>
          <Box>
            <Checkbox
              name="featured"
              checked={!!inputs.featured}
              onClick={(e) =>
                setInputs((prevState) => ({
                  ...prevState,
                  featured: e.target.checked,
                }))
              }
              sx={{ marginRight: "auto" }}
            />
            <FormLabel>Featured</FormLabel>
          </Box>
          <Button
            variant="contained"
            type="submit"
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
