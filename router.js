import express from 'express';
import routeradmin from './database/auth/adminauth/index.js';
import routerseller from './database/auth/sellerauth/index.js';
import { MiddlewareCheck } from './middleware/middlewaretoken/Middlewaretoken.js';
import routeradmincategory from './database/admindatabase/categorys/index.js';
import routerallsellers from './database/admindatabase/allsellers/index.js';
import BikeRouter from './database/sellerdatabase/createbikedatabase/index.js';
import approvalshoprouter from './database/admindatabase/shopapprovaladmin/index.js';
import Subscriberouter from './database/admindatabase/cms/subscribeusers/index.js';


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
router.use("/bike", MiddlewareCheck, BikeRouter);


// enduser






export default router;