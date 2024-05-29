import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUser } from '../../slices/UserSlice'

const CheckoutAddress = ({user}) => {
    const dispatch = useDispatch()
    
    const Address = user?.address

    const [hidden , setHidden] = useState(false)
    const [hidden1 , setHidden1] = useState(false)
    const [name , setName] = useState('')
    const [city , setCity] = useState('')
    const [district , setDistrict] = useState('')
    const [pincode , setPincode] = useState('')    
    const [phoneNumber , setPhoneNumber] = useState('')    
    const [address , setAddress] = useState('')

    const handleRef = useRef(true)

    useEffect(()=>{
        if (user && handleRef.current){
            setName(user.name ? user.name : '')
            setCity(user.address?.city? user.address.city : '')
            setDistrict(user.address?.district? user.address.district : '')
            setPincode(user.address?.pincode? user.address.pincode : '')
            setPhoneNumber(user.phoneNumber ? user.phoneNumber : '')
            setAddress(user.address?.address? user.address.address : '')

            if(!user.address?.city || !user.address?.district || !user.address?.pincode || !user.address?.address || !user.phoneNumber){
                setHidden(true)
                setHidden1(false)
            }

            handleRef.current =false
        }
    },[user , address])

    const handleSubmit = async(e)=>{

        e.preventDefault()

        const userData = {name,  address : { district , pincode , address , city } , phoneNumber  , auth0Id : user.auth0Id  }

        Object.filter = (obj, predicate) => 
            Object.fromEntries(Object.entries(obj).filter(predicate));

        const filteredData = Object.filter(userData, ([key, value]) => value !== '');
        dispatch(updateUser(filteredData))
        setHidden(false)
    }

  return (

    <>
        <div className={`${hidden && 'hidden'} bg-gray p-3 rounded-xl italic text-lite_content mb-1`}>
            <div>{user.name},</div>
            <div>{Address?.address}</div>
            <div>{Address?.pincode} , {Address?.city} ,
            </div>
            <div>{Address?.district} , {user?.phoneNumber},</div>
            <div>{user.email}</div>
            <div className='w-full justify-end text-end pr-5 '>
                <button
                    onClick={()=>{
                        setHidden(true)
                    }}
                    className='px-5 py-1 rounded-full text-white bg-third hover:grayscale'
                    >Edit
                </button>
            </div>
        </div>

        <div className={`${!hidden ? 'hidden' :'block'}`}>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="bg-gray rounded shadow-md p-4 ">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className="lg:col-span-3">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">

                            <div className="md:col-span-3">
                                <label htmlFor="name" className='text-lite_content'>Name <span className='text-second'>*</span></label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    autoComplete="off"
                                    required
                                    value={name} 
                                    onChange={(e)=>setName(e.target.value)}
                                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    className="h-10 border mt-1 rounded px-4 w-full bg-white" />
                            </div>

                            <div className="md:col-span-3">
                                <label htmlFor="city" className='text-lite_content'>City <span className='text-second'>*</span></label>
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

                            <div className="md:col-span-2 ">
                                <label htmlFor="pincode" className='text-lite_content'>Pincode <span className='text-second'>*</span></label>
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

                            <div className="md:col-span-2">
                                <label htmlFor="district" className='text-lite_content'>District <span className='text-second'>*</span></label>
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

                            <div className="md:col-span-2 ">
                                <label htmlFor="phoneNumber" className='text-lite_content'>Phone number <span className='text-second'>*</span></label>
                                <input 
                                    type="number" 
                                    name="phoneNumber" 
                                    id="phoneNumber" 
                                    autoComplete="off"
                                    required
                                    value={phoneNumber} 
                                    onChange={(e)=>setPhoneNumber(e.target.value)}
                                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                    className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-white hide-arrow"/>
                            </div>

                            <div className="md:col-span-6 mb-8">
                                <label htmlFor="address" className='text-lite_content'>Address <span className='text-second'>*</span></label>
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
                                    className="bg-third hover:grayscale text-white font-bold py-2 px-4 rounded w-full " 
                                    >Submit
                                </button>
                            </div>

                            <div className="md:col-span-3">                            
                                <div
                                    onClick={()=>!hidden1 && setHidden(false)}
                                    className={`bg-second text-white font-medium py-2 px-4 rounded w-full text-center ${ hidden1? 'cursor-not-allowed ': 'hover:grayscale hover:cursor-pointer'}`}
                                    >Cancel Edit
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default CheckoutAddress