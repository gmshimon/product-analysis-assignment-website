import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseRatings from '../../UseRatings/UseRating';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
    const [reviews,setReviews] = UseRatings();
    const newReviews =  reviews.slice(0,3);

    let navigate = useNavigate();

    const handleClick =() =>{
        navigate('/ratings');
    }
    return (
        <div>
            <Banner></Banner>
            <div className="">
                <h1 className="text-center text-6xl text-purple-400 border-b-2 pb-4">Reviews</h1>
                <div className="flex justify-center">
                    {
                        newReviews.map(review => <Review
                        key={review.id}
                        review={review}
                        ></Review>)
                    }
                </div>
                <div className="text-center mt-10">
                    <button onClick={handleClick} className="bg-purple-300 border-0
                    p-3 rounded-xl text-purple-1000 text-xl font-bold hover:bg-purple-500">See All Reviews</button>
                </div>
            </div>
        </div>
    );
};

export default Home;