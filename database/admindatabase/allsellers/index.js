import express from 'express';
import { AdminApprovalRejectseller, AdminApprovalseller, AllSellerslist } from './controllsellers/allsellers_control.js';

const routerallsellers = express.Router();
routerallsellers.get("/allsellers", AllSellerslist)
routerallsellers.put("/approval/seller", AdminApprovalseller)
routerallsellers.put("/reject/seller", AdminApprovalRejectseller)


export default routerallsellers;