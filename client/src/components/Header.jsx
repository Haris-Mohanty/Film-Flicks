import React, { useEffect, useState } from "react";
import {
  AppBar,
  Autocomplete,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";
import MenuIcon from "@mui/icons-material/Menu";
import { getAllMovies } from "../api/api";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminActions, userActions } from "../store";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([]); //For showing movies list(option)

  const [isDrawerOpen, setDrawerOpen] = useState(false);

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

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "#2b2d42" }}>
        <Toolbar>
          {/********** APP LOGO **********/}
          <Box width={"10%"} ml={2}>
            <Link to={"/"}>
              <VideoSettingsIcon sx={{ color: "white", fontSize: "2rem" }} />
            </Link>
          </Box>

          {/**********  SEARCH BAR ***********/}
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

          {/********** Hamburger icon form small screen **********/}
          {isSmallScreen && (
            <>
              {" "}
              <Box
                sx={{
                  display: { xs: "block", sm: "block", md: "none" },
                  ml: "auto",
                }}
              >
                <IconButton
                  onClick={() => toggleDrawer(true)}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </>
          )}

          {/********** LARGE SCREEN **********/}
          {!isSmallScreen && (
            <>
              {" "}
              <Box display={{ xs: "none", sm: "none", md: "block" }}>
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
            </>
          )}
        </Toolbar>
      </AppBar>

      {/********** DRAWER FOR SMALL SCREEN **********/}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <List>
          <ListItem component={Link} to="/movies">
            <ListItemText primary="Movie" />
          </ListItem>
          {!isAdminLoggedIn && !isUserLoggedIn && (
            <>
              <ListItem component={Link} to="/admin">
                <ListItemText primary="Admin" />
              </ListItem>
              <ListItem component={Link} to="/auth">
                <ListItemText primary="Auth" />
              </ListItem>
            </>
          )}
          {isUserLoggedIn && (
            <>
              <ListItem component={Link} to="/user">
                <ListItemText primary="Profile" />
              </ListItem>
              <ListItem
                onClick={() => {
                  logout(false);
                  navigate("/");
                  toggleDrawer(false);
                }}
              >
                <ListItemText primary="Logout" />
              </ListItem>
            </>
          )}
          {isAdminLoggedIn && (
            <>
              <ListItem component={Link} to="/add">
                <ListItemText primary="Add Movies" />
              </ListItem>
              <ListItem component={Link} to="/profile">
                <ListItemText primary="Profile" />
              </ListItem>
              <ListItem
                onClick={() => {
                  logout(true);
                  navigate("/");
                  toggleDrawer(false);
                }}
              >
                <ListItemText primary="Logout" />
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
