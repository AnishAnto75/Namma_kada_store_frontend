import express from 'express'
import { addToCart } from '../controllers/cartControllers.js'

const router = express.Router()

router.post('/:id' , addToCart)

export default router