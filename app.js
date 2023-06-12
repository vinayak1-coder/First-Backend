import express, { urlencoded } from "express";
import mongoose from "mongoose";
import router from "./router/userRoutes.js";
import blogrouter from "./router/blogRoutes.js";
const app = express();

app.use(express.json());
app.use(router);
app.use(blogrouter);

//wBywaTuqjEtNlMSr
mongoose
  .connect(
    "mongodb+srv://vinayakpathak0411:wBywaTuqjEtNlMSr@cluster0.4e6cdp3.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));
