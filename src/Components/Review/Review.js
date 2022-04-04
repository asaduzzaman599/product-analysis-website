import React from 'react';

const Review = ({ review: { name, image, body, rating } }) => {

    return (
        <div className=' p-6 border rounded bg-amber-50'>
            <div className='flex gap-4 items-center flex-col  '>
                <img className='w-16 h-16 rounded-full border-4' src={image} alt="" />
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