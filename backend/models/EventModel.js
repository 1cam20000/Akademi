import mongoose, { Schema } from "mongoose";
import validator from "validator";
import moment from 'moment';

const eventSchema = new Schema(
    {
        events: {
            type: String,
            required: [true, "class is required"]
        },

        startDate: {
            type: String,
            required: [true, "Start Date is required"],
        },

        endDate: {
            type: String,
            required: [true, "End Date is required"],
        }
    },
    {
        timestamps: true,
    }
);

const EventsModel = mongoose.model("events", eventSchema);

export default EventsModel;
