import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const { img, title, description, price } = useLoaderData();
    return (
        <div className="hero-content flex-col lg:flex-row">
            <div className='w-4/13'>
                <img src={img} alt='' className="w-4/5 h-full rounded-lg shadow-2xl" />
                <div className="mt-4">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p className='text-xl text-orange-600'>Price: {price} $</p>
                </div>

            </div>
            <div className='w-1/2'>
                <h1 className="text-5xl font-bold">{title}</h1>
                <div className="rating mt-4">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className="btn">Write a Review</button>
            </div>
        </div>
    );
};

export default ServiceDetail;