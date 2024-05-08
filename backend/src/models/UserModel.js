import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
    city :{
        type : String,
        trim : true
    },
    pincode : {
        type : Number,
        trim : true
    },
    district : {
        type : String,
        trim : true
    },
    address : {
        type : String,
        trim : true
    }
})

const userSchema = mongoose.Schema({
    user_type :{
        type : String,
        enum : ['user','admin'],
        default: 'user'
    },
    email : {
        type : String,
        required :true,
        immutable : true,
    },
    auth0Id: {
        type : String,
        required : true,
        immutable : true,
    },
    name : {
        type : String ,
        required : true,
        trim : true
    },
    phoneNumber :{
        type : Number,
        trim : true
    },
    address :  addressSchema,
    orderDetails: {
        items_in_cart : [{
            product_id : {
                type : String,
                ref : 'Products'
            },
            no_of_product: {
                type : Number
            }
        }],
        orders : {
            type : [mongoose.SchemaTypes.ObjectId],
            ref : 'Orders'
        }
    }
},{
    timestamps : true ,
}
)

const User = mongoose.model("User" , userSchema)

export default User

