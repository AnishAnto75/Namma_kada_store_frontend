import React, { useEffect, useRef, useState } from 'react'
import AdminProductsList from '../../../components/Admin/Admin_products/AdminProductsList'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductStatus, selectProductById, updateProduct } from '../../../slices/ProductSlice'
import { format } from "date-fns";

const AdminProductViewPage = () => {

    const dispatch = useDispatch()
    const {id} = useParams()
    
    const product = useSelector(state => selectProductById(state , id))
    const productStatus = useSelector(getProductStatus) 

    const PRODUCT_IMAGE_URL = `${import.meta.env.VITE_PRODUCT_IMAGE_URL}/${product?.product_photos}`

    const canSave = true

    const [product_group , setGroup ] = useState('')
    const [product_category , setCategory ] = useState('')
    const [product_brand , setBrand ] = useState('')
    const [product_name , setName ] = useState('')
    const [_id , setId ] = useState('')
    const [product_quantity , setQuantity ] = useState('')
    const [product_net_quantity , setNetQuantity ] = useState('')
    const [product_distributor , setDistributer ] = useState('')
    const [product_manufacture_date , setManufactureDate ] = useState('')
    const [product_expire_date , setExpireDate ] = useState('')
    const [product_photos , setPhotos] = useState('')
    const [product_mrp , setMrp ] = useState('')
    const [product_purchase_cost , setPurchaseCost ] = useState('')
    const [product_landing_cost , setLandingCost ] = useState('')
    const [product_price , setPrice ] = useState('')
    const [product_stock , setStock] = useState(0)
    const [product_description , setDescription ] = useState('')
    const [product_highlights , setHighLights ] = useState('')

    useEffect(()=>{
        if(product){
            setGroup(product.product_group? product.product_group : '')
            setCategory(product.product_category? product.product_category : '')
            setBrand(product.product_brand? product.product_brand : '')
            setName(product.product_name? product.product_name : '')
            setId(product._id? product._id : '')
            setQuantity(product.product_quantity? product.product_quantity : '')
            setNetQuantity(product.product_net_quantity? product.product_net_quantity : '')
            setDistributer(product.product_distributor? product.product_distributor : '')
            setManufactureDate(product.product_manufacture_date? format(new Date(product.product_manufacture_date), "yyyy-MM-dd") : '')
            setExpireDate(product.product_expire_date? format(new Date(product.product_expire_date), "yyyy-MM-dd") : '')
            setPhotos(product.product_photos? product.product_photos : '')
            setMrp(product.product_mrp? product.product_mrp : '')
            setPurchaseCost(product.product_purchase_cost? product.product_purchase_cost : '')
            setLandingCost(product.product_landing_cost? product.product_landing_cost : '')
            setPrice(product.product_price? product.product_price : '')
            setStock(product.product_stock? product.product_stock : '')
            setDescription(product.product_description? product.product_description : '')
            setHighLights(product.product_highlights? product.product_highlights : '')           
        }
    } , [product , productStatus])

    const handleSubmit = (e)=>{
        e.preventDefault()
        const productDetails =  {product_group , product_category , product_brand , product_name , _id , product_quantity , product_net_quantity , product_distributor , product_manufacture_date , product_expire_date , product_photos , product_mrp , product_purchase_cost , product_landing_cost , product_price, product_stock , product_description , product_highlights}
        
        Object.filter = (obj, predicate) => 
        Object.fromEntries(Object.entries(obj).filter(predicate));
        
        const data = Object.filter(productDetails, ([key, value]) => value !== '');
        
        
        dispatch(updateProduct({id , data}))
    }

    const group = [{id : 1 , name : "baby products"},{id : 2 ,name : "steel"} ]
    const groupOptions = group.map(name =>(
        <option key ={name.id} value={name.name}>
            {name.name}
        </option>
    ))
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
    <div className='md:flex'>
        <div className='hidden md:block'>
            <AdminProductsList />
        </div>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="p-6 flex items-center justify-center  ">
            <div className="container">
                <div className="bg-gray-50 rounded shadow-lg p-4 ">
                    <div className="grid gap-4 gap-y-2 text-base grid-cols-1 lg:grid-cols-3">
                        <div className="lg:col-span-10">
                            <div className="grid gap-3 gap-y-2 md:gap-5 md:gap-y-5 text-md grid-cols-1 md:grid-cols-10">

                            <div className="md:col-span-2">
                                <label>Group</label>
                                <select value={product_group} onChange={(e)=> setGroup(e.target.value)} required className="select select-bordered w-full mt-1 ">
                                    <option disabled value='' />
                                    {groupOptions}
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label>Category</label>
                                <select value={product_category} onChange={(e)=> setCategory(e.target.value)} disabled={!product_group} required className="select select-bordered w-full mt-1 ">
                                    <option disabled value='' />
                                    {categoryOption}
                                </select>
                            </div>

                            <div className="md:col-span-2 ">
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

                            <div className="md:col-span-4">
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
                                    onChange={(e)=>setId((e.target.value).toUpperCase().trim())}
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
                                    onChange={(e)=>setQuantity((e.target.value).trim())}
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
                                    accept="image/png, image/jpeg"
                                    onChange={(e)=>setPhotos(e.target.files[0])}
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

                            <div className="md:col-span-3">
                                <label htmlFor="description">Description</label>
                                <textarea 
                                    name="description" 
                                    id="description"
                                    value={product_description}
                                    onChange={(e)=>setDescription(e.target.value)}
                                    className="textarea textarea-bordered h-full w-full mt-1 resize-none"/>
                            </div>

                            <div className="md:col-span-3 mt-6 md:m-0">
                                <label htmlFor="highlights">Highlights</label>
                                <textarea 
                                    name="highlights" 
                                    id="highlights"
                                    value={product_highlights}
                                    onChange={(e)=>setHighLights(e.target.value)}
                                    className="textarea textarea-bordered h-full w-full mt-1 resize-none"/>
                            </div>
                            <div className="md:col-span-4 w-full mt-6 md:mt-0">
                                <label>Product Image</label>
                                <a href={PRODUCT_IMAGE_URL} target='blank'>
                                    <img src={PRODUCT_IMAGE_URL} alt="No product image" className='w-full h-full mt-1' />
                                </a>
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
    </div>
  )
}

export default AdminProductViewPage