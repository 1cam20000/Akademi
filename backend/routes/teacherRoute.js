import { Router } from 'express';
import { addTeachers, deleteTeachers, getAllTeachers, updateTeachers } from '../controllers/TeacherController.js';

//router object

const teacherRoute = Router();

//router
//--get all teachers
teacherRoute.post("/get-teachers", getAllTeachers)

//--add new students
teacherRoute.post("/add-teachers", addTeachers)

//update
teacherRoute.post("/update-teachers", updateTeachers)

//delete
teacherRoute.post("/delete-teachers", deleteTeachers)

export default teacherRoute

//