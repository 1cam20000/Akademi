import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authMiddleware } from "../middlewares/validateToken.middleware.js";
import { createStudent, findOneStudent } from "../services/student.service.js";

const studentRouter = express.Router();
//register
studentRouter.post("/register", async (req, res) => {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      dateOfBirth,
      parentName,
      phone,
      address,
      parentEmail,
      parentPhone,
      parentAddress,
      payment,
    } = req.body;

    // check if email is already exists
    const emailExisted = await findOneStudent({ email });
    if (emailExisted) {
      return res.status(400).json({ message: "Email already exists" });
    }
    // hash the password
    else {
      //create a new student
      const passwordHash = await bcrypt.hash(
        password,
        parseInt(process.env.HASH) || 10
      );
      const newStudent = await createStudent({
        password: passwordHash,
        email,
        firstName,
        lastName,
        dateOfBirth,
        parentName,
        phone,
        address,
        parentEmail,
        parentPhone,
        parentAddress,
        payment,
      });
      res.json(newStudent);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//login
studentRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("🚀 ~ studentRouter.post ~ req.body:", req.body);
  //tim kiem dang nhap theo email
  const student = await findOneStudent({ email });
  //neu email ton tai
  if (student) {
    console.log("🚀 ~ studentRouter.post ~ student:", student);
    //kiem tra mat khau
    const checkPassword = await bcrypt.compare(password, student.password);
    console.log("🚀 ~ studentRouter.post ~ checkPassword:", checkPassword);
    //neu dung
    if (checkPassword) {
      const {
        email,
        firstName,
        lastName,
        dateOfBirth,
        parentName,
        phone,
        address,
        parentEmail,
        parentPhone,
        parentAddress,
        payment,
        _id,
      } = student;
      // tao payload
      const payload = {
        email,
        firstName,
        lastName,
        dateOfBirth,
        parentName,
        phone,
        address,
        parentEmail,
        parentPhone,
        parentAddress,
        payment,
        _id,
      };
      console.log("🚀 ~ studentRouter.post ~ payload:", payload);
      // tao token
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      //tra ve token cho nguoi dung de goi cac api sau
      res.json(token);
    }
    //neu sai mat khau
    else {
      return res.status(400).json({ message: "password incorrect!" });
    }
  }
  //neu email khong ton tai
  else {
    return res.status(400).json({ message: "email not found!" });
  }
});

export { studentRouter };
