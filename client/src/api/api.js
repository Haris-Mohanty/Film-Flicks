import axios from "axios";

//********* GET ALL MOIES ***********/
export const getAllMovies = async () => {
  const response = await axios
    .get(`${process.env.REACT_APP_BASE_URL}/movie`)
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
