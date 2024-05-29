import express from 'express'
import { createProduct, getAllProducts, getProduct, updateProduct , searchProducts } from '../controllers/productsControllers.js'
import upload from '../middleware/productImageUpload.js'

const router = express.Router()

router.get('/' , getAllProducts)
router.get('/:id' , getProduct)
router.post('/' , upload.single('product_photos') , createProduct)
router.put('/:id' ,upload.single('product_photos') , updateProduct)
router.get('/search/q' , searchProducts)


export default router