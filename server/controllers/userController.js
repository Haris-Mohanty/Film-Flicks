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
    if (password.length < 6) {
      next("Password length should be greater than 6 character!");
    }

    //Check user(email check)
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      next("Email Already Exists!");
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    //create user
    const user = new UserModel(req.body);
    await user.save();
    res.status(201).send({
      message: "User Created Successfully!",
      user,
    });
  } catch (error) {
    next(error);
  }
};

//******** UPDATE USER ******/
export const updateUser = async (req, res, next) => {
  try {
    //Get id
    const id = req.params.id;
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
    if (password.length < 6) {
      next("Password length should be greater than 6 character!");
    }

    //Check user(email check)
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      next("Email Already Exists!");
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    //update
    const user = await UserModel.findByIdAndUpdate(id, {
      name,
      email,
      password: hashedPassword,
    });
    if (!user) {
      
    }
    res.status(200).send({
      message: "Updated Successfully!",
    });
  } catch (error) {
    next(error);
  }
};

//********* DELETE USER ***********/
export const deleteUser = async (req, res, next) => {
  try {
    //Get id
    const id = req.params.id;

    const user = await UserModel.findByIdAndRemove(id);
    if(!user){
      
    }
  } catch (error) {
    next(error);
  }
};
