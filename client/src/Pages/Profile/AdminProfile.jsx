import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getAdminById } from "../../api/api";
const AdminProfile = () => {
  const [admin, setAdmin] = useState();

  useEffect(() => {
    getAdminById()
      .then((res) => setAdmin(res.admin))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Box width={"100%"} display={"flex"}>
        <Fragment>
          {" "}
          {admin && (
            <Box
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              width={"30%"}
              padding={3}
            >
              <AccountCircleIcon
                sx={{ fontSize: "10rem", textAlign: "center", ml: 10 }}
              />
              <Typography
                mt={1}
                padding={1}
                width={"70%"}
                textAlign={"center"}
                border={"1px solid #ccc"}
                borderRadius={6}
              >
                {admin && `Email: ${admin.email}`}
              </Typography>
            </Box>
          )}
          {admin && admin.addedMovies.length > 0 && (
            <Box width={"70%"} display={"flex"} flexDirection={"column"}>
              <Typography
                variant="h3"
                fontWeight={"bold"}
                textAlign={"center"}
                padding={2}
              >
                Added Movies
              </Typography>
              <Box
                margin={"auto"}
                display={"flex"}
                flexDirection={"column"}
                width={"80%"}
              >
                <List>
                  {admin.addedMovies.map((movie, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        textAlign: "center",
                        margin: 2,
                      }}
                    >
                      <ListItemText
                        sx={{ margin: 1, width: "auto", textAlign: "left" }}
                      >
                        {booking.title && `Movie: ${booking.title}`}
                      </ListItemText>
                    </ListItemText>
                  ))}
                </List>
              </Box>
            </Box>
          )}
        </Fragment>
      </Box>
    </>
  );
};

export default AdminProfile;
