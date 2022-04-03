import React from 'react';

const Review = ({ review: { name, image, body, rating } }) => {

    return (
        <div className=' p-6 border rounded'>
            <div className='flex gap-10 items-center text-left '>
                <img className='w-12 h-12 rounded-full' src={image} alt="" />
                <div>
                    <p>{rating}</p>
                    <h2 className='text-sm font-bold'>{name}</h2>
                    <p className='text-xl'>{body}</p>
                </div>

            </div>
        </div>
    );
};

export default Review;