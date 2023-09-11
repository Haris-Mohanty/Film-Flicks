import express from "express";
import { getAllUsers } from "../controllers/userController";

//ROUTER OBJECT
const router = express.Router();

//***** CREATE ROUTES *****/
//Get users
router.get("/", getAllUsers);

//EXPORT ROUTER
export default router;
