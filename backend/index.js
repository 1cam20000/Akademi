import express from "express";
import colors from 'colors';
import connectMongodb from "./config/connectMongodb.js";
import dotenv from 'dotenv';
import studentRoute from "./routes/studentRoute.js";
import morgan from 'morgan';
import cors from 'cors';
import teacherRoute from "./routes/teacherRoute.js";
import classRoute from "./routes/classRoute.js";
//


dotenv.config();
const app = express();




//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());


//routes

//user route
app.use("/api/v1/students", studentRoute);
app.use("/api/v1/teachers", teacherRoute);
app.use("/api/v1/classes", classRoute);



//database connections
// app.use(express.json());
const port = 8080 || process.env.PORT;

connectMongodb().then(() => {
  app.listen(port, (err) => {
    if (err) {
      console.log(`index file error: ${err}`.bgRed);
      return;
    }

    console.log(`Server running at http://localhost:${port}`.bgCyan.white);
  })
});

//

