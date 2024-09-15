import mongoose from "mongoose";

const StudentSchema = mongoose.Schema(
  {
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    parentName: String,
    phone: String,
    address: String,
    parentEmail: String,
    parentPhone: String,
    parentAddress: String,
    payment:String,
    studentTeacher: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "teacher",
      },
    ],
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const StudentModel = mongoose.model("student", StudentSchema);

export { StudentModel, StudentSchema };
