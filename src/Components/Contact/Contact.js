import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='w-4/5 mx-auto'>

            <div className='flex mt-20'>
                <Link to="/contact/social" className='py-4 px-8 bg-blue-200 rounded-t-lg'>Social</Link>
                <Link to="/contact/office"  className='py-4 px-8 bg-green-200 rounded-t-lg'>Office</Link>
            </div>
            <Outlet />
        </div>
    );
};

export default Contact;