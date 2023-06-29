import express from 'express';
import { BikeCreatenewone, getBikeCreate } from './bikecreatenewone/bikecreatenewone.js';



const bikecreaterouternew = express.Router();

bikecreaterouternew.post("/create", BikeCreatenewone);
bikecreaterouternew.post("/get", getBikeCreate);



export default bikecreaterouternew;