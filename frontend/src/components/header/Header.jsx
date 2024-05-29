import { Link } from 'react-router-dom'
import MainNav from './MainNav'
import SearchProductComponent from '../utils/SearchProductComponent'
const Header = () => {

    return (
        <div className='flex justify-between h-14 px-5 hero max-w-screen bg-first border-b-2 border-second '>
            <Link to={'/'} className='text-3xl text font-bold m-1 text-second font-roboto'>
                {import.meta.env.VITE_APP_TITLE}
            </Link>
            <div>
                <SearchProductComponent />
            </div>
            <MainNav />
        </div>
    )
}

export default Header