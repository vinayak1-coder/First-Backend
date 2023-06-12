import express from "express";
import { getAllUser, signup, login } from "../controllers/userController.js";
const router = express.Router();
router.get("/users", getAllUser);
router.post("/signup", signup);
router.post("/login", login);
export default router;
