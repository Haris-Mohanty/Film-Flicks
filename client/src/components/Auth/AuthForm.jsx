import { Box, Dialog, TextField, Typography } from "@mui/material";
import React from "react";

const AuthForm = () => {
  return (
    <Dialog open={true}>
      <Typography
        variant="h4"
        textAlign={"center"}
        margin={"25px"}
        borderBottom={"1px solid #777877"}
      >
        Login
      </Typography>
      <form>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          width={400}
          margin={"auto"}
          alignItems={"center"}
        >
          <TextField
            type="email"
            variant="standard"
            placeholder="Enter Email"
            name="email"
            sx={{ marginBottom: "25px", width: "70%" }}
          />

          <TextField
            type="password"
            variant="standard"
            placeholder="Enter Password"
            name="password"
            sx={{ marginBottom: "25px", width: "70%" }}
          />
        </Box>
      </form>
    </Dialog>
  );
};

export default AuthForm;
