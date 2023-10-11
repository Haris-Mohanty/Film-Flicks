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
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch()


  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([]); //For showing movies list(option)

  //************ GET ALL MOVIES TO SHOWING MOVIES IN SEARCH BAR **********/
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

  //************* USER LOGOUT **************/
  const logout = ()=>{

  }

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "#2b2d42" }}>
        <Toolbar>
          <Box width={"10%"}>
            <Link to={"/"}>
              <VideoSettingsIcon sx={{ color: "white", fontSize: "2rem" }} />
            </Link>
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
              <Tab LinkComponent={Link} to="/movies" label="Movie" />
              {!isAdminLoggedIn && !isUserLoggedIn && (
                <>
                  <Tab LinkComponent={Link} to="/admin" label="Admin" />
                  <Tab LinkComponent={Link} to="/auth" label="Auth" />
                </>
              )}
              {isUserLoggedIn && (
                <>
                  <Tab LinkComponent={Link} to="/user" label="Profile" />
                  <Tab onClick={} LinkComponent={Link} to="/" label="Logout" />
                </>
              )}
              {isAdminLoggedIn && (
                <>
                  <Tab LinkComponent={Link} to="/add" label="Add Movies" />
                  <Tab LinkComponent={Link} to="/admin" label="Profile" />
                  <Tab LinkComponent={Link} to="/" label="Logout" />
                </>
              )}
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
