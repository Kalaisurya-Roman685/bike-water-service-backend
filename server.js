import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import Connect from "./dbconnect/Dbconnect.js";
import router from "./router.js";
dotenv.config();
Connect();
const app = express();
app.use(morgan('dev'));

app.use(cors());
app.use(express.json());

// api sections

app.use("/kalaiBike", router);
app.listen(process?.env?.PORT, () => {
    console.log(`Port Running ${process?.env?.PORT}`);
})