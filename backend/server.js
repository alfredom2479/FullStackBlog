import 'dotenv/config';
import express from "express";
import errorHandler from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js"
import configRoutes from "./routes/index.js"

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
//u might need cookie parser


configRoutes(app);

app.use(errorHandler);

app.listen(port, ()=>console.log(`Server started on port ${port}`))
