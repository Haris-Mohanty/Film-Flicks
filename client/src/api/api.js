import axios from "axios";

//********* GET ALL MOIES ***********/
export const getAllMovies = async () => {
  const response = await axios.get("/movie").catch((err) => console.log(err));

  //Validation
  if (response.status !== 200) {
    return console.log("No Data");
  }

  const data = await response.data;
  return data;
};

//********** USER AUTHENTICATION (SIGNUP & LOGIN) ************/
export const sendUserAuthReq = async (data, signup) => {
  const response = await axios
    .post(`/user/${signup ? "signup" : "login"}`, {
      name: signup ? data.name : "",
      email: data.email,
      password: data.password,
    })
    .catch((err) => console.log(err));

  //check validation
  if (response.status !== 200 && response.status !== 201) {
    return console.log("Unexcepted Error Occured!");
  }

  const resData = await response.data;
  return resData;
};

//********** ADMIN AUTHENTICATION (LOGIN) ************/
export const sendAdminLoginReq = async (data) => {
  const response = await axios
    .post("/admin/login", {
      email: data.email,
      password: data.password,
    })
    .catch((err) => console.log(err));

  if (response.status !== 200) {
    return console.log("Unexcepted Error Occured!");
  }

  const resData = await response.data;
  return resData;
};

//*************** GET MOVIE DETAILS BY ID **********************/
export const getMovieDetails = async (id) => {
  const response = await axios
    .get(`/movie/${id}`)
    .catch((err) => console.log(err));

  if (response.status !== 200) {
    return console.log("Unexcepted Error Occured!");
  }

  const resData = await response.data;
  return resData;
};

//************** CREATE BOOKING (NEW BOOKING) ***************/
export const newBooking = async (data) => {
  const response = await axios
    .post("/booking", {
      movie: data.movie,
      seatNumber: data.seatNumber,
      date: data.date,
      user: localStorage.getItem("userId"),
    })
    .catch((err) => console.log(err));

  //check validation
  if (response.status !== 200 && response.status !== 201) {
    return console.log("Unexcepted Error Occured!");
  }

  const resData = await response.data;
  return resData;
};

//************ GET ALL BOOKING OF USER **************/
export const getUserBookings = async () => {
  const id = localStorage.getItem("userId");
  const response = await axios
    .get(`/user/bookings/${id}`)
    .catch((err) => console.log(err));

  if (response.status !== 200) {
    return console.log("Unexcepted Error Occured!");
  }

  const resData = await response.data;
  return resData;
};

//**************** ADD MOVIE *****************/
export const addMovie = async (data) => {
  const response = await axios
    .post(
      "/movie",
      {
        title: data.title,
        description: data.description,
        releaseDate: data.releaseDate,
        posterUrl: data.posterUrl,
        featured: data.featured,
        actors: data.actors,
        admin: localStorage.getItem("adminId"),
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .catch((err) => console.log(err));

  if (response.status !== 201) {
    return console.log("Unexcepted error occured!");
  }

  
};
