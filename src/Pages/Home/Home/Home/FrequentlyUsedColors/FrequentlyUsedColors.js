import React, { useState } from 'react';

const FrequentlyUsedColors = () => {
    const [showAllColors, setShowAllColors] = useState(false);

    const colors = [
        {
            name: 'Classic White',
            code: 'red-500',
            image: '/images/color-white.png',
        },
        {
            name: 'Cozy Gray',
            code: '#A9A9A9',
            image: '/images/color-gray.png',
        },
        {
            name: 'Ocean Blue',
            code: '#0077BE',
            image: '/images/color-blue.png',
        },
        {
            name: 'Sunny Yellow',
            code: '#FEDD00',
            image: '/images/color-yellow.png',
        },
        {
            name: 'Custom Color',
            code: '#FF0000',
            image: '',
        },
    ];

    const visibleColors = showAllColors ? colors : colors.slice(0, 4);

    const handleSeeMore = () => {
        setShowAllColors(true);
    };

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-semibold mb-6">Frequently Used Colors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {visibleColors.map((color, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className={`bg-${color.code.toLowerCase()} rounded-full w-24 h-24 mb-2 shadow-lg`}></div>
                        <h3 className="text-lg font-semibold mb-1">{color.name}</h3>
                        <p className="text-gray-500">{color.code}</p>
                    </div>
                ))}
                {!showAllColors && (
                    <div className="flex flex-col items-center">
                        <button
                            className=" text-blue-600 py-2 px-4 rounded-lg font-semibold"
                            onClick={handleSeeMore}
                        >
                            See More Color
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FrequentlyUsedColors;
