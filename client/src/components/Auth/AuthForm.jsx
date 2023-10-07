import {
  Box,
  Button,
  Dialog,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React, { useState } from "react";

const AuthForm = () => {
  //State change for signup and login form
  const [isSignup, setIsSignup] = useState(false);
  return (
    <Dialog PaperProps={{ style: { borderRadius: "15px" } }} open={true}>
      <Box sx={{ ml: "auto", padding: 1 }}>
        <IconButton>
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <Typography
        variant="h4"
        textAlign={"center"}
        fontWeight={"bold"}
        color={"#2b2d42"}
        marginBottom={2}
      >
        Login Form
      </Typography>
      <form>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          width={370}
          margin={"auto"}
          alignItems={"center"}
        >
          {/************* WHEN SIGN UP IS TRUE (SIGNUP FORM SHOWING) *******************/}
          {isSignup && (
            <>
              {" "}
              <TextField
                type="text"
                variant="standard"
                placeholder="Enter Name"
                name="name"
                margin="normal"
              />
            </>
          )}
          <TextField
            type="email"
            variant="standard"
            placeholder="Enter Email"
            name="email"
            margin="normal"
          />

          <TextField
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
              borderRadius: 2,
              bgcolor: "#2b2d42",
            }}
          >
            {isSignup ? "Signup" : "Login"}
          </Button>
          <Button
            onClick={() => setIsSignup(!isSignup)}
            sx={{
              marginTop: 1,
              marginBottom: 2,
              borderRadius: 2,
            }}
          >
            Switch to {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </Dialog>
  );
};

export default AuthForm;
