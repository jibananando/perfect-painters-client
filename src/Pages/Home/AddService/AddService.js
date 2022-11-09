import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddService = () => {

    const { createService } = useContext(AuthContext);

    const handleService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const url = form.url.value;
        const price = form.price.value;
        const description = form.description.value;

        createService(name, url, price, description)
            .then(result => {
                const service = result.service;
                console.log(service);
                form.reset();
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <div className="hero">
                <div className="hero-content grid cols-2">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add New Service</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleService} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name of the service</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter your Service Name" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="url" name="url" placeholder="Image url" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name="number" placeholder="Price" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text">Short description</span>
                                </label>
                                <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Service</button>
                            </div>
                        </form>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;