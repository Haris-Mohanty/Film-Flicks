export const signupAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
  } catch (error) {
    next(error);
  }
};
