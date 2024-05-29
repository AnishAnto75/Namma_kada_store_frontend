import User from '../models/UserModel.js'

export const createUser = async(req , res)=>{
    const { email , sub : auth0Id} = req.body

    if (!email || !auth0Id){
        return res.status(400).send({message : 'required all fileds'})
    }

    try {
        const existingUser = await User.findOne({email})
        if (existingUser) {
            console.log('loged in sucessfully')
            return res.status(200).send({message : "Loged In Sucessfully" })
        }

        const newUser = new User({name , email , auth0Id})
        await newUser.save()

        console.log('User created sucessfully')
        return res.status(201).send({message : "Signed Up Sucessfully" })

    } catch (error) {
        console.log(error.message)
        return res.status(400).send({message: error.message})
    }
}

export const getUser = async(req , res)=>{

    const {id : auth0Id} = req.params

    try {
        const user = await User.findOne({auth0Id}).populate('orderDetails.items_in_cart.product_id').populate('orderDetails.orders')
        
        if(!user){
            return res.status(400).send({message : "user not found"})
        }

        console.log("getUserController",user)
        return res.status(200).send({data : user , message : "user found"})
    } catch (error) {
        console.log(error)
        return res.status(400).send({message : "get user failed"})
    }   
}

export const updateUser = async(req , res)=>{

    const body = req.body
    const {id : auth0Id} = req.params

    try {

        const user = await User.findOne({auth0Id})

        if (!user){
            return res.status(400).send({message:"No user found"})
        }

        const updatedUser = await User.findOneAndUpdate({auth0Id} , body , {new : true})

        console.log("updated user : \n",updatedUser)
        const userDetails =await updatedUser.populate('orderDetails.items_in_cart.product_id')

        return res.status(200).send({data : userDetails , message : "User Updated sucessfully"})
    } catch (error) {
        console.error('updateUsercontroller' , error)
        return res.status(400).send({message : "update user failed" , error: error.message })
    }
}

export const getAllUsers = async(req , res)=>{
    try {
        const users = await User.find()

        if(!users){
            return res.status(400).send({error : 'no user found'})
        }

        return res.status(200).send({data : users , message : "users found sucessfully"})

    } catch (error) {
        return res.status(400).send({error : error.message})
    }
}