import express from "express";
import { signupAdmin } from "../controllers/adminController.js";

//Router Object
const router = express.Router();

//Signup Admin
router.post("/signup", signupAdmin);

//Login Admin
router.post()

//Export router
export default router;
