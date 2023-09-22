//************* ADD MOVIES  ************/
export const addMovies = async (req, res, next) => {
  try {
    //Get token and verify
    const token = req.headers.authorization;
    if (!token && token.trim() === "") {
      return res.status(404).send({
        message: "Authorization Failed!",
      });
    }
    console.log(token);
    //
  } catch (err) {
    console.log(err);
  }
};
