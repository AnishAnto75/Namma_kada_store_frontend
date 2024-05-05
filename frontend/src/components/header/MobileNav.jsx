import { IoMenuSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { LuUserCircle } from "react-icons/lu";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { selectUserById, selectUserIds } from "../../slices/UserSlice";

const MobileNav = () => {

    const {isAuthenticated , loginWithRedirect , logout} = useAuth0()
    
    const userId = useSelector(selectUserIds)
    const user = useSelector(state => selectUserById(state , userId))

    return (
        <div>
                <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <label htmlFor="my-drawer-4" >
                        <IoMenuSharp  className='text-4xl text-amber-500 '/> 
                    </label>

                    {!isAuthenticated?(

                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-60 min-h-full bg-base-100 text-base-content">
                            <div className='text-amber-400 text-2xl font-bold hero'>
                                Welcome
                            </div>

                            <div className='divider divider-warning m-1' />
                            
                            <li className='hover:text-amber-500 hover:border-amber-400 my-1 border-2 m-1 rounded-xl'>
                                <button onClick={()=> loginWithRedirect()}>Log in</button>
                            </li>
                        </ul>
                    </div>

                    ):(
                    
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-60 min-h-full bg-base-100 text-base-content">
                            <div className='flex flex-row'>
                                <div className='m-1 gap-2 '>
                                        <LuUserCircle className='text-3xl'/>
                                </div>
                                <span className='text-xl p-1 justify-start hero'>{user?.name}</span>
                            </div>
                            
                            <div className='divider m-1' />
                            <li className='hover:text-amber-500 hover:border-amber-400 my-1 border-b-2 m-1 rounded-xl'>
                                <Link to={'/user-profile'}>User Profile</Link>
                            </li>
                            <li className='hover:text-amber-500 hover:border-amber-400 my-1 border-b-2 m-1 rounded-xl'>
                                <button onClick={()=> logout()}>Log out</button>
                            </li>
                        </ul>
                    </div> 
                    ) }

                </div>
        </div>
        
    )
}

export default MobileNav