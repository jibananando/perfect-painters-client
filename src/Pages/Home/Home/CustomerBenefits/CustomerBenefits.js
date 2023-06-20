import React from 'react';

const BenefitItem = ({ icon, title, description }) => {
    return (
        <div className="flex items-start mb-6">
            <div className="flex-shrink-0 mr-4">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {icon}
                </svg>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};

const CustomerBenefits = () => {
    const benefits = [
        {
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            ),
            title: 'Attention to Detail',
            description: 'We pay meticulous attention to detail, ensuring a precise and flawless finish for your painting project.'
        },
        {
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ),
            title: 'Superior Quality',
            description: 'We prioritize delivering top-notch quality in our painting services, using high-quality materials and techniques.'
        },
        {
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            ),
            title: 'Eco-Friendly Materials',
            description: 'We use eco-friendly and non-toxic painting materials, promoting sustainability and a healthier environment.'
        },
        {
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            ),
            title: 'Exceptional Customer Service',
            description: 'We pride ourselves on providing outstanding customer service, ensuring a positive and smooth experience for our clients.'
        },
        {
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            ),
            title: 'Wide Range of Services',
            description: 'We offer a comprehensive range of painting services, including interior painting, exterior painting, and decorative finishes.'
        },
        {
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13v6h-6m-4 0H7m4 0v-6m0-4V7m0 4h6m-6 0H7" />
            ),
            title: 'Timely Project Completion',
            description: 'We prioritize meeting project deadlines and strive to complete your painting project on time, without compromising on quality.'
        },
    ];

    return (
        <div className="container mx-auto py-8">
            <div><h1 className="text-4xl font-bold text-center mt-16 mb-16">Customer Benefits</h1></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                    <BenefitItem key={index} {...benefit} />
                ))}
            </div>
        </div>
    );
};

export default CustomerBenefits;
