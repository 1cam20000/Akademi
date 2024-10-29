import { Router } from 'express';
import { addEvents, deleteEvents, getAllEvents, updateEvents } from '../controllers/EventsController.js';



//router object
const eventsRoute = Router();

//routers
//--get all timetable
eventsRoute.post("/get-all-events", getAllEvents)

//--add new subject
eventsRoute.post("/add-events", addEvents)

//--add new subject
eventsRoute.post("/update-events", updateEvents)

eventsRoute.post("/delete-events", deleteEvents)



export default eventsRoute;