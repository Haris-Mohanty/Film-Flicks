import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";

//******* GET USER ****/
export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await UserModel.find();
  } catch (err) {
    return console.log(error);
  }

  //Validation
  if (!users) {
    return res.status(500).send({
      message: "Unexpected Error Occured!",
    });
  }
  return res.status(200).send({
    users,
  });
};

//******** ADD USER || SIGN UP ********/
export const addUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    //Validation
    if (!name) {
      next("Please provide all fields!");
    }
    if (!email) {
      next("Please provide all fields!");
    }
    if (!password) {
      next("Please provide all fields!");
    }

    //Check user(email check)
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      next("Email Already Exists!");
    }
    
    //create user
    const user = await UserModel.create({ name, email, password });
    res.status(201).send({
      message: "User Created Successfully!",
      user,
    });
  } catch (error) {
    next(error);
  }
};

//******** UPDATE USER ******/
export const updateUser = async (req, res, next) => {};
