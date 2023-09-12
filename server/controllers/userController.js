import UserModel from "../models/UserModel.js";

//******* GET USER ****/
export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await UserModel.find();
  } catch (err) {
    return next(err);
  }

  //Validation
  if (!users) {
    return res.status(500).json({
      message: "Unexpected Error Occured!",
    });
  }
  return res.status(200).json({
    users,
  });
};

//******** ADD USER || SIGN UP ********/
export const addUser = async (req, res) => {
  
};
