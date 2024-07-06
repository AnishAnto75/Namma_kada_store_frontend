import { Link } from 'react-router-dom'
import MainNav from './MainNav'
import SearchProductComponent from '../utils/SearchProductComponent'
const Header = () => {

    return (
        <div className='flex justify-between h-14 px-5 hero max-w-screen bg-first border-b-2 border-third z-50 '>
            <Link to={'/'} className='text-3xl text-third ml-6 font-serif font-bold'>
                {import.meta.env.VITE_APP_TITLE}
            </Link>
            <SearchProductComponent />
            <MainNav />
        </div>
    )
}

export default Header