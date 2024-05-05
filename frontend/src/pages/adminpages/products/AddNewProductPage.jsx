import { useState } from "react"
import { useDispatch} from 'react-redux'
import {addNewProduct} from '../../../slices/ProductSlice.js'

const AddNewProductPage = () => {

    const dispatch = useDispatch()

    const [product_category , setCategory ] = useState('')
    const [product_brand , setBrand ] = useState('')
    const [product_name , setName ] = useState('')
    const [_id , setId ] = useState('')
    const [product_quantity , setQuantity ] = useState('')
    const [product_net_quantity , setNetQuantity ] = useState('')
    const [product_distributor , setDistributer ] = useState('')
    const [product_manufacture_date , setManufactureDate ] = useState('')
    const [product_expire_date , setExpireDate ] = useState('')
    const [product_photos , setImage] = useState('')
    const [product_mrp , setMrp ] = useState('')
    const [product_purchase_cost , setPurchaseCost ] = useState('')
    const [product_landing_cost , setLandingCost ] = useState('')
    const [product_price , setPrice ] = useState('')
    const [product_stock , setStock] = useState(0)
    const [product_description , setDescription ] = useState('')
    const [product_highlights , setHighLights ] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()

        const productDetails =  {product_category , product_brand , product_name , _id , product_quantity , product_net_quantity , product_distributor , product_manufacture_date , product_expire_date , product_photos , product_mrp , product_purchase_cost , product_landing_cost , product_price, product_stock , product_description , product_highlights}

        Object.filter = (obj, predicate) => 
            Object.fromEntries(Object.entries(obj).filter(predicate));

        const filteredData = Object.filter(productDetails, ([key, value]) => value !== '');
        dispatch(addNewProduct(filteredData))
    }

    const canSave = true

    const categories = [{id : 1 , name : "apple"},{id : 2 ,name : "orange"} ]
    const categoryOption = categories.map(name =>(
        <option key ={name.id} value={name.name}>
            {name.name}
        </option>
    ))
    const distributers = [{id : 1 , name : "SS agency"},{id : 2 ,name : "Uniliver pvt"} ]
    const distributerOptions = distributers.map(name =>(
        <option key ={name.id} value={name.name}>
            {name.name}
        </option>
    )) 

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="p-6 flex items-center justify-center md:my-10 ">
            <div className="container max-w-screen-lg">
                <div className="bg-gray-50 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div className="grid gap-4 gap-y-2 text-base grid-cols-1 lg:grid-cols-3">
                        <div className="lg:col-span-10">
                            <div className="grid gap-3 gap-y-2 md:gap-5 md:gap-y-5 text-md grid-cols-1 md:grid-cols-10">

                            <div className="md:col-span-2">
                                <label htmlFor="product_category">Category</label>
                                <select name="product_category" value={product_category} onChange={(e)=> setCategory(e.target.value)} required className="select select-bordered w-full mt-1 ">
                                    <option disabled value='' />
                                    {categoryOption}
                                </select>
                            </div>

                            <div className="md:col-span-3 ">
                                <label htmlFor="brand">Brand</label>
                                <input 
                                    type="text" 
                                    name="brand"
                                    id="brand"
                                    autoComplete="off"
                                    value={product_brand}
                                    onChange={(e)=>setBrand(e.target.value)}
                                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    className="input input-bordered w-full mt-1" />
                            </div>

                            <div className="md:col-span-5">
                                <label htmlFor="name">Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    id="name"
                                    autoComplete="off"
                                    required
                                    value={product_name}
                                    onChange={(e)=>setName(e.target.value)}
                                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    className="input input-bordered w-full mt-1" />
                            </div>
                            
                            <div className="md:col-span-3 ">
                                <label htmlFor="id">Id</label>
                                <input 
                                    type="text" 
                                    name="id"
                                    id="id"
                                    autoComplete="off"
                                    required
                                    value={_id}
                                    onChange={(e)=>setId(e.target.value)}
                                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    className="input input-bordered w-full mt-1" />
                            </div>
                            
                            <div className="md:col-span-3 ">
                                <label htmlFor="quantity">Quantity</label>
                                <input 
                                    type="text" 
                                    name="quantity"
                                    id="quantity"
                                    autoComplete="off"
                                    value={product_quantity}
                                    onChange={(e)=>setQuantity(e.target.value)}
                                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    className="input input-bordered w-full mt-1" />
                            </div>

                            <div className="md:col-span-2 ">
                                <label htmlFor="netQuantity">Net Quantity</label>
                                <input 
                                    type="number" 
                                    name="netQuantity"
                                    id="netQuantity"
                                    value={product_net_quantity}
                                    onChange={(e)=>setNetQuantity(e.target.value)}
                                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    className="input input-bordered w-full mt-1" />
                            </div>
                            
                            <div className="md:col-span-2">
                                <label className="form-control w-full ">Distributer</label>
                                <select value={product_distributor} onChange={(e)=>setDistributer(e.target.value)} className="select select-bordered w-full mt-1">
                                    <option disabled value=''/>
                                    {distributerOptions}
                                </select>
                            </div>       

                            <div className="md:col-span-3 ">
                                <label htmlFor="manufactureDate">Manufacture Date</label>
                                <input 
                                    type="date" 
                                    name="manufactureDate"
                                    id="manufactureDate"
                                    value={product_manufacture_date}
                                    onChange={(e)=>setManufactureDate(e.target.value)}
                                    className="input input-bordered w-full mt-1" />
                            </div>
                            
                            <div className="md:col-span-3 ">
                                <label htmlFor="expireDate">Expire Date</label>
                                <input 
                                    type="date" 
                                    name="expireDate"
                                    id="expireDate"
                                    value={product_expire_date}
                                    onChange={(e)=>setExpireDate(e.target.value)}
                                    className="input input-bordered w-full mt-1" />
                            </div>

                            <div className="md:col-span-4 ">
                                <label htmlFor="image">Image</label>
                                <input 
                                    type="file"
                                    name="image"
                                    id="image"
                                    onChange={(e)=>setImage(e.target.files[0])}
                                    className="file-input file-input-bordered w-full mt-1 " />
                            </div>

                            <div className="md:col-span-2 ">
                                <label htmlFor="mrp">Mrp</label>
                                <input 
                                    type="number" 
                                    name="mrp"
                                    id="mrp"
                                    value={product_mrp}
                                    onChange={(e)=>setMrp(e.target.value)}
                                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    className="input input-bordered w-full mt-1" />
                            </div>
                            
                            <div className="md:col-span-2 ">
                                <label htmlFor="purchaseCost">Purchase Cost</label>
                                <input 
                                    type="number"
                                    name="purchaseCost"
                                    id="purchaseCost"
                                    value={product_purchase_cost}
                                    onChange={(e)=>setPurchaseCost(e.target.value)}
                                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    className="input input-bordered w-full mt-1" />
                            </div>

                            <div className="md:col-span-2 ">
                                <label htmlFor="landingCost">Landing Cost</label>
                                <input 
                                    type="number"
                                    name="landingCost"
                                    id="landingCost"
                                    value={product_landing_cost}
                                    onChange={(e)=>setLandingCost(e.target.value)}
                                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    className="input input-bordered w-full mt-1" />
                            </div>

                            <div className="md:col-span-2 ">
                                <label htmlFor="price">Price</label>
                                <input 
                                    type="number" 
                                    name="price"
                                    id="price"
                                    value={product_price}
                                    onChange={(e)=>setPrice(e.target.value)}
                                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    className="input input-bordered w-full mt-1" />
                            </div>
                            
                            <div className="md:col-span-2 ">
                                <label htmlFor="stock">Opening stock</label>
                                <input 
                                    type="number" 
                                    name="stock"
                                    id="stock"
                                    value={product_stock}
                                    onChange={(e)=>setStock(e.target.value)}
                                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    className="input input-bordered w-full mt-1" />
                            </div>

                            <div className="md:col-span-5">
                                <label htmlFor="description">Description</label>
                                <textarea 
                                    name="description" 
                                    id="description"
                                    value={product_description}
                                    onChange={(e)=>setDescription(e.target.value)}
                                    className="textarea textarea-bordered h-full w-full mt-1 resize-none"/>
                            </div>

                            <div className="md:col-span-5 mt-6 md:m-0">
                                <label htmlFor="highlights">Highlights</label>
                                <textarea 
                                    name="highlights" 
                                    id="highlights"
                                    value={product_highlights}
                                    onChange={(e)=>setHighLights(e.target.value)}
                                    className="textarea textarea-bordered h-full w-full mt-1 resize-none"/>
                            </div>

                            <div className="md:col-span-10 mt-10">
                                {!canSave?(
                                    <button className="bg-amber-400 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded-md w-full " disabled>Loading...</button>
                                ):(
                                    <button 
                                        type='submit'
                                        className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded-md w-full" >Submit</button>
                                )
                                } 
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
  )
}

export default AddNewProductPage