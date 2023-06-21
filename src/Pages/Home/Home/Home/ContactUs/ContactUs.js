import React from 'react';

const ContactUs = () => {
    return (
        <div className="container mx-auto py-8">
            <div><h1 className="text-4xl font-bold text-center mt-16 mb-16">Contact Us</h1></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                    <p className="text-gray-700 mb-2">
                        Phone: <a href="tel:+123456789">+8801764637730</a>
                    </p>
                    <p className="text-gray-700 mb-2">
                        Email: <a href="mailto:info@example.com">jibananando.pramanik@gmail.com</a>
                    </p>
                    <p className="text-gray-700">
                        Address: 123 Main Street, City, State, Zip Code
                    </p>
                    <img src="https://proinsulation.ie/wp-content/uploads/2021/03/contact-us-form.png" alt="" />
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="name">
                                Name:
                            </label>
                            <input
                                className="w-full bg-white rounded-md border-gray-300 border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                type="text"
                                id="name"
                                name="name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="email">
                                Email:
                            </label>
                            <input
                                className="w-full bg-white rounded-md border-gray-300 border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="message">
                                Message:
                            </label>
                            <textarea
                                className="w-full bg-white rounded-md border-gray-300 border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="message"
                                name="message"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
