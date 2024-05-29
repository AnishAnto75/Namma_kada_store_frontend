import Orders from "../models/OrdersModel.js"
import User from "../models/UserModel.js"

export const createOrders = async(req , res)=>{

    const {user_id , total_mrp , total_price , delivery_charges , total_selling_price , product_details , payment_method , delivery_address , delivery_details } = req.body

    if(!user_id || !total_mrp || !total_price || !String(delivery_charges) || !total_selling_price || !product_details || !payment_method || !delivery_address || !delivery_details){
        return res.status(404).send({error : "required all fields"})
    }

    try {
        const user = await User.findOne({_id : user_id})

        if(!user){
            return res.status(404).send({error : 'user not found' })
        }

        const newOrder = new Orders(req.body)
        await newOrder.save()

        user.orderDetails.orders.push(newOrder._id) 
        user.orderDetails.items_in_cart = []
        user.save()

        return res.status(200).send({data : newOrder , message: "order placed sucessfully"})
    } catch (error) {
        console.log(error)
        return res.status(400).send({error : error.message})
    }
}

export const getOrders = async(req , res)=>{

    const {id : user_id} = req.params
    try {
        const userOrders = await Orders.find({user_id})   

        return res.status(200).send({data : userOrders , message : "userOrders found sucessfully" })

    } catch (error) {
        return res.status(400).send({error : error.message})
    }
}

export const updateOrderStatus = async(req , res)=>{

    try {
        const {id} = req.params
        
        const {date} = req.body

        if(!date){
            return res.status(400).send({error : "missing attributes"})
        }

        const order = await Orders.findOne({_id : id})

        const delivery_details = {order_status : 'canceled' , date}
        
        order.delivery_details.push(delivery_details)
        order.save()

        return res.status(200).send({data : order , message : "order status updated sucessfully"})

    } catch (error) {
        return res.status(400).send({error : "error in updateOrderStatus controller"})
    }
}