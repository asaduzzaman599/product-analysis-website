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
        <div className='mt-10'>
            
            <div className='w-4/5 mx-auto sm:flex  items-center gap-12 my-16'>
                 <div className='order-2'>
                    <img src='https://www.dukpion.com/pub/media/catalog/product/cache/a38c967793d550238dc3aed38795d0d8/d/k/dks05185_850tk-_1__1_1_.jpg' className='rounded-full w-4/5 mx-auto my-6 ' alt="" />
                </div>
                <div className='order-1 my-20'>
                    <h1 className='text-5xl font-medium text-cyan-900'>We are commited to Provide Best Sunglass to Our Customer! </h1>
                    <p className='text-gray-500 text-2xl my-8'>Our main priority is customers comfort, safety and customers trust.</p>
                    <button className='py-4 px-8 rounded font-medium  text-blue-900 bg-blue-200'>Live Demo</button>
                </div>
               
            </div>
            <h3 className='text-3xl font-medium mb-10'>Customers Reviews ({reviews.length})</h3>
            <div className=' w-4/5 mx-auto grid gap-8 sm:grid-cols-3'>
                {
                    reviews.map(review=><Review review={review} key={review.id}></Review>)
                }
            </div>
            <button className='py-2 px-4 bg-blue-900 text-blue-200 mt-4 rounded' onClick={()=>navigate('/reviews')}>See All Reviews</button>
        </div>
    );
};

export default Home;