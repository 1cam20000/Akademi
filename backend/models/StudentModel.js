import mongoose, { Schema } from "mongoose";
import validator from "validator";

const studentSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "firstName is required"],
    },

    lastName: {
      type: String,
      required: [true, "lastName is required"],
    },
    email: {
      type: String,
      required: [true, "email is required and should be unique"],
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email",
        isAsync: false
      },
    },

    password: {
      type: String,
      required: [true, "password is required"],
    },



    dateOfBirth: {
      type: String,
      required: [true, "dateOfBirth is required"],
    },

    parentName: {
      type: String,
      required: [true, "parent name is required "],
    },

    phone: {
      type: String,
      required: [true, "phone is required "],
      unique: true,
    },

    address: {
      type: String,
      required: [true, "address is require"],
    },
    parentEmail: {
      type: String,
      required: [true, "parentEmail is required"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email",
        isAsync: false
      },
    },

    parentPhone: {
      type: String,
      required: [true, "phone is require"],
      unique: true,
    },

    parentAddress: String,

    payment: {
      type: String,
      required: [true, "payment is required"],
    },

    // studentTeacher: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "teacher",
    //   },
    // ],
    // isDelete: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  {
    timestamps: true,
  }
);

const StudentModel = mongoose.model("student", studentSchema);

export default StudentModel;
