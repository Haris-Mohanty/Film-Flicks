import express from "express";
import {
  addUser,
  deleteUser,
  getAllUsers,
  login,
  updateUser,
} from "../controllers/userController.js";

//ROUTER OBJECT
const router = express.Router();

//***** CREATE ROUTES *****/
//Get users
router.get("/", getAllUsers);

//Add user
router.post("/signup", addUser);

//Update user
router.put("/:id", updateUser);

//Delete User
router.delete("/:id", deleteUser);

//Login User
router.post("/login", login);

//Get all movie bookings of user
router.get("/bookings")

//EXPORT ROUTER
export default router;
