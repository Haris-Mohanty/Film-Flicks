import axios from "axios";

//********* GET ALL MOIES ***********/
export const getAllMovies = async () => {
  const response = await axios.get("/movie").catch((err) => console.log(err));
  console.log(response)

  //Validation
  if (response.status !== 200) {
    return console.log("No Data");
  }

  const data = await response.data;
  return data;
};

//********** AUTHENTICATION (SIGNUP & LOGIN) ************/
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
