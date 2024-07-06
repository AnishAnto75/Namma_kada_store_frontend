import { Link } from 'react-router-dom';
import { LuUserCircle } from "react-icons/lu";
import { useAuth0 } from '@auth0/auth0-react';
import {useSelector} from 'react-redux'
import { selectUserById, selectUserIds } from '../../slices/UserSlice';
import CartButton from './CartButton';
import { CiLogout } from "react-icons/ci";

const UserNav = () => {
    const {isAuthenticated , loginWithRedirect , logout } = useAuth0()

    const userId = useSelector(selectUserIds)
    const user = useSelector(state => selectUserById(state , userId))

    return ( 
        <>
            {!isAuthenticated ? (
                <button 
                    onClick={()=> loginWithRedirect()}
                    className='text-second rounded-lg py-2 px-2 underline underline-offset-2 hover:shadow-inner hover:shadow-second hover:underline-offset-4 '>
                    Log in
                </button>
                ):(
                <div className='flex justify-end space-x-2 '>

                    <CartButton />

                    <div className="dropdown dropdown-hover dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost flex gap-1 hover:bg-transparent hover:shadow text-content hover:text-third">
                            <LuUserCircle className='text-2xl'/>
                            <span className='text-base'>{user?.name ? user.name.split(' ')[0] : 'User'}</span>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content z-50 border-2 border-gray bg-first rounded-xl w-full min-w-28 ">
                            <li>
                                <Link to={'/user-profile'} className='text-content font-robot p-2 w-full justify-center hover:underline hover:underline-offset-2 hover:bg-transparent hover:text-third'>User Profile</Link>
                            </li>
                            <li>
                                <Link to={'/orders'} className='text-content font-robot p-2 w-full justify-center hover:underline hover:underline-offset-2 hover:bg-transparent hover:text-third'>
                                    Orders
                                </Link>
                            </li>
                            <li className='text-third hero'>
                                <button onClick={()=>logout()} className='text-content font-robot p-2 w-full justify-center hover:underline hover:underline-offset-2 hover:bg-transparent hover:text-third'>
                                    <CiLogout className='text-base mt-1 '/>Log out
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                ) 
            }
        </>
    )
}

export default UserNav