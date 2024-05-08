import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, updateUser } from '../../slices/UserSlice'

const CheckoutAddress = () => {
    const dispatch = useDispatch()
    
    const Address = useSelector(selectUser)[0]?.address
    const user = useSelector(selectUser)[0]
    
    const [hidden , setHidden] = useState(false)
    const [city , setCity] = useState('')
    const [district , setDistrict] = useState('')
    const [pincode , setPincode] = useState('')    
    const [address , setAddress] = useState('')
    
    const handleRef = useRef(true)

    useEffect(()=>{
        if (user && handleRef.current){

            setCity(user.address?.city? user.address?.city : '')
            setDistrict(user.address?.district? user.address?.district : '')
            setPincode(user.address?.pincode? user.address?.pincode : '')
            setAddress(user.address?.address? user.address?.address : '')

            handleRef.current =false
        }
    },[user])

    const handleSubmit = async(e)=>{

        e.preventDefault()
        setHidden(false)
        const userData = { address : { district , pincode , address , city } , auth0Id : user.auth0Id  }

        Object.filter = (obj, predicate) => 
            Object.fromEntries(Object.entries(obj).filter(predicate));

        const filteredData = Object.filter(userData, ([key, value]) => value !== '');
        dispatch(updateUser(filteredData))
    }

  return (
    <div className='shadow-sm rounded-md'>

        <div className={hidden ? 'hidden' : 'p-3'}>
            <div>{Address?.address}</div>
            <div>
                <span>{Address?.pincode} , </span>
                <span>{Address?.city} ,</span>
            </div>
            <div>{Address?.district}</div>
            <div className='w-full justify-end text-end pr-5 '>
                <button 
                    onClick={()=>setHidden(true)}
                    className='px-5 py-1 rounded-full text-amber-50 bg-amber-400 hover:bg-amber-500'
                    >
                    Edit
                </button>
            </div>
        </div>

        <div className={!hidden ? 'hidden' : ''}>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="bg-gray-50 rounded shadow-md p-4 ">
                    <div className="grid gap-y- grid-cols-1 lg:grid-cols-3">
                        <div className="lg:col-span-3">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">

                            <div className="md:col-span-6 lg:col-span-2">
                                <label htmlFor="city">City</label>
                                <input 
                                    type="text" 
                                    name="city" 
                                    id="city" 
                                    autoComplete="off"
                                    required
                                    value={city} 
                                    onChange={(e)=>setCity(e.target.value)}
                                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    className="h-10 border mt-1 rounded px-4 w-full bg-white" />
                            </div>

                            <div className="md:col-span-3 lg:col-span-2">
                                <label htmlFor="pincode">Pincode</label>
                                <input 
                                    type="number" 
                                    name="pincode" 
                                    id="pincode" 
                                    autoComplete="off"
                                    required
                                    value={pincode} 
                                    onChange={(e)=>setPincode(e.target.value)}
                                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-white hide-arrow"/>
                            </div>

                            <div className="md:col-span-3 lg:col-span-2">
                                <label htmlFor="district">District</label>
                                <input 
                                    type='text'
                                    name="district" 
                                    id="district" 
                                    autoComplete="off"
                                    required
                                    value={district} 
                                    onChange={(e)=>setDistrict(e.target.value)}
                                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-white" />
                            </div>

                            <div className="md:col-span-6 mb-8">
                                <label htmlFor="address">Address</label>
                                <textarea 
                                    name="address" 
                                    id="address"
                                    value={address} 
                                    required
                                    onChange={(e)=>setAddress(e.target.value)}
                                    className="transition-all h-full w-full border px-4 bg-white mt-1 py-2 rounded resize-none"  
                                    />
                            </div>

                            <div className="md:col-span-3">                            
                                <button 
                                    type='submit'
                                    className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded w-full" 
                                    >Submit
                                </button>
                            </div>

                            <div className="md:col-span-3">                            
                                <div
                                    onClick={()=>setHidden(false)}
                                    className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded w-full text-center cursor-pointer" 
                                    >cancel Edit
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    </div>
  )
}

export default CheckoutAddress