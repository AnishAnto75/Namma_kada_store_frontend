import { Link } from 'react-router-dom'
import MainNav from './MainNav'
const Header = () => {

    return (
        <div className='flex justify-between px-7 py-2 border-b-2 border-b-amber-500 max-w-screen'>
            <Link to={'/'} className='text-3xl text-amber-400 font-bold font-san m-1'>
                {import.meta.env.VITE_APP_TITLE}
            </Link>
                <MainNav />
        </div>
    )
}

export default Header