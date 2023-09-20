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
    const existingAdmin=
  } catch (error) {
    next(error);
  }
};
