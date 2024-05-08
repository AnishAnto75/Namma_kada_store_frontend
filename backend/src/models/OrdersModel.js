import mongoose from "mongoose";

const ordersSchema = mongoose.Schema({
    user_id : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'User',
        required : true
    },
    total_mrp:{
        type : Number,
        required : true 
    },
    total_price:{
        type : Number,
        required : true
    },
    delivery_charges : {
        type : Number,
        required : true
    },
    total_selling_price : {
        type : Number,
        required : true
    },
    payment_method : {
        type : String ,
        required : true
    },
    delivery_address :{
        city : {
            type : String,
            required : true
        },
        pincode : {
            type : Number ,
            required : true
        },
        address : {
            type : String,
            required : true
        },
        district : {
            type : String,
            required : true
        },
        phone_number : {
            type : Number,
            required : true
        }
    },
    delivery_details : [{
        order_status : {
            type : String,
            enum : {
                values : ['pending' , 'order_confirmed' , 'out_for_delivery' , 'delivered' , 'canceled' ],
                message:  '{VALUE} is not supported' , 
            },
            default: 'pending'
        },
        date : {
            type : Date,
            required : true
        }
    }],
    product_details :[{
        product_id :{
            type : String , 
            ref : 'Products',
            required : true
        },
        product_name : {
            type : String,
            required : true
        } ,
        product_mrp : {
            type : Number,
            required : true
        },
        product_price : {
            type : Number,
            required : true
        },
        product_manufacture_date : {
            type : Date,
            required : true
        },
        product_expire_date : {
            type : Date,
            required : true
        },
        no_of_product : {
            type: Number,
            required : true
        },
    }],
    order_rating : {
        type : Number
    },
    order_review:{
        type : String
    },
},{
    timestamps : true
})

const Orders = mongoose.model('orders' , ordersSchema )

export default Orders