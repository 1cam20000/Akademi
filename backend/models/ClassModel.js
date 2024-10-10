import mongoose, { Schema } from "mongoose";
import validator from "validator";

const classSchema = new Schema(
    {
        grade: {
            type: String,
            required: [true, "grade is required"],
            unique: true,
        },

    },
    {
        timestamps: true,
    }
);

const ClassModel = mongoose.model("class", classSchema);

export default ClassModel;
