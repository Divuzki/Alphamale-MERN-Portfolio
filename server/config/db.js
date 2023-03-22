import mongoose from "mongoose";
import "dotenv/config";
// Connect to db

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.NODE_ENV === "production"
        ? process.env.DB_CONNECTION_URL
        : "mongodb://127.0.0.1:27017/mernapp"
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
