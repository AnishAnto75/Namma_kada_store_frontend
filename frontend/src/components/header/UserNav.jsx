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
                <div className='flex justify-end space-x-2'>

                    <CartButton />

                    <div className="dropdown dropdown-hover dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost flex hover:bg-white hover:shadow-inner hover:shadow-second">
                                <LuUserCircle className='text-2xl text-second'/>
                                <span className='text-base text-second font-roboto'>{user?.name ? user.name : 'User'}</span>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] shadow-lg bg-first rounded-xl w-full min-w-28 gap-1">
                                <li>
                                    <Link to={'/user-profile'} className='text-white bg-second hover:shadow-inner hover:shadow-second hover:bg-white hover:text-second hover:font-medium p-2 w-full justify-center'>User Profile</Link>
                                </li>
                                <li>
                                    <Link to={'/orders'} className='text-white bg-second hover:shadow-inner hover:shadow-second hover:bg-white hover:text-second hover:font-medium p-2 w-full justify-center'>Orders</Link>
                                </li>
                                <li className='text-third hero'>
                                    <button onClick={()=>logout()} className='text-white bg-second hover:shadow-inner hover:shadow-second hover:bg-white hover:text-second hover:font-medium p-2 w-full justify-center'>
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