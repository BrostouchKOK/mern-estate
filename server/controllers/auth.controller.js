import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // check if email already exist
    const isEmailExist = await User.findOne({ email });
    if (isEmailExist) {
      return res
        .status(400)
        .json({ message: "Email already exists", success: false });
    }

    const hashPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({ username, email, password: hashPassword });
    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
