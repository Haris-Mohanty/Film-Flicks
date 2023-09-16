import express from "express";
import {
  addUser,
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
router.delete()

//EXPORT ROUTER
export default router;
