import React from 'react';

const TeamMember = ({ name, photoUrl, bio, expertLevel }) => {
    return (
        <div className="flex flex-col items-center">
            <img
                src={photoUrl}
                alt={name}
                className="rounded-full w-40 h-40 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-600 mb-2">{bio}</p>
            <p className="text-sm text-gray-500">Expert Level: {expertLevel}</p>
        </div>
    );
};

const Team = () => {
    const teamMembers = [
        {
            name: 'John Smith',
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQby8-eq3egb0hcC7xWUFw2-rfciK0qrWtNHw&usqp=CAU',
            bio: 'John is an experienced painter with a passion for creating stunning visual art.',
            expertLevel: 'Master'
        },
        {
            name: 'Emily Johnson',
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeId0ajGvoNVScgDldXNmdoJCXbXhFw_r4rZfGJTrXg7OOzUFTf6d6ruK2Fajqgaer8q8&usqp=CAU',
            bio: 'Emily is a talented artist who specializes in creating unique and vibrant color combinations.',
            expertLevel: 'Intermediate'
        },
        {
            name: 'Emily Johnson',
            photoUrl: 'https://jerseycitypaintpros.com/wp-content/uploads/2019/12/Jersey-City-Painting-Pros-About-1024x683.jpg',
            bio: 'Emily is a talented artist who specializes in creating unique and vibrant color combinations.',
            expertLevel: 'Intermediate'
        },
        // Add more team members as needed
    ];

    return (
        <div className="container mx-auto py-8">
            <div><h1 className="text-4xl font-bold text-center mt-16 mb-16">Our Team</h1></div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <TeamMember key={index} {...member} />
                ))}
            </div>
        </div>
    );
};

export default Team;
