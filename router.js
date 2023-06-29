import express from 'express';
import routeradmin from './database/auth/adminauth/index.js';
import routerseller from './database/auth/sellerauth/index.js';
import { MiddlewareCheck } from './middleware/middlewaretoken/Middlewaretoken.js';
import routeradmincategory from './database/admindatabase/categorys/index.js';
import routerallsellers from './database/admindatabase/allsellers/index.js';
import BikeRouter from './database/sellerdatabase/createbikedatabase/index.js';
import approvalshoprouter from './database/admindatabase/shopapprovaladmin/index.js';
import Subscriberouter from './database/admindatabase/cms/subscribeusers/index.js';
import routersellerworkers from './database/sellerdatabase/sellerworksers/index.js';
import { SellerProfileUpdate, SellerProfileget } from './database/auth/sellerauth/sellercontrolls/seller_controlls.js';
import routersample from './database/sellerdatabase/sampleserachdata/index.js';
import comentrouter from './database/sellerdatabase/comments/index.js';
import bikecreaterouter from './database/usersections/bikeusersnew/index.js';
import bikecreaterouternew from './database/usersections/bikecreatenewone/index.js';


const router = express.Router();
// admin
router.use("/auth", routeradmin);
router.use("/admin", MiddlewareCheck, routeradmincategory);
router.use("/admin", MiddlewareCheck, routerallsellers);
router.use("/admin", MiddlewareCheck, approvalshoprouter);

// cms admin
router.use("/admin", MiddlewareCheck, Subscriberouter);





// seller

router.use("/auth", routerseller);
router.post("/profile/update", MiddlewareCheck, SellerProfileUpdate);
router.post("/profile/get", MiddlewareCheck, SellerProfileget);


router.use("/workers", MiddlewareCheck, routersellerworkers);

router.use("/bike", BikeRouter);
router.use("/sample", routersample);
router.use("/comment", comentrouter);

// new apis sample check


router.use("/b", bikecreaterouter)
router.use("/bc",bikecreaterouternew )





// enduser






export default router;