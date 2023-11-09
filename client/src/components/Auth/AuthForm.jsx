import {
  Box,
  Button,
  Dialog,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthForm = ({ onSubmit, isAdmin }) => {
  //State change for signup and login form
  const [isSignup, setIsSignup] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  //************* FORM INPUT DATA(STATE) ****************/
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  //*********** INPUT VALUE GET (HANDLE CHANGE) *********/
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //************* FORM SUBMIT *************/
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ inputs, signup: isAdmin ? false : isSignup });
  };
  return (
    <Dialog PaperProps={{ style: { borderRadius: "15px" } }} open={true}>
      {/*********** CLOSE BUTTON *************/}
      <Box sx={{ ml: "auto", padding: 1 }}>
        <IconButton LinkComponent={Link} to={"/"}>
          <CloseRoundedIcon />
        </IconButton>
      </Box>

      {/********** FORM HEADER ***********/}
      <Typography
        variant="h4"
        textAlign={"center"}
        fontWeight={"bold"}
        color={"#2b2d42"}
        marginBottom={2}
      >
        {isSignup ? "Signup Form" : "Login Form"}
      </Typography>

      {/************ FORM CREATE *************/}
      <form onSubmit={handleSubmit}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          width={370}
          margin={"auto"}
          alignItems={isSmallScreen ? "start" : "center"}
          ml={isSmallScreen ? 8 : 1}
        >
          {/************* WHEN SIGN UP IS TRUE (SIGNUP FORM SHOWING) *******************/}
          {!isAdmin && isSignup && (
            <>
              {" "}
              <TextField
                value={inputs.name}
                onChange={handleChange}
                type="text"
                variant="standard"
                placeholder="Enter Name"
                name="name"
                margin="normal"
              />
            </>
          )}
          <TextField
            value={inputs.email}
            onChange={handleChange}
            type="email"
            variant="standard"
            placeholder="Enter Email"
            name="email"
            margin="normal"
          />

          <TextField
            value={inputs.password}
            onChange={handleChange}
            type="password"
            variant="standard"
            placeholder="Enter Password"
            name="password"
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginTop: 2,
              marginBottom: 2,
              marginLeft: isSmallScreen ? 3 : 1,
              borderRadius: 2,
              bgcolor: "#2b2d42",
              width: "40%",
            }}
          >
            {isSignup ? "Signup" : "Login"}
          </Button>
          {/************* THIS OPTION IS SHOWING ONLY FOR USER (NOT ADMIN) **********/}
          {!isAdmin && (
            <Button
              onClick={() => setIsSignup(!isSignup)}
              sx={{
                marginBottom: 2,
                borderRadius: 2,
                fontFamily: "san-serif",
              }}
            >
              Switch to {isSignup ? "Login" : "Signup"} Form!
            </Button>
          )}
        </Box>
      </form>
    </Dialog>
  );
};

export default AuthForm;
