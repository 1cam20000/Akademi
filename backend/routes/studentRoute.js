import { Router } from 'express';
import { getAllStudents } from '../controllers/StudentController.js';



//router object
const studentRoute = Router();

//routers
//--get all students
studentRoute.post("/get-students", getAllStudents)


//GET-get
//POST-edit
//POST-delete
//POST-Add

export default studentRoute;