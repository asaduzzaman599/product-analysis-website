import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useReviews } from '../../hook/useReviews';
import Review from '../Review/Review';

const Home = () => {
    const [allReviews,setReviews] = useReviews()
    const navigate = useNavigate();
    const reviews = allReviews.slice(0,3);
    console.log(reviews)
    return (
        <div >
            <h4>Home</h4>
            <div className=' w-4/5 mx-auto grid gap-8 grid-cols-3'>
                {
                    reviews.map(review=><Review review={review} key={review.id}></Review>)
                }
            </div>
            <button className='py-2 px-4 bg-lime-600 text-white mt-4' onClick={()=>navigate('/reviews')}>See More Reviw</button>
        </div>
    );
};

export default Home;