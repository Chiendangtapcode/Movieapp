import React, { useEffect, useState } from 'react'
import { logo } from '../assets/assets'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { navigation } from '../contants/navigation'

function Header() {
    const location = useLocation()
    const removeSpace = location?.search?.slice(3)?.split('%20')?.join(' ')
    const [searchInput,setSearchInput] = useState(removeSpace)
    const navigate = useNavigate()
    useEffect(()=>{
        if(searchInput){
            navigate(`/search?q=${searchInput}`)
        }
    },[searchInput])
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    return (
        <header className='fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40'>
            <div className='container mx-auto px-3 flex items-center h-full'>
                <Link to={'/'}>
                    <img src={logo} alt='logo' width={120} />
                </Link>
                <nav className='hidden lg:flex items-center gap-1 ml-5'>
                    {
                        navigation.map((nav, index) => {
                            return (
                                <div>
                                    <NavLink key={nav.label+'header'+index} to={nav.href} className={({ isActive }) => `px-3 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
                                        {nav.label}
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </nav>
                <div className='ml-auto flex items-center gap-4'>
                    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
                        <input type='text' placeholder='Search' 
                                className='rounded-md bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
                                onChange={(e)=> setSearchInput(e.target.value)}
                                value={searchInput} />
                        <button className='text-2xl text-white'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                    <div className='rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
                        <i className="fa-regular fa-user"></i>
                    </div>
                    {/* truyen user name tu google firebase */}
                    <p>Chien</p>
                </div>
            </div>

        </header>
    )
}

export default Header
