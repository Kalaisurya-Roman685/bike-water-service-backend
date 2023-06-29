import express from "express";
import { SellerLogin, SellerProfileUpdate, SellerProfileget, SellerRegister } from "./sellercontrolls/seller_controlls.js";

const routerseller = express.Router();
routerseller.post("/seller/register", SellerRegister);
routerseller.post("/seller/login", SellerLogin);
routerseller.post("/seller/get", SellerProfileget);





export default routerseller;