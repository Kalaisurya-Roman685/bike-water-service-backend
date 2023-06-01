import express from "express";
import { AdminLogin, AdminRegister } from "./controlls/admin_controlls.js";


const routeradmin = express.Router();


routeradmin.post("/admin/register", AdminRegister);
routeradmin.post("/admin/login", AdminLogin);



export default routeradmin;