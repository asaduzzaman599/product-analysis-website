import React from 'react';
import RatingComponent from '../RatingComponent/RatingComponent';

const Review = ({ review: { name, image, body, rating } }) => {

    return (
        <div className=' p-6 border rounded bg-amber-50 shadow-lg'>
            <div className='flex gap-4 items-center flex-col  '>
                <img className='w-20 h-20 rounded-full border-4 border-slate-300 shadow-lg' src={image} alt="" />
                <div>
                    <p><RatingComponent rating={rating}></RatingComponent> ({rating})</p>
                    <h2 className='text-xl text-slate-700 font-semibold'>{name}</h2>
                    <hr className='my-2 ' />
                    <p className='text-sm text-gray-600'>{body}</p>
                </div>

            </div>
        </div>
    );
};

export default Review;