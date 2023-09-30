import React, { useEffect, useState } from "react";
import {
  AppBar,
  Autocomplete,
  Box,
  Tab,
  Tabs,
  TextField,
  Toolbar,
} from "@mui/material";
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";
import { getAllMovies } from "../api/api";

const Header = () => {
  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([]); //For showing movies list(option)

  //************ GET ALL MOVIES TO SHOWING MOVIES IN SEARCH BAR **********/
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <AppBar sx={{ bgcolor: "#2b2d42" }}>
        <Toolbar>
          <Box width={"20%"}>
            <VideoSettingsIcon />
          </Box>
          <Box width={"35%"} margin={"auto"}>
            <Autocomplete
              freeSolo
              options={movies && movies.map((data) => data.title)}
              renderInput={(params) => (
                <TextField
                  sx={{ input: { color: "white" } }}
                  variant="standard"
                  {...params}
                  placeholder="Search Movies"
                />
              )}
            />
          </Box>
          <Box display={"flex"}>
            <Tabs
              textColor="inherit"
              indicatorColor="secondary"
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              <Tab label="Admin" />
              <Tab label="Auth" />
              <Tab label="Movie" />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
