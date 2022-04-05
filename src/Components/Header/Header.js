import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuAlt1Icon,XIcon } from '@heroicons/react/solid'
const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const navLinkItem = [
        { name: 'HOME', link: '/home' },
        { name: 'REVIEWS', link: '/reviews' },
        { name: 'DASHBOARD', link: '/dashboard' },
        { name: 'BLOGS', link: '/blogs' },
        { name: 'CONTACT', link: '/contact' },
    ]
    return (
        <div className='p-6 bg-blue-200  flex justify-between items-center '>
            <div className='sm:hidden' onClick={()=>setIsOpen(!isOpen)}>
                {isOpen || <MenuAlt1Icon className="h-5 w-5 text-slate-800" />}
                {isOpen && <XIcon className="h-5 w-5 text-slate-800" />}
            </div>
            <div className='w-full text-right sm:text-left'>
                <h3 className='sm:text-3xl font-bold text-cyan-800'>SunGlass Museum</h3>
            </div>
            <ul className={`sm:flex justify-center w-full  absolute left-0 z-10  bg-blue-200 duration-700 sm:static ${isOpen?"top-14":"top-[-400px]"}`}>
                {
                    navLinkItem.map(navlink => <li key={navlink.name} className="my-4">
                        <NavLink to={navlink.link} className={'font-semibold text-sm px-6 py-2  mx-4'} style={({ isActive }) =>
                            isActive ? { color: "#630000", borderBottom: "2px solid #630000" } : {
                                color: "#072227", borderBottom: "2px solid rgba(0,0,0,.2)"
                            }} key={navlink.name}>{navlink.name}</NavLink>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Header;