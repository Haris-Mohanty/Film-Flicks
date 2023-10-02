import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const MovieItems = () => {
  return (
    <Card
      sx={{
        margin:2,
        width: 250,
        height: 320,
        borderRadius: 3,
        ":hover": {
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        },
      }}
    >
      <img src="" height={"50%"} width={"100%"} alt="movies" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ margin: "auto" }} size="small">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieItems;
