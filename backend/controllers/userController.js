import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User does not exists!" });
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.json({ success: false, message: "Incorrect password!" });
      } else {
        const token = createToken(user._id);
        res.json({ success: true, token: token });
      }
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Something went wrong!" });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Register
const registerUser = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  console.log(name);
  console.log(password);
  console.log(email);
  try {
    // Checking for user exists or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User Already Exists!" });
    }
    //Validating email and strong password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid Email!" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password should be at least 8 characters",
      });
    }

    // Hashing user password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token: token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { loginUser, registerUser };
