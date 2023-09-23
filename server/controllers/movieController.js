import jwt from "jsonwebtoken";
import movieModel from '../models/movieModel.js'

//************* ADD MOVIES  ************/
export const addMovies = async (req, res, next) => {
  try {
    //Get token(bearer token)
    const token = req.headers.authorization.split(" ")[1];
    if (!token && token.trim() === "") {
      return res.status(404).send({
        message: "Authorization Failed!",
      });
    }

    //Verify token
    let adminId;
    //Verification Process
    //1. verify - decrypt token
    //2. store admin id from decrypt token

    jwt.verify(token, process.env.JWT_SECRET, (err, decrypted) => {
      if (err) {
        return res.status(400).send({
          message: `${err.message}`,
        });
      } else {
        adminId = decrypted.id;
        return res.status(200).send({
          adminId: adminId,
        });
      }
    });

    const { title, description, releaseDate, posterUrl, featured } = req.body;

    //Validation
    if (!title || !description || !posterUrl || !featured) {
      return res.status(422).send({
        message: "Please provide all fields!",
      });
    }

    //Create new movie
    const movie = new movieModel()

  } catch (err) {
    console.log(err);
  }
};
