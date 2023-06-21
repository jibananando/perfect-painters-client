import React from 'react';

const BlogPost = ({ title, author, date, content, imageUrl }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <h2 className="font-semibold text-xl mb-2">{title}</h2>
                <p className="text-gray-600 mb-2">By {author} | {date}</p>
                <p className="text-gray-700 text-base">{content}</p>
            </div>
        </div>
    );
};

const Blog = () => {
    const blogPosts = [
        {
            title: '5 Essential Painting Techniques for Beginners',
            author: 'John Smith',
            date: 'June 1, 2023',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            imageUrl: 'https://www.hammerandbrush.com.au/wp-content/uploads/2021/08/house-painter-hand-with-paint-roller-2506997-1024x684.jpg'
        },
        {
            title: 'Choosing the Right Colors for Your Interior Design',
            author: 'Emily Johnson',
            date: 'May 15, 2023',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZsyRX8TGAQObdEaVeQWSQ7SDcehuQM51rmwCjlFMCv6eOHBSvjW__UXx2zmlNquhE2aY&usqp=CAU'
        },
        {
            title: '10 Painting Tips for Beginners',
            author: 'John Smith',
            date: 'June 1, 2023',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            imageUrl: 'https://www.hammerandbrush.com.au/wp-content/uploads/2021/08/house-painter-hand-with-paint-roller-2506997-1024x684.jpg'
        },


        // Add more blog posts as needed
    ];

    return (
        <div className="container mx-auto py-8">
            <div><h1 className="text-4xl font-bold text-center mt-16 mb-16">Blog/Articles</h1></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                    <BlogPost key={index} {...post} />
                ))}
            </div>
            <div className="mt-8 flex justify-center">
                <button className=" hover:text-blue-600 text-blue-500 font-semibold px-4 py-2 ">
                    See More
                </button>
            </div>
        </div>
    );
};

export default Blog;
