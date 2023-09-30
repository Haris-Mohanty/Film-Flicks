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

const movieArray = ["Khsi", "Jawan", "KGF"];

const Header = () => {
  const [value, setValue] = useState(0);

  //************ GET ALL MOVIES TO SHOWING MOVIES IN SEARCH BAR **********/
  useEffect(()=>{},[])

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
              options={movieArray.map((option) => option)}
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
