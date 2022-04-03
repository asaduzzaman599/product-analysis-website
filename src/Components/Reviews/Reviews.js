import React from 'react';
import { useReviews } from '../../hook/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews,setReviews] = useReviews();
    console.log(reviews)
    return (
        <div className='w-4/5 mx-auto grid sm:grid-cols-3 mt-32 gap-8'>
            {reviews.map(review=> <Review review={review} key={review.id}></Review>)}
        </div>
    );
};

export default Reviews;