import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonial = ({ name, message }) => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
                <FaStar className="text-yellow-500 mr-1" />
                <FaStar className="text-yellow-500 mr-1" />
                <FaStar className="text-yellow-500 mr-1" />
                <FaStar className="text-yellow-500 mr-1" />
                <FaStar className="text-yellow-500" />
            </div>
            <p className="text-gray-700 mb-4">{message}</p>
            <p className="text-gray-500 font-medium">{name}</p>
        </div>
    );
};

const Testimonials = () => {
    const testimonials = [
        {
            name: 'John Doe',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida nunc ac dui pretium, a volutpat risus rutrum.'
        },
        {
            name: 'Jane Smith',
            message: 'Pellentesque in urna at quam vehicula auctor eu eget diam. Ut aliquet ex vitae eros volutpat scelerisque.'
        },
        {
            name: 'Mike Johnson',
            message: 'Maecenas commodo, neque at ultrices placerat, erat elit rutrum neque, at fermentum nisi metus at nibh.'
        }
    ];

    return (
        <div className="container mx-auto py-8">
            <div><h1 className="text-4xl font-bold text-center mt-16 mb-16">Testimonials</h1></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <Testimonial key={index} {...testimonial} />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
