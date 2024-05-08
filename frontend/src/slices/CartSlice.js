import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    products : [],
    product_ids : [],
    productIdAndNo : [],
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

            const products = action.payload.products
            const userCart = action.payload.userCart

            let cartProductsIds = []
            userCart?.map(product=> cartProductsIds.push(product.product_id))

            const cartProduct = products.filter(product => cartProductsIds.includes(product._id))

            let totalMrp = 0
            let totalSellingPrice = 0
            cartProduct.map(product => {
                const no_of_product = userCart?.find((userCart) => userCart.product_id == product._id )
                totalMrp = totalMrp + product.product_mrp * no_of_product.no_of_product
                totalSellingPrice = totalSellingPrice + product.product_price * no_of_product.no_of_product
            })

            const productNo = cartProduct?.map(product => {
                const no_of_product = userCart?.find((userCart) => userCart.product_id == product._id )
                const products = [...Object.entries(product) ,  ['no_of_product' , no_of_product.no_of_product ]]
                return products
            })

            const allProduct = productNo.map((products) => Object.fromEntries(products))

            state.products = allProduct
            state.product_ids = cartProductsIds
            state.productIdAndNo = userCart
            state.totalMrp = totalMrp
            state.totalSellingPrice = totalSellingPrice
            state.discount = state.totalMrp-state.totalSellingPrice
            state.deliveryCharges = state.totalSellingPrice <= 500 ? 120 : 0
            state.totalAmount = state.deliveryCharges+state.totalSellingPrice
            state.totalNoOfProduct = userCart.length
        }
    },
})

export const {addCartProduct} = cartSlice.actions

export const selectAllCartProducts = (state)=> state.cart.products
export const selectCartProductIds = (state)=> state.cart.product_ids
export const selectCartIdAndNo = (state)=> state.cart.productIdAndNo
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

export default cartSlice.reducer