import express from 'express';
import { Createcategory, Deletecategory, Editcategory, Getallcategory } from './categorycontrols/category_controll.js';
const routeradmincategory = express.Router();
routeradmincategory.post("/category", Createcategory)
routeradmincategory.put("/category/update", Editcategory)
routeradmincategory.delete("/category/delete", Deletecategory);
routeradmincategory.get("/allcategorys", Getallcategory);

export default routeradmincategory;