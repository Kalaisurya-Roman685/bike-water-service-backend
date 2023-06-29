import express from "express";
import { Allworkers, Allworkerslist, Deleteworkers, Editworkers, Singleworkers } from "./controlls/seller_worker_controlls.js";
import { AllSellerslist } from "../../admindatabase/allsellers/controllsellers/allsellers_control.js";


const routersellerworkers = express.Router();
routersellerworkers.post("/create", Allworkers);
routersellerworkers.put("/edit", Editworkers);
routersellerworkers.post("/single", Singleworkers);
routersellerworkers.post("/allworkers", Allworkerslist);
routersellerworkers.post("/delete/worker", Deleteworkers);





export default routersellerworkers;