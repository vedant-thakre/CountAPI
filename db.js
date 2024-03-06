import mongoose from "mongoose";
import colors from 'colors'

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vedantthakre7:vedant@cluster0.az35crq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("MongoDB Connected".cyan.bold);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};