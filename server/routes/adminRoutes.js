import express from "express";
import {
  getAllAdmin,
  loginAdmin,
  signupAdmin,
  getAdminById,
} from "../controllers/adminController.js";

//Router Object
const router = express.Router();

//Signup Admin
router.post("/signup", signupAdmin);

//Login Admin
router.post("/login", loginAdmin);

//Get all admin
router.get("/", getAllAdmin);

//Get admin by id
router.get("/:id", getAdminById);

//Export router
export default router;
