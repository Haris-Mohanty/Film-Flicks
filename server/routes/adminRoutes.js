import express from "express";
import { loginAdmin, signupAdmin } from "../controllers/adminController.js";

//Router Object
const router = express.Router();

//Signup Admin
router.post("/signup", signupAdmin);

//Login Admin
router.post("/login", loginAdmin);

//Export router
export default router;
