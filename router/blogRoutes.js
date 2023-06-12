import express from "express";
import {
  getAllBlogs,
  addBlog,
  updateBlog,
  getById,
  deleteblog,
  getByUserId,
} from "../controllers/BlogController.js";
const blogrouter = express.Router();

blogrouter.get("/blog", getAllBlogs);
blogrouter.post("/add", addBlog);
blogrouter.put("/update/:id", updateBlog);
blogrouter.get("/:id", getById);
blogrouter.delete("/:id", deleteblog);
blogrouter.get("/user/:id", getByUserId);

export default blogrouter;
