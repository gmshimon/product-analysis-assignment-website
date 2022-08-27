import React from 'react';
import UseRatings from '../../UseRatings/UseRating';
import Review from '../Review/Review';

const Reviews = () => {
    
    const [reviews,setReviews] = UseRatings();
    return (
        <div>
            <h1 className="text-center my-12
            text-6xl">Review of our Customer</h1>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-x-40 sm:gap-x-16 lg:mx-60 sm:mx-16">
            {
                        reviews.map(review => <Review
                        key={review.id}
                        review={review}
                        ></Review>)
                    }
            </div>
        </div>
    );
};

export default Reviews;