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
    extra_discounts:{
        type : Number,
        required:true
    },
    delivery_charges : {
        type : Number,
        required : true
    },
    total_selling_price : {
        type : Number,
        required : true
    },
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
    },]
},{
    timestamps : true
})

const Orders = mongoose.model('orders' , ordersSchema )

export default Orders