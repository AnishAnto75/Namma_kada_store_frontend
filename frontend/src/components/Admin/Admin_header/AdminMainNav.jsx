import { useSelector } from 'react-redux'
import { getUserStatus } from '../../../slices/UserSlice.js'
import { useAuth0 } from '@auth0/auth0-react'
import AdminDesktopNav from './AdminDesktopNav.jsx'
import AdminMobileNav from './AdminMobileNav.jsx'

const AdminMainNav = () => {
    const userStatus = useSelector(getUserStatus)

    const {isLoading} = useAuth0()

    if(userStatus == 'loading' || isLoading){
        return <span className="loading loading-spinner text-warning p-4"></span>
    }

    return (
        <>
            <div>
                
                <div className='hidden md:block'>
                    <AdminDesktopNav />
                </div>
                <div className='md:hidden m-1'>
                    <AdminMobileNav />
                </div>
            </div>
        </>
    )
}

export default AdminMainNav