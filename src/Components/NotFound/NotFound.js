import React from 'react';
import { XIcon } from '@heroicons/react/solid'

const NotFound = () => {
    return (
        <div className='w-full h-screen flex flex-col justify-center'>
            <div className='w-60 h-60  mb-8 mx-auto'>
                <XIcon className="h-full w-full text-gray-300 border-8 bg-white border-gray-300 rounded-full" />
            </div>
            <h3 className='text-3xl text-gray-300'> 404! No Page Found</h3>
        </div>
    );
};

export default NotFound;