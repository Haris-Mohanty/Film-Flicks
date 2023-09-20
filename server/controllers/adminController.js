import adminModel from "../models/adminModel.js";
import bcrypt from "bcrypt";

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
