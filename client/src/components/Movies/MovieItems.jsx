import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import "./movieItems.css";
import { Link } from "react-router-dom";

const MovieItems = ({ title, releaseDate, posterUrl, id }) => {
  return (
    <Card
      sx={{
        margin: 2,
        width: 230,
        height: 390,
        borderRadius: 3,
        ":hover": {
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        },
      }}
    >
      <img
        src={posterUrl}
        height={"68%"}
        width={"100%"}
        alt={title}
        className="movie-img"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontWeight={"bold"}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" marginBottom={-2}>
          {new Date(releaseDate).toDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          LinkComponent={Link}
          to={`/booking/${id}`}
          variant="contained"
          color="success"
          sx={{ margin: "auto" }}
          size="small"
        >
          Book
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieItems;
