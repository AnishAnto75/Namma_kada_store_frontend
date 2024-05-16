import express from 'express'
import { getAllOrdersController, updateOrderStatus } from '../controllers/AdminOrderControllers.js'

const router = express.Router()

router.get('/' , getAllOrdersController)
router.put('/:id' , updateOrderStatus)

export default router