import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faRegular } from '@fortawesome/free-solid-svg-icons'
const Review = (props) => {
    const{name,ratings,img,date} = props.review;
    return (
        <div className="flex items-center justify-center border-2
        mt-4 rounded-xl px-2 py-4 bg-slate-200">
            <div>
                <img className="rounded-full" width="120px" src={img} alt="" />
            </div>
            <div className="ml-12">
                <h1 className="text-2xl font-medium">{name}</h1>
                <p>Date: <span className="text-gray-600">{date}</span></p>
                <Rating
                    initialRating={ratings}
                    emptySymbol={<FontAwesomeIcon  icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                    readonly
                />
            </div>
        </div>
    );
};

export default Review;