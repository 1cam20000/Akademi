import { handleValidationError } from "../middlewares/errorHandler.js";
import EventsModel from "../models/EventModel.js";

const getAllEvents = async (req, res) => {

    try {
        // const { events, startDate, endDate } = req.body
        const getEvents = await EventsModel.find({})

        res.status(200).json({
            message: "Get all events successfully ",
            data: getEvents

        })
    } catch (error) {
        res.status(400).json({
            message: `Get all events controller error: ${error.message}`
        })
    }
}

const addEvents = async (req, res) => {

    const { events, startDate, endDate } = req.body
    try {


        const newEvents = new EventsModel({ events, startDate, endDate })

        await newEvents.save()

        res.status(201).json({
            message: "Add new events successfully!",
            data: {
                _id: newEvents._id,
            },
        });

    } catch (error) {
        res.status(400).json({
            message: `Add events controller error: ${error.message}`,
        });
    }
}

const deleteEvents = async (req, res) => {

    try {
        await EventsModel.findOneAndDelete({ _id: req.body.eventsId, })
        res.status(201).json({
            message: "Delete events successfully"
        })

    } catch (error) {
        res.status(400).json({
            message: `Delete events controller error: ${error.message}`,
        });
    }
}


const updateEvents = async (req, res) => {

    try {
        await EventsModel.findOneAndUpdate(
            {
                _id: req.body.eventsId
            },
            req.body.payload
        )
        res.status(201).json({
            message: "Update events information successfully"
        })

    } catch (error) {
        res.status(400).json({
            message: `Update events controller error: ${error.message}`,
        });
    }
}

export { getAllEvents, addEvents, deleteEvents, updateEvents }