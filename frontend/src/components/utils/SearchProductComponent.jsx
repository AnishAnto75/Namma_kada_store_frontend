import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchProductComponent = () => {

    const navigate = useNavigate()
    const [searchTerm , setSearchTerm] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        const urlParams = new URLSearchParams(window.location.search)
        urlParams.set("searchTerm" , searchTerm.trim().replace('  ' , ' ').replace('   ' , ' ').replace('    ' , ' ').replace('     ' , ' '))
        const searchQuery = urlParams.toString()
        console.log(searchQuery)
        navigate(`products/search?${searchQuery}`)
    }

    useEffect(()=>{
        const urlParams = new URLSearchParams(location.search)
        const searchTermFromUrl = urlParams.get("searchTerm")
        if(searchTermFromUrl){
            setSearchTerm(searchTermFromUrl)
        }
    } , [location.search])

    return (
        <div className="relative mx-auto">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input
                    type="text"
                    placeholder="Search Products..." 
                    autoComplete='off'
                    name="search"
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                    className="border-2 border-second h-9 px-3 rounded-s-full text-sm text-second placeholder:text-second focus:shadow-inner focus:shadow-second outline-none" 
                />
                <button 
                    type="submit" 
                    disabled = {!searchTerm}
                    className="absolute p-[9.5px] border-2 h-9 border-second left-[187px] bg-first rounded-e-full shadow-inner shadow-second ">
                    <svg className="text-second h-4 w-4 fill-current" viewBox="0 0 56.966 56.966" width="512px" height="512px">
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                </button>
            </form>
        </div>
    )
}

export default SearchProductComponent