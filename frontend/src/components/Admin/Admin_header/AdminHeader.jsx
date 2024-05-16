import { Link } from 'react-router-dom'
import AdminMainNav from './AdminMainNav.jsx'

const Header = () => {

    return (
        <div className='flex justify-between px-7 py-5 border-b-2 border-b-amber-500 max-w-screen bg-white'>
            <Link to={'/'} className='text-3xl text-amber-400 font-bold m-1'>
                {import.meta.env.VITE_APP_TITLE}
            </Link>
            <div>
                <AdminMainNav />
            </div>
        </div>
    )
}

export default Header