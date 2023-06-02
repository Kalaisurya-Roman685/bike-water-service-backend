import express from 'express';
import { BikeAllshops, BikeCreate, BikeEdit } from './bikecontrolls/bike_controll.js';



const BikeRouter = express.Router();

BikeRouter.post("/seller/create", BikeCreate);
BikeRouter.put("/seller/update", BikeEdit);
BikeRouter.get("/seller/allbikesshop", BikeAllshops);




export default BikeRouter;