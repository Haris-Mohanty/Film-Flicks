import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import bookingModel from "../models/bookingModel.js";
import movieModel from "../models/movieModel.js";

//******************* GET USER ********************/
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

//******************* GET USER BY ID ********************/
const getUserById = async (req, res, next) => {};

//******** ADD USER || SIGN UP ********/
export const addUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    //Validation
    if (!name) {
      next("Please provide Name!");
    }
    if (!email) {
      next("Please provide Email!");
    }
    if (!password) {
      next("Please provide Password!");
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
    res.status(201).json({
      message: "User Created Successfully!",
      id: user._id,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error in Add user API!",
    });
  }
};

//************** UPDATE USER ***************/
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
      return res.status(500).json({
        message: "Something went wrong!",
      });
    }
    res.status(200).json({
      message: "Updated Successfully!",
    });
  } catch (error) {
    next(error);
  }
};

//************** DELETE USER *****************/
export const deleteUser = async (req, res, next) => {
  try {
    //Get id
    const id = req.params.id;

    const user = await UserModel.findByIdAndRemove(id);
    if (!user) {
      return res.status(500).json({
        message: "Something went wrong!",
      });
    }
    return res.status(200).json({
      message: "User Deleted Successfully!",
      user,
    });
  } catch (error) {
    next(error);
  }
};

//************* LOGIN USER ************/
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //Validation
    if (!email || !password) {
      next("Please Provide All Fields!");
    }
    if (password.length < 6) {
      next("Password length should be greater than 6 character!");
    }

    //Check exist user
    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        message: "Invalid Credentials!",
      });
    }

    //Comapre Password
    const comparePassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!comparePassword) {
      return res.status(400).json({
        message: "Incorrect Password, Please check again!",
      });
    }

    //Login success
    return res.status(200).json({
      message: "Login Successfully!",
      id: existingUser._id,
      existingUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in login user API!",
      error: error.message,
    });
  }
};

//******************* GET ALL MOVIES BOOKING FROM USER ********************/
export const getBookingOfUser = async (req, res, next) => {
  try {
    //Get id
    const userId = req.params.id;

    let bookings = await bookingModel
      .find({ user: userId })
      .populate(["movie", "user"]);
    // let movie = await movieModel.findById(bookings[0].movie);
    // let user = await UserModel.findById(bookings[0].user);

    //Validation
    if (!bookings || bookings.length === 0) {
      return res.status(404).json({
        message: "No Bookings found for this User!",
      });
    }

    return res.status(200).json({
      message: "All Bookings of user Fetched Successfully.",
      totalBookings: bookings.length,
      bookings,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error in get booking api!",
      error: err.message,
    });
  }
};
