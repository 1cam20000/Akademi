import mongoose from "mongoose";

const TeacherSchema = mongoose.Schema(
  {
    email: {
      type: datatypes.string(20),
      required: [true, "email is required and should be unique"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "password is required"],
    },

    firstName: {
      type: String,
      required: [true, "firstName is required"],
    },

    lastName: {
      type: String,
      required: [true, "lastName is required"],
    },
    phone: {
      type: String,
      required: [true, "phone is required "],
    },

    address: {
      type: String,
      required: [true, "address is require"],
    },
    photo: String,
    dateOfBirth: {
      type: String,
      required: [true, "dateOfBirth is required"],
    },
    placeOfBirth: String,
    university: {
      type: String,
      required: [true, "university is required"],
    },
    degree: {
      type: String,
      required: [true, "degree is required"],
    },
    startEndDate: String,
    city: String,
    teacherStudent: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const TeacherModel = mongoose.model("teacher", TeacherSchema);

export { TeacherModel, TeacherSchema };
