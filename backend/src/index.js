import express from 'express'
const app = express()
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productsRoutes.js'
import orderRoutes from './routes/ordersRoutes.js' 
import cartRoutes from './routes/cartRoutes.js'
import adminOrders from './routes/adminOrderRoutes.js'

const PORT = process.env.PORT
const MONGODB_URL = process.env.MONGODB_URL

app.use(express.json())
app.use(cors())

mongoose.connect(MONGODB_URL).then(()=>console.log('Connected to database'))

app.get('/' , (req , res)=>{
    res.send('hi')
})
app.use('/api/product/productImages' , express.static('./public/productImages'))

app.use('/api/user' , userRoutes)
app.use('/api/product' , productRoutes)
app.use('/api/orders' , orderRoutes )
app.use('/api/cart' , cartRoutes  )

app.use('/api/admin/orders' , adminOrders )

app.listen( PORT , ()=>{
    console.log('server is running on port:',PORT)
})
