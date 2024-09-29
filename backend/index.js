import express from "express";
import colors from 'colors';
import connectMongodb from "./config/connectMongodb.js";
import dotenv from 'dotenv';
import studentRoute from "./routes/studentRoute.js";
//


dotenv.config();
const app = express();

//routes

//user route
app.use("/api/v1/students", studentRoute);



const port = 8080 || process.env.PORT;

//database connections
// app.use(express.json());
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

