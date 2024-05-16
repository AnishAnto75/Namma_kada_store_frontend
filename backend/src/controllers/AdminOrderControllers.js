import Orders from "../models/OrdersModel.js"

export const getAllOrdersController = async(req , res)=>{
    try {
        const orders = await Orders.find()
    
        return res.status(200).send({data : orders , message : `orders found sucessfully`})
    } catch (error) {
        return res.status(400).send({error : 'cant get admin orders'})
    }
}

export const updateOrderStatus = async(req , res)=>{

    try {
        const {id} = req.params
        
        const {order_status , date} = req.body

        if(!order_status || !date){
            return res.status(400).send({error : "missing attributes"})
        }

        const valid =['order_confirmed' , 'out_for_delivery' , 'delivered' , 'canceled' ]
        if(!valid.includes(order_status)){
            return res.status(403).send({error : `${order_status} not valid`})
        }

        const order = await Orders.findOne({_id : id})

        const delivery_details = {order_status , date}
        
        order.delivery_details.push(delivery_details)
        order.save()

        return res.status(200).send({data : order , message : "order status updated sucessfully"})

    } catch (error) {
        return res.status(400).send({error : "error in updateOrderStatus controller"})
    }
}