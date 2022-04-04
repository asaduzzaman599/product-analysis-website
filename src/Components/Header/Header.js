import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const navLinkItem = [
        {name:'Home',link:'/home'},
        {name:'Reviews',link:'/reviews'},
        {name:'Dashboard',link:'/dashboard'},
        {name:'Blogs',link:'/blogs'},
        {name:'Contact',link:'/contact'},
]
    return (
        <div className='p-6 bg-red-100'>
           <ul className='flex justify-center'> 
           {
                navLinkItem.map(navlink=> <li key={navlink.name}>
                    <NavLink to={navlink.link} className={'font-semibold text-xl px-6 py-2 mx-4'} style={ ({ isActive }) =>
                isActive ? {color:"#630000",borderBottom:"2px solid #630000"} : {color:"#072227",borderBottom:"2px solid rgba(0,0,0,.2)"
            }} key={navlink.name}>{navlink.name}</NavLink>
                </li>)
            }
           </ul>
        </div>
    );
};

export default Header;