import express from 'express';

import { createSubscribe } from './subscribecontrolls/subscribe_controlls.js';


const Subscriberouter = express.Router();

Subscriberouter.post("/subscribe/create", createSubscribe);
export default Subscriberouter;