import express from 'express';
import { AllShopadmin, ApprovalShopadmin, RejectShopadmin } from './shopapprovalcontrolls/shopapprovalcontroll.js';


const approvalshoprouter = express.Router();

approvalshoprouter.put("/approval/shop", ApprovalShopadmin);
approvalshoprouter.put("/rejected/shop", RejectShopadmin);

approvalshoprouter.get("/allshop", AllShopadmin);



export default approvalshoprouter;