import UserNav from './UserNav.jsx'
import MobileNav from './MobileNav'
import { useSelector } from 'react-redux'
import { getUserStatus } from '../../slices/UserSlice.js'
import { useAuth0 } from '@auth0/auth0-react'

const MainNav = () => {
    const userStatus = useSelector(getUserStatus)

    const {isLoading} = useAuth0()

    if(userStatus == 'loading' || isLoading){
        return <span className="loading loading-spinner text-warning p-4"></span>
    }

    return (
        <>
            <div>
                <div className='hidden md:block '>
                    <UserNav />
                </div>
                <div className='md:hidden m-1'>
                    <MobileNav />
                </div>
            </div>
        </>
    )
}

export default MainNav