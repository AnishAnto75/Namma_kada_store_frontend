import express from "express";
import { createOrders, getOrders , updateOrderStatus } from "../controllers/ordersControllers.js";

const router = express.Router()

router.get('/:id' , getOrders )
router.post('/' , createOrders )
router.put('/:id' , updateOrderStatus)


export default router
