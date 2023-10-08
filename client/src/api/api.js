import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_BASEURL });
console.log(API);
console.log(process.env.REACT_BASEURL)

//********* GET ALL MOIES ***********/
export const getAllMovies = async () => {
  const response = await axios
    .get("http://localhost:8080/api/v1/movie")
    .catch((err) => console.log(err));

  //Validation
  if (response.status !== 200) {
    return console.log("No Data");
  }

  const data = await response.data;
  return data;
};

//********** AUTHENTICATION (SIGNUP & LOGIN) ************/
export const sendUserAuthReq = async (data, signup) => {
  // axios.post()
};
