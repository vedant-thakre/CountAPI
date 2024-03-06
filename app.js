import express from 'express';
import colors from 'colors';
import countRoutes from './countRoutes.js'
import { connectDB } from './db.js';
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();
const app = express();
connectDB();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: "https://vedant-thakre.vercel.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);


// Use your routes
app.use('/api/v1', countRoutes);

app.get("/", (req, res) => {
    res.send("Server is Running");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is Live on PORT ${process.env.PORT}`.yellow.bold);
})