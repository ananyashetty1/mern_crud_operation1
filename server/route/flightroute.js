import express from 'express';
import {getoneflight,createflight,getallflight,updateFlight,flightDelete} from '../controller/flightcontroller.js';
const route = express.Router();
route.get('/getall',getallflight);
route.post('/create',createflight);

route.get('/getone/:id',getoneflight);
route.put('/update/:id',updateFlight);
route.delete('/delete/:id',flightDelete);

export default route;
