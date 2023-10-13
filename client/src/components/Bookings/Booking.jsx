import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../api/api";
import { Typography } from "@mui/material";

const Booking = () => {
  const [movie, setMovie] = useState();

  const id = useParams().id;

  useEffect(() => {
    getMovieDetails(id)
      .then((res) => setMovie(res.movie))
      .catch((err) => console.log(err));
  }, [id]); //When the id is change, call the useEffect once again

  return (
    <div>
      {movie && (
        <Fragment>
          <Typography
            padding={3}
            fontFamily={"fantasy"}
            variant="h4"
            textAlign={"center"}
          >
            Book tickets of the Movie: {movie.title}
          </Typography>
        </Fragment>
      )}
    </div>
  );
};

export default Booking;
