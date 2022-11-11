import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const LimitService = () => {
    const { _id, img, price, title, description } = useLoaderData();
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p className='text-xl text-orange-600'>Price: {price} $</p>
                <div className="card-actions">
                    <Link to={`/serviceDetail/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LimitService;