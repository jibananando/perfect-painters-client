import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Services = () => {
    useTitle('Services');

    return (
        <div>
            <div><h1 className="text-4xl font-bold text-center m-4">All Services</h1></div>
            <div className='grid grid-cols-3 gap-4 justify-items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name: ?</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p>Price: $</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name: ?</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p>Price: $</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name: ?</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p>Price: $</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name: ?</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p>Price: $</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name: ?</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p>Price: $</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div><div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name: ?</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p>Price: $</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;