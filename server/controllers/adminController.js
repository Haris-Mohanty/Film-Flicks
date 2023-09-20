import adminModel from "../models/adminModel.js";

//********** SIGNUP ADMIN *************/
export const signupAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //Validation
    if (!email || !password) {
      next("Please provide all fields!");
    }
    if (password.length < 6) {
      next("Password length should be greater than 6 character!");
    }

    //Check Admin(Already exists or not)
    const existingAdmin = await adminModel.findOne({ email });
    if (existingAdmin) {
      return res.status(400).send({
        message: "Admin Already Exists!",
      });
    }
  } catch (error) {
    next(error);
  }
};
