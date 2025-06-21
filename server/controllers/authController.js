import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

//REGISTER FUNCTION
export async function register(req, res) {
  try {
    const { name, phone, password, user_type } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.createUser({
      name,
      phone,
      password: hashedPassword,
      user_type,
    });

    //jwt.sign(payload, secretKey);
    const token = jwt.sign(
      { id: user.id, name: user, name, user_type: user.user_type },
      process.env.JWT_SECRET,
      { expiresIn: "3h" }
    );

    res.status(201).json({
      message: "User registered successfully",
      token,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error registering user",
      error: err.message,
    });
  }
}

//LOGIN FUNCTION
export async function login(req, res) {
  try {
    const { phone, password } = req.body;
    const user = await userModel.findUserByPhone(phone);

    if (!user) return res.status(401).json({ error: "User not found" });

    const matchPass = await bcrypt.compare(password, user.password);
    if (!matchPass) return res.status(401).json({ error: "invaild password" });

    const token = jwt.sign(
      { id: user.id, name: user.name, user_type: user.user_type },
      process.env.JWT_SECRET,
      { expiresIn: "3h" }
    );

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({
      message: "Error logging in",
      error: err.message,
    });
  }
}
