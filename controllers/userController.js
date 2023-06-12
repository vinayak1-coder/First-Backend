import User from "../model/user.js";
import bcrypt from "bcrypt";
export const getAllUser = async (req, res) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "No found" });
  }
  return res.status(200).json({ users });
};
export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch {
    return console.log(err);
  }
  if (existingUser) {
    return res.status(400).json({ message: "User Already Exists" });
  }
  bcrypt.hash(password, 10, function (err, hash) {
    const user = new User({
      name,
      email,
      password: hash,
      blogs: [],
    });
    try {
      user.save();
    } catch (err) {
      return console.log(err);
    }
    return res.status(201).json({ user });
  });
};
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json({ message: "could not find this email" });
  }
  const isPasswordCorrect = await bcrypt.compare(
    password,
    existingUser.password
  );
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "incorrect password" });
  }
  return res.status(200).json({ message: "Login Successfull" });
};
