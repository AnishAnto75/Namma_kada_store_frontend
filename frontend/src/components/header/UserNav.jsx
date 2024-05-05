import { Link } from 'react-router-dom';
import { LuUserCircle } from "react-icons/lu";
import { useAuth0 } from '@auth0/auth0-react';
import {useSelector} from 'react-redux'
import { selectUserById, selectUserIds } from '../../slices/UserSlice';
import CartButton from './CartButton';

const UserNav = () => {
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
                <div className='flex justify-end space-x-2'>

                    <CartButton />

                    <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="btn btn-ghost flex hover:bg-transparent hover:text-amber-500">
                                <LuUserCircle className='text-2xl'/>
                                <span className='text-base'>{user?.name}</span>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow-lg bg-slate-50 rounded-box w-32">
                                <li className='hover:text-amber-500'>
                                    <Link to={'/user-profile'}>User Profile</Link>
                                </li>
                                <div className='divider m-0 mr-5'></div>
                                <li className='hover:text-amber-500 '>
                                    <button onClick={()=>logout()}>Log out</button>
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