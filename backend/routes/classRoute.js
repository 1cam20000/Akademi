import { Router } from 'express';
import { addClasses, deleteClasses, getAllClasses } from '../controllers/ClassController.js';



//router object
const classRoute = Router();

//routers
//--get all classes
classRoute.post("/get-classes", getAllClasses)
//--add new classes
classRoute.post("/add-classes", addClasses)

//POST-delete
classRoute.post("/delete-classes", deleteClasses)


export default classRoute;