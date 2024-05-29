import User from "../models/UserModel.js"

export const addToCart = async(req , res)=>{

    try {
        const body = req.body
        const {id : _id} = req.params

        if(!body.product_id || body.no_of_product !=0 && !body.no_of_product){
            return res.status(404).send({error : "please fill the required fields"})
        }

        const user =  await User.findOne({_id})

        if(!user){
            return res.status(400).send({error : "User Not Found"})
        }

        const items_in_cart = user.orderDetails.items_in_cart.find((product)=> product.product_id == body.product_id)
        if(items_in_cart){
            try {
                if(body.no_of_product <= 0 ){
                    try {   
                        const data = user.orderDetails.items_in_cart.filter((product)=> product.product_id != body.product_id )
                        user.orderDetails.items_in_cart = data
                        user.save()
                        
                        const populatedCart =await user.populate('orderDetails.items_in_cart.product_id')
                        return res.status(200).send({data : populatedCart , message: "product removed sucessfully"})
                    } catch (error){
                        console.log('aa' ,error)
                        return res.status(400).send({error : error.message})
                    }
                }
                
                user.orderDetails.items_in_cart.map((product)=> product.product_id == body.product_id ? product.no_of_product = body.no_of_product : product)
                user.save()
                
                const populatedCart =await user.populate('orderDetails.items_in_cart.product_id')
                
                return res.status(200).send({data : populatedCart , message: "product updated sucessfully"})
            } catch (error) {
                console.log('aa' ,error)
                return res.status(400).send({error : error.message})
            }
        }

        user.orderDetails.items_in_cart.push(body)
        user.save()

        const populatedCart =await user.populate('orderDetails.items_in_cart.product_id')

        return res.status(200).send({data : populatedCart , message : `Item added to cart sucessfully`})

    } catch (error) {
        console.log('aa' ,error)
        return res.status(400).send({error : error.message})
    }
}
