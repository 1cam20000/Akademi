import { Router } from 'express';
import { addStudents, deleteStudents, getAllStudents, updateStudents } from '../controllers/StudentController.js';



//router object
const studentRoute = Router();

//routers
//--get all students
studentRoute.post("/get-students", getAllStudents)
//--add new students
studentRoute.post("/add-students", addStudents)

//POST-update
studentRoute.post("/update-students", updateStudents)
//POST-delete
studentRoute.post("/delete-students", deleteStudents)


export default studentRoute;