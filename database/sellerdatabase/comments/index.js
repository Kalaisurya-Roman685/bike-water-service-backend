import express, { Router } from 'express';
import { createComment, getcomments } from './controllcoments/controlcomment.js';


const comentrouter=express.Router();

comentrouter.post("/create",createComment)
comentrouter.post("/get",getcomments)



export default comentrouter;