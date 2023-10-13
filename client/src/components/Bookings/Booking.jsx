import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../api/api";

const Booking = () => {
  const [movies, setMovies] = useState();

  const id = useParams().id;

  useEffect(() => {
    getMovieDetails(id);
  }, [id]); //When the id is change, call the useEffect once again
  return <div></div>;
};

export default Booking;
