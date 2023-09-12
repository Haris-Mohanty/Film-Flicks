import express from "express";
import { getAllUsers } from "../controllers/userController.js";

//ROUTER OBJECT
const router = express.Router();

//***** CREATE ROUTES *****/
//Get users
router.get("/allusers", getAllUsers);

//Add user
router.post("/")



//EXPORT ROUTER
export default router;
