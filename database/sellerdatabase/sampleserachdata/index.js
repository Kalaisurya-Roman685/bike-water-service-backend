import express from "express";
import { Createsample, getallSamples } from "./controlls/sample_controlls.js";


const routersample = express.Router();

routersample.post("/create", Createsample);
routersample.get("/getallsample", getallSamples);



export default routersample;