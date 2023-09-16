import express from "express";
import {
  addUser,
  deleteUser,
  getAllUsers,
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

//EXPORT ROUTER
export default router;
