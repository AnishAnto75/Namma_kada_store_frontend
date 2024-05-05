import { Link } from 'react-router-dom';
import { LuUserCircle } from "react-icons/lu";
import { useAuth0 } from '@auth0/auth0-react';
import {useSelector} from 'react-redux'
import { selectUserById, selectUserIds } from '../../../slices/UserSlice.js';

const AdminDesktopNav = () => {
    const {isAuthenticated , loginWithRedirect , logout } = useAuth0()

    const userId = useSelector(selectUserIds)
    const user = useSelector(state => selectUserById(state , userId))

    return ( 
        <>
            {!isAuthenticated ? (
                <button 
                    onClick={()=> loginWithRedirect()}
                    className='text-amber-700 rounded-xl border-2 p-2 hover:border-amber-400 hover:text-black'>
                    Log in
                </button>
                ):(
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost flex hover:bg-transparent hover:text-amber-500">
                        <LuUserCircle className='text-2xl'/>
                        <span className='text-base italic font-serif'>Admin</span>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow-lg bg-slate-50 rounded-lg w-32">
                        <li className='hover:text-amber-500'>
                            <Link to={'/user-profile'} className='w-full justify-center'>User Profile</Link>
                        </li>
                        <div className='divider m-0'></div>
                        <li className='hover:text-amber-500'>
                            <Link to={'/admin/products'} className='w-full justify-center'>Product</Link>
                        </li>
                        <div className='divider m-0'></div>
                        <li className='hover:text-amber-500'>
                            <button onClick={()=>logout()} className='w-full justify-center'>Log out</button>
                        </li>
                    </ul>
                </div>
                ) 
            }
        </>
    )
}

export default AdminDesktopNav