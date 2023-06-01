import express from 'express';
import routeradmin from './database/auth/adminauth/index.js';
import routerseller from './database/auth/sellerauth/index.js';
import { MiddlewareCheck } from './middleware/middlewaretoken/Middlewaretoken.js';
import routeradmincategory from './database/admindatabase/categorys/index.js';


const router = express.Router();


// admin
router.use("/auth", routeradmin);
router.use("/admin",MiddlewareCheck,routeradmincategory);

// seller

router.use("/auth", routerseller);

// enduser






export default router;