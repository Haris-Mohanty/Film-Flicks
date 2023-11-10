import axios from "axios";

//********* GET ALL MOIES ***********/
export const getAllMovies = async () => {
  try {
    const response = await axios.get("/movie");

    // Check if the response status is 200
    if (response.status === 200) {
      const data = response.data;
      return data;
    } else {
      // If the response status is not 200, throw an error
      throw new Error(`Unexpected status: ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
};

//********** USER AUTHENTICATION (SIGNUP & LOGIN) ************/
export const sendUserAuthReq = async (data, signup) => {
  try {
    const response = await axios.post(`/user/${signup ? "signup" : "login"}`, {
      name: signup ? data.name : "",
      email: data.email,
      password: data.password,
    });

    if (response.status === 200 || response.status === 201) {
      const resData = await response.data;
      return resData;
    } else {
      // If the response status is not success (200 or 201), throw an error
      throw new Error("Unexpected Error Occurred!");
    }
  } catch (err) {
    throw err;
  }
};
//********** ADMIN AUTHENTICATION (LOGIN) ************/
export const sendAdminLoginReq = async (data) => {
  try {
    const response = await axios.post("/admin/login", {
      email: data.email,
      password: data.password,
    });

    if (response.status === 200) {
      const resData = response.data;
      return resData;
    } else {
      throw new Error("Unexpected Error Occurred!");
    }
  } catch (error) {
    throw error;
  }
};

//*************** GET MOVIE DETAILS BY ID **********************/
export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(`/movie/${id}`);

    if (response.status === 200) {
      const resData = await response.data;
      return resData;
    } else {
      throw new Error("Unexcepted Error Occured!");
    }
  } catch (err) {
    throw err;
  }
};

//************** CREATE BOOKING (NEW BOOKING) ***************/
export const newBooking = async (data) => {
  try {
    const response = await axios.post("/booking", {
      movie: data.movie,
      seatNumber: data.seatNumber,
      date: data.date,
      user: localStorage.getItem("userId"),
    });

    //check validation
    if (response.status === 201) {
      const resData = await response.data;
      return resData;
    } else {
      throw new Error("Unexcepted Error Occured!");
    }
  } catch (err) {
    throw err;
  }
};

//************ GET ALL BOOKING OF USER **************/
export const getUserBookings = async () => {
  try {
    const id = localStorage.getItem("userId");
    const response = await axios.get(`/user/bookings/${id}`);

    if (response.status === 200) {
      const resData = await response.data;
      return resData;
    } else {
      throw new Error("Unexcepted Error Occured!");
    }
  } catch (err) {
    throw err;
  }
};

//**************** DELETE BOOKINGS OF USER **************/
export const deleteBooking = async (id) => {
  const res = await axios
    .delete(`/booking/${id}`)
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unexcepted Error Occured!");
  }

  const resData = await res.data;
  return resData;
};

//***************** GET USER BY ID *********************/
export const getUserByID = async () => {
  const id = localStorage.getItem("userId");
  const res = await axios.get(`/user/${id}`).catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unexcepted Error Occured!");
  }

  const resData = await res.data;
  return resData;
};

//***************** GET USER BY ID *********************/
export const deleteUser = async (id) => {
  const res = await axios
    .delete(`/user/${id}`)
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unexcepted Error Occured!");
  }

  const resData = await res.data;
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

  const resData = await response.data;
  return resData;
};

//****************** GET ADMIN DETAILS *********************/
export const getAdminById = async () => {
  const adminId = localStorage.getItem("adminId");

  const res = await axios
    .get(`/admin/${adminId}`)
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unexcepted error occured!");
  }

  const resData = await res.data;
  return resData;
};

//************** DELETE MOVIE **************/
export const deleteMovie = async (id) => {
  const res = await axios
    .delete(`/movie/${id}`)
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unexcepted error occured!");
  }

  const resData = await res.data;
  return resData;
};
