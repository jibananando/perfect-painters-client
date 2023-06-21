import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-600 py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                <div>
                    <h4 className="text-lg font-bold mb-4 text-white">Perfect Painters</h4>
                    <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum neque ac congue hendrerit.
                        Vestibulum at nisi rhoncus, lobortis enim nec, sodales justo.
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-4 text-white">Services</h4>
                    <ul className="text-white">
                        <li>Interior Painting</li>
                        <li>Exterior Painting</li>
                        <li>Color Consultation</li>
                        <li>Wallpaper Installation</li>
                        <li>Surface Preparation</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-4 text-white">Info</h4>
                    <p className="text-white">123 Street, City, State</p>
                    <p className="text-white">Email: info@example.com</p>
                    <p className="text-white">Phone: (123) 456-7890</p>
                    <div className="flex items-center mt-4">
                        <a href="#" className="text-white mx-2 hover:text-gray-400">
                            <FaFacebook size={24} />
                        </a>
                        <a href="#" className="text-white mx-2 hover:text-gray-400">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" className="text-white mx-2 hover:text-gray-400">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-8 px-4 text-center text-white">
                <p>&copy; {new Date().getFullYear()} Your Painting Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
