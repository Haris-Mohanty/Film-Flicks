//********** SIGNUP ADMIN *************/
export const signupAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

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
  } catch (error) {
    next(error);
  }
};
