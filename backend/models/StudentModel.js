import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "email is required and should be unique"],
      unique: true,
    },

    // password: {
    //   type: String,
    //   required: [true, "password is required"],
    // },

    firstName: {
      type: String,
      required: [true, "firstName is required"],
    },

    lastName: {
      type: String,
      required: [true, "lastName is required"],
    },

    // dateOfBirth: {
    //   type: String,
    //   required: [true, "dateOfBirth is required"],
    // },

    // parentName: {
    //   type: String,
    // },

    // phone: {
    //   type: String,
    //   required: [true, "phone is required "],
    // },

    // address: {
    //   type: String,
    //   required: [true, "address is require"],
    // },
    // parentEmail: {
    //   type: String,
    //   required: [true, "parentEmail is required"],
    // },

    // parentPhone: {
    //   type: String,
    //   required: [true, "phone is require"],
    // },

    // parentAddress: String,

    // payment: {
    //   type: String,
    //   required: [true, "payment is required"],
    // },

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
