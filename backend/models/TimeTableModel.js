import mongoose, { Schema } from "mongoose";
import validator from "validator";

const timeTableSchema = new Schema(
    {
        class: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'classes',
            required: [true, "class is required"],
        },

        day: {
            type: String,
            required: [true, "day is required"]
        },
        time: {
            type: String,
            required: [true, "time is required"]
        },
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'subject',
            required: [true, "subject is required"]
        }
    },
    {
        timestamps: true,
    }
);

const TimeTableModel = mongoose.model("timetables", timeTableSchema);

export default TimeTableModel;
