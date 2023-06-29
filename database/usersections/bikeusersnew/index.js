import express from 'express';
import { createBikeuser, getBikeuser } from './bikecontrollsnew/bikecontrollsnew.js';


const bikecreaterouter = express.Router();

bikecreaterouter.post("/create", createBikeuser)
bikecreaterouter.post("/gets", getBikeuser)



export default bikecreaterouter;