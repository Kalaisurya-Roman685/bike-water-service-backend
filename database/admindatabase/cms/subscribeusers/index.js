import express from 'express';

import { createSubscribe, deleteSubscribe, editSubscribe, getallSubscribe } from './subscribecontrolls/subscribe_controlls.js';


const Subscriberouter = express.Router();

Subscriberouter.post("/subscribe/create", createSubscribe);
Subscriberouter.post("/subscribe/edit", editSubscribe);
Subscriberouter.post("/subscribe/delete", deleteSubscribe);
Subscriberouter.get("/subscribe/all", getallSubscribe);

export default Subscriberouter;