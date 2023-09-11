import UserModel from "../models/UserModel";

export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await UserModel.find();
  } catch (err) {
    return next(err);
  }

  //Validation
};
