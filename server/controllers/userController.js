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

  //
  let user;
  try {
    user = new UserModel({ name, email, password });
    user = user.save();
  } catch (error) {
    return next(error);
  }
  if (!user) {
    return res.status(500).json({
      message: "Unexpected Error Occurred!",
    });
  }
  return res.status(201).json({
    user
  });
};
