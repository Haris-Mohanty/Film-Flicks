import express from "express";
import { addUser, getAllUsers } from "../controllers/userController.js";

//ROUTER OBJECT
const router = express.Router();

//***** CREATE ROUTES *****/
//Get users
router.get("/", getAllUsers);

//Add user
router.post("/signup", addUser);

//EXPORT ROUTER
export default router;
