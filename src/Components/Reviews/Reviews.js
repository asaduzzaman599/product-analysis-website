import React from 'react';
import { useReviews } from '../../hook/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews,setReviews] = useReviews();
    return (
        <div className='mt-16'>
            <h2 className='text-4xl font-semibold text-sky-900'>What Our Customer Says!</h2>
        <div className='w-4/5 mx-auto grid sm:grid-cols-3 mt-16 gap-8'>
            {reviews.map(review=> <Review review={review} key={review.id}></Review>)}
        </div>
        </div>
    );
};

export default Reviews;