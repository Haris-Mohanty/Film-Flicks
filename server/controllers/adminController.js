import adminModel from "../models/adminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//********** SIGNUP ADMIN *************/
export const signupAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //Validation
    if (!email || !password) {
      return res.status(400).send({
        message: "Please provide all fields!",
      });
    }
    if (password.length < 6) {
      return res.status(400).send({
        message: "Password length should be greater than 6 character!",
      });
    }

    //Check Admin(Already exists or not)
    const existingAdmin = await adminModel.findOne({ email });
    if (existingAdmin) {
      return res.status(400).send({
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
    return res.status(201).send({
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
      return res.status(400).send({
        message: "Please provide all fields!",
      });
    }
    if (password.length < 6) {
      return res.status(400).send({
        message: "Password length should be greater than 6 character!",
      });
    }

    //Existing Admin
    const existingAdmin = await adminModel.findOne({ email });
    if (!existingAdmin) {
      return res.status(404).send({
        message: "Invalid Credentials!",
      });
    }

    //Compare Password
    const comparePassword = await bcrypt.compare(
      password,
      existingAdmin.password
    );
    if (!comparePassword) {
      return res.status(400).send({
        message: "Incorrect Password, Please check again!",
      });
    }

    //Create Token
    const token = jwt.sign({ id: existingAdmin._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    //Login Success
    return res.status(200).send({
      message: "Admin Login Successfully!",
      existingAdmin,
      token,
    });
  } catch (error) {
    next(error);
  }
};
