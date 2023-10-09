import adminModel from "../models/adminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//********** SIGNUP ADMIN *************/
export const signupAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //Validation
    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide all fields!",
      });
    }
    if (password.length < 6) {
      return res.status(400).json({
        message: "Password length should be greater than 6 character!",
      });
    }

    //Check Admin(Already exists or not)
    const existingAdmin = await adminModel.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({
        message: "Admin Already Exists!",
      });
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    //Create admin
    const admin = new adminModel(req.body);
    await admin.save();
    return res.status(201).json({
      message: "Admin Created Successfully!",
      admin,
    });
  } catch (error) {
    next(error);
  }
};

//************ ADMIN LOGIN *********/
export const loginAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //Validation
    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide all fields!",
      });
    }
    if (password.length < 6) {
      return res.status(400).json({
        message: "Password length should be greater than 6 character!",
      });
    }

    //Existing Admin
    const existingAdmin = await adminModel.findOne({ email });
    if (!existingAdmin) {
      return res.status(404).json({
        message: "Invalid Credentials!",
      });
    }

    //Compare Password
    const comparePassword = await bcrypt.compare(
      password,
      existingAdmin.password
    );
    if (!comparePassword) {
      return res.status(400).json({
        message: "Incorrect Password, Please check again!",
      });
    }

    //Create Token
    const token = jwt.sign({ id: existingAdmin._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    //Login Success
    return res.status(200).json({
      message: "Admin Login Successfully!",
      id: existingAdmin._id,
      token,
      existingAdmin,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error!",
      error: error.message,
    });
  }
};

//************* GET ALL ADMIN *****************/
export const getAllAdmin = async (req, res, next) => {
  try {
    let allAdmin = await adminModel.find();
    if (!allAdmin) {
      return res.status(400).json({
        message: "There is no admin to find!",
      });
    }

    return res.status(200).json({
      message: "All admin fetched successfully!",
      totalAdmin: allAdmin.length,
      allAdmin,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error!",
      error: err.message,
    });
  }
};
