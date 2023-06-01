import express from 'express';
import { Createcategory } from './categorycontrols/category_controll.js';

const routeradmincategory = express.Router();


routeradmincategory.post("/category", Createcategory)
routeradmincategory.put("/category/update", Createcategory)




export default routeradmincategory;