import { Router } from 'express';
import { addTimeTable, deleteTimeTable, getAllTimeTables, getTimeTableByClassID, updateTimeTable } from '../controllers/TimeTableController.js';



//router object
const timetableRoute = Router();

//routers
//--get all timetable
timetableRoute.post("/get-timetables", getAllTimeTables)

//--get timetable by class id
timetableRoute.post("/get-timetables-by-class-id", getTimeTableByClassID)

//--add new subject
timetableRoute.post("/add-timetables", addTimeTable)

//--add new subject
timetableRoute.post("/update-timetables", updateTimeTable)

timetableRoute.post("/delete-timetables", deleteTimeTable)



export default timetableRoute;