import express from "express";
import { SellerLogin, SellerRegister } from "./sellercontrolls/seller_controlls.js";

const routerseller = express.Router();
routerseller.post("/seller/register", SellerRegister);
routerseller.post("/seller/login", SellerLogin);


export default routerseller;