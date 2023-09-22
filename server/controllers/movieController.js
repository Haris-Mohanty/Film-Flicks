//************* ADD MOVIES  ************/
export const addMovies = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token && token.trim() === "") {
      return res.status(404).send({
        message: "Authorization Failed!",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
