import {useDispatch, useSelector} from 'react-redux'
import { getUserStatus, selectUser, updateUser } from '../slices/UserSlice';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfilePage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userStatus = useSelector(getUserStatus)
    const user = useSelector(selectUser)[0]

    const [name , setName] = useState('')
    const [phoneNumber , setPhoneNumber] = useState('')
    const [city , setCity] = useState('')
    const [district , setDistrict] = useState('')
    const [pincode , setPincode] = useState('')    
    const [address , setAddress] = useState('')

    const handleRef = useRef(true)
    useEffect(()=>{
        if (user && handleRef.current){

            setName(user.name? user.name : '')
            setPhoneNumber(user.phoneNumber? user.phoneNumber : '')
            setCity(user.address?.city? user.address?.city : '')
            setDistrict(user.address?.district? user.address?.district : '')
            setPincode(user.address?.pincode? user.address?.pincode : '')
            setAddress(user.address?.address? user.address?.address : '')

            handleRef.current =false
        }
    },[user])

    const handleSubmit = async(e)=>{

        e.preventDefault()
        const userData = {name , phoneNumber , address : { district , pincode , address , city } , auth0Id : user.auth0Id  }

        Object.filter = (obj, predicate) => 
            Object.fromEntries(Object.entries(obj).filter(predicate));

        const filteredData = Object.filter(userData, ([key, value]) => value !== '');
        dispatch(updateUser(filteredData))
        navigate('/')
    }

    const canSave = user && userStatus == 'idle' || userStatus == "suceeded" 

    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="min-h-full p-6 flex items-center justify-center xl:my-10 lg:my-10">
                <div className="container max-w-screen-lg mx-auto">
                    <div className="bg-gray-50 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <div className="grid gap-4 gap-y-2 text-base grid-cols-1 lg:grid-cols-3">
                            <div className='space-y-2'>
                                <p className="text-amber-500 text-xl">User profile</p>
                                <p className='text-gray-600 text-sm'>Please fill out all the fields before placing your order.</p>
                                <div className='divider'/>
                            </div>
                            <div className="lg:col-span-2">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">

                                <div className="md:col-span-5">
                                    <label htmlFor="email">Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        autoComplete="off"
                                        placeholder={user?.email}
                                        disabled
                                        className="h-10 border mt-1 rounded px-4 w-full bg-white placeholder:text-black" />
                                </div>

                                <div className="md:col-span-3">
                                    <label htmlFor="name">Full Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        id="name"
                                        required
                                        autoComplete="off"
                                        value={name}
                                        onChange={(e)=>setName(e.target.value)}
                                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                        className="h-10 border mt-1 rounded px-4 w-full bg-white" />
                                </div>

                                <div className="md:col-span-2">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input 
                                        type="number" 
                                        name="phoneNumber" 
                                        id="phoneNumber"
                                        value={phoneNumber} 
                                        onChange={(e)=>setPhoneNumber(e.target.value)}
                                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                        className="h-10 border mt-1 rounded px-4 w-full bg-white" />
                                </div>

                                <div className="md:col-span-2">
                                    <label htmlFor="city">City</label>
                                    <input 
                                        type="text" 
                                        name="city" 
                                        id="city" 
                                        autoComplete="off"
                                        value={city} 
                                        onChange={(e)=>setCity(e.target.value)}
                                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                        className="h-10 border mt-1 rounded px-4 w-full bg-white" />
                                </div>

                                <div className="md:col-span-1">
                                    <label htmlFor="pincode">Pincode</label>
                                    <input 
                                        type="number" 
                                        name="pincode" 
                                        id="pincode" 
                                        autoComplete="off"
                                        value={pincode} 
                                        onChange={(e)=>setPincode(e.target.value)}
                                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                        className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-white"/>
                                </div>

                                <div className="md:col-span-2">
                                    <label htmlFor="district">District</label>
                                    <input 
                                        type='text'
                                        name="district" 
                                        id="district" 
                                        autoComplete="off"
                                        value={district} 
                                        onChange={(e)=>setDistrict(e.target.value)}
                                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                        className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-white" />
                                </div>


                                <div className="md:col-span-5 mb-8">
                                    <label htmlFor="address">Address</label>
                                    <textarea 
                                        name="address" 
                                        id="address"
                                        value={address} 
                                        onChange={(e)=>setAddress(e.target.value)}
                                        className="appearance-none h-full w-full bg-transparent border px-4 bg-white mt-1 py-2"  
                                        />
                                </div>

                                <div className="md:col-span-5">
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

export default UserProfilePage