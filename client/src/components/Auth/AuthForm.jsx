import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import React from "react";

const AuthForm = () => {
  return (
    <Dialog open={true}>
      <Typography
        variant="h4"
        textAlign={"center"}
        margin={"25px"}
        fontWeight={"bold"}
        color={"#2b2d42"}
      >
        Login Form
      </Typography>
      <Typography
        variant="h4"
        textAlign={"center"}
        margin={"25px"}
        fontWeight={"bold"}
        color={"#2b2d42"}
      >
        Signup Form
      </Typography>
      <form>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          width={350}
          margin={"auto"}
          alignItems={"center"}
        >
          <TextField
            type="text"
            variant="standard"
            placeholder="Enter Name"
            name="name"
            margin="normal"
          />
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
            Login
          </Button>
          <Button
            variant="contained"
            sx={{
              marginTop: 2,
              marginBottom: 2,
              borderRadius: 2,
              bgcolor: "green",
            }}
          >
            SignUp
          </Button>
        </Box>
      </form>
    </Dialog>
  );
};

export default AuthForm;
