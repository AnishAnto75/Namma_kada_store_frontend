import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    products : [],
    totalMrp : 0,
    totalSellingPrice : 0,
    discount : 0,
    deliveryCharges : 0,
    totalAmount : 0,
    totalNoOfProduct : 0
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers:{
        addCartProduct : (state , action)=>{

            const userCart = action.payload.userCart

            let totalMrp = 0
            let totalSellingPrice = 0
            userCart.map(product => {
                totalMrp = totalMrp + product.product_id.product_mrp * product.no_of_product
                totalSellingPrice = totalSellingPrice + product.product_id.product_price * product.no_of_product
            })

            const productNo = userCart?.map(product => {
                const products = [...Object.entries(product.product_id) ,  ['no_of_product' , product.no_of_product ]]
                return products
            })

            const allProduct = productNo.map((products) => Object.fromEntries(products))

            state.products = allProduct
            state.totalMrp = totalMrp
            state.totalSellingPrice = totalSellingPrice
            state.discount = state.totalMrp-state.totalSellingPrice
            state.deliveryCharges = state.totalSellingPrice <= 500 ? 120 : 0
            state.totalAmount = state.deliveryCharges+state.totalSellingPrice
            state.totalNoOfProduct = userCart.length
        },
        removeCart : (state)=>{
            state.products = []
            state.productIdAndNo = []
            state.totalMrp = 0
            state.totalSellingPrice = 0
            state.discount = 0
            state.deliveryCharges = 0
            state.totalAmount = 0
            state.totalNoOfProduct = 0
        }
    },
})

export const {addCartProduct , removeCart} = cartSlice.actions

export const selectAllCartProducts = (state)=> state.cart.products
export const selectTotalMrp = (state)=> state.cart.totalMrp
export const selectTotalSellingPrice = (state)=> state.cart.totalSellingPrice
export const selectCartDiscount = (state)=> state.cart.discount
export const selectCartDeliveryCharges = (state)=> state.cart.deliveryCharges
export const selectCartTotalAmount = (state)=> state.cart.totalAmount
export const selectTotalNoOfProduts = (state)=> state.cart.totalNoOfProduct
export const selectTotalMrpOfProduct = (state , id) =>{
    const user = state.cart.products?.find(product =>  product._id == id)
    const mrp = user?.product_mrp * user?.no_of_product 
    return mrp
}
export const selectTotalPriceOfProduct = (state , id) =>{
    const user = state.cart.products?.find(product =>  product._id == id)
    const price = user.product_price * user.no_of_product 
    return price
}

export const selectCartProductById = (state , id)=>{
    const products = state.cart.products.find(product => product._id == id)
    return products
}

export default cartSlice.reducer