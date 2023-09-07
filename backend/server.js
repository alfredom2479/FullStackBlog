import 'dotenv/config';
import express from "express";
import errorHandler from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js"
import configRoutes from "./routes/index.js"
import cookieParser from 'cookie-parser';

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
//u might need cookie parser
//u did need it
app.use(cookieParser());


configRoutes(app);

app.use(errorHandler);

app.listen(port, ()=>console.log(`Server started on port ${port}`))
