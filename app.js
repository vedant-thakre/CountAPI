import express from 'express';
import colors from 'colors';
import countRoutes from './countRoutes.js'
import { connectDB } from './db.js';
import cors from "cors";

const app = express();
connectDB();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://your-allowed-origin.com", 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);


// Use your routes
app.use('/api/v1', countRoutes);

app.get("/", (req, res) => {
    res.send("Server is Running");
});

app.listen(8080, () => {
    console.log("Server is Live on PORT 8080".yellow.bold);
})