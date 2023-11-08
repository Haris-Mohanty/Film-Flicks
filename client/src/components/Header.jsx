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
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminActions, userActions } from "../store";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([]); //For showing movies list(option)

  //Search
  const [selectedMovie, setSelectedMovie] = useState();

  //************ GET ALL MOVIES TO SHOWING MOVIES IN SEARCH BAR **********/
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

  //************* USER & ADMIN LOGOUT **************/
  const logout = (isAdmin) => {
    dispatch(isAdmin ? adminActions.logout() : userActions.logout());
  };

  const handleChange = (e, val) => {
    const movie = movies.find((m) => m.title === val);
    if (isUserLoggedIn) {
      navigate(`/booking/${movie._id}`);
    }
  };

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
              onChange={handleChange}
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
              {!isAdminLoggedIn &&
                !isUserLoggedIn && [
                  <Tab
                    key="admin"
                    LinkComponent={Link}
                    to="/admin"
                    label="Admin"
                  />,
                  <Tab
                    key="auth"
                    LinkComponent={Link}
                    to="/auth"
                    label="Auth"
                  />,
                ]}
              {isUserLoggedIn && [
                <Tab
                  key="user-profile"
                  LinkComponent={Link}
                  to="/user"
                  label="Profile"
                />,
                <Tab
                  onClick={() => {
                    logout(false);
                    setValue(0); // Set the value (0) to the Movie tab when User logs out
                  }}
                  key="user-logout"
                  LinkComponent={Link}
                  to="/"
                  label="Logout"
                />,
              ]}
              {isAdminLoggedIn && [
                <Tab
                  key="add-movies"
                  LinkComponent={Link}
                  to="/add"
                  label="Add Movies"
                />,
                <Tab
                  key="admin-profile"
                  LinkComponent={Link}
                  to="/profile"
                  label="Profile"
                />,
                <Tab
                  onClick={() => {
                    logout(true);
                    setValue(0); // Set the value (0) to the Movie tab when admin logs out
                  }}
                  key="admin-logout"
                  LinkComponent={Link}
                  to="/"
                  label="Logout"
                />,
              ]}
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
