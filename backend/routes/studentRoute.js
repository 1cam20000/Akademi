import { Router } from 'express';
import { addStudent, getAllStudents } from '../controllers/StudentController.js';



//router object
const studentRoute = Router();

//routers
//--get all students
studentRoute.post("/get-students", getAllStudents)
//--add new students
studentRoute.post("/add-students", addStudent)
//GET-get
//POST-edit
//POST-delete
//POST-Add

export default studentRoute;