import React from 'react';
import { useReviews } from '../../hook/useReviews';

const Reviews = () => {
    const [reviews,setReviews] = useReviews();
    console.log(reviews)
    return (
        <div className='container mx-auto grid sm:grid-cols-3'>
            <h4>Reviews
            </h4>
        </div>
    );
};

export default Reviews;