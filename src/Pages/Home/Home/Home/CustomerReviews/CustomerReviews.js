import React from 'react';
import { FaStar } from 'react-icons/fa';

const CustomerReview = ({ rating }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(
                <FaStar key={i} className="text-yellow-500" />
            );
        }
        return stars;
    };

    return (
        <div className="flex items-center">
            {renderStars()}
            <span className="ml-2 text-lg">{rating} Stars</span>
        </div>
    );
};

export default CustomerReview;
