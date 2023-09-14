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
    return res.status(500).json({
      message: "Unexpected Error Occured!",
    });
  }
  return res.status(200).json({
    users,
  });
};

//******** ADD USER || SIGN UP ********/
export const addUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  //Validation
  if (
    !name &&
    name.trim() === "" &&
    !email.trim() === "" &&
    !password.trim() === ""
  ) {
    return res.status(422).json({
      message: "Please provide all fields!",
    });
  }
  const hashPassword = bcrypt.hashSync(password);
  let user;
  try {
    user = new UserModel({ name, email, password: hashPassword });
    user = await user.save();
  } catch (error) {
    return console.log(error);
  }
  if (!user) {
    return res.status(500).json({
      message: "Unexpected Error Occurred!",
    });
  }
  return res.status(201).json({
    user,
  });
};

//******** UPDATE USER ******/
export const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  //Validation
  if (
    !name &&
    name.trim() === "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.trim() === ""
  ) {
    return res.status(422).json({
      message: "Invalid Inputs!",
    });
  }
};
