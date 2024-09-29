import mongoose from "mongoose";
import colors from 'colors';
const connectMongodb = async () => {

  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Server connected to Database ${mongoose.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.log(`Mongodb connect function error: ${error}`.bgRed);
  }
};

export default connectMongodb;
