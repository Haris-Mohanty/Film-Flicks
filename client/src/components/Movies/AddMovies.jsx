import {
  Box,
  Button,
  Checkbox,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
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
          <Typography textAlign={"center"} variant="h5" fontFamily={"verdana"}>
            Add New Movie
          </Typography>
          <FormLabel>Title</FormLabel>
          <TextField
            name="title"
            variant="standard"
            margin="normal"
            sx={{ marginBottom: "17px" }}
          />
          <FormLabel>Description</FormLabel>
          <TextField
            name="description"
            variant="standard"
            margin="normal"
            sx={{ marginBottom: "17px" }}
          />
          <FormLabel>Poster Url</FormLabel>
          <TextField
            name="posterUrl"
            variant="standard"
            margin="normal"
            sx={{ marginBottom: "17px" }}
          />
          <FormLabel>Release Date</FormLabel>
          <TextField
            name="releaseDate"
            variant="standard"
            margin="normal"
            sx={{ marginBottom: "17px" }}
          />
          <FormLabel>Actor</FormLabel>
          <Box display={"flex"}>
            <TextField
              name="actor"
              variant="standard"
              margin="normal"
              sx={{ marginBottom: "17px" }}
            />
            <Button>Add</Button>
          </Box>
          <FormLabel>Featured</FormLabel>
          <Checkbox checked={false} />
        </Box>
      </form>
    </>
  );
};

export default AddMovies;
