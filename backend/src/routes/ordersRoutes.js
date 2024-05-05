import express from "express";
import { createOrders, getAllOrders, getOrders } from "../controllers/ordersControllers.js";

const router = express.Router()

router.get('/:id' , getOrders )
router.get('/' , getAllOrders )
router.post('/' , createOrders )

export default router
