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
