import express from "express";
import { connectMongodb } from "./database/connectMongodb.js";

//

const app = express();

//

app.use(express.json());
connectMongodb();

//
const port = 8888;
app.listen(
  port,
  console.log(`🚀 ~ PORT:${port}; running at http://localhost:${port} `)
);
