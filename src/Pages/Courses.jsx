import React from 'react';
import CoursesCard from '../Components/CoursesCard';

const Courses = () => {
  const cardData = [
    {
      id: 1,
      image: '/src/assets/html.jpg',
      title: 'HTML',
      description: 'A lion cub prince flees his kingdom.',
      link: '/movies/the-lion-king'
    },
    {
      id: 2,
      image: '/src/assets/JavaScript.png',
      title: 'JavaScript',
      description: 'A princess with ice powers.',
      link: '/movies/frozen'
    },
    {
      id: 3,
      image: '/src/assets/Python.png',
      title: 'Python',
      description: 'A girl sails the ocean to save her people.',
      link: '/movies/moana'
    },
    {
      id: 4,
      image: '/src/assets/Java.png',
      title: 'Java',
      description: 'A girl sails the ocean to save her people.',
      link: '/movies/moana'
    },
    {
      id: 5,
      image: '/src/assets/c++.png',
      title: 'C++',
      description: 'A girl sails the ocean to save her people.',
      link: '/movies/moana'
    },
     {
      id: 6,
      image: '/src/assets/c++.png',
      title: 'C++',
      description: 'A girl sails the ocean to save her people.',
      link: '/movies/moana'
    },
    {
      id: 7,
      image: '/src/assets/JavaScript.png',
      title: 'JavaScript',
      description: 'A princess with ice powers.',
      link: '/movies/frozen'
    },
    {
      id: 8,
      image: '/src/assets/Python.png',
      title: 'Python',
      description: 'A girl sails the ocean to save her people.',
      link: '/movies/moana'
    },
    {
      id: 9,
      image: '/src/assets/Java.png',
      title: 'Java',
      description: 'A girl sails the ocean to save her people.',
      link: '/movies/moana'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8"> {/* Container for centering and padding */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"> {/* Grid layout */}
        {cardData.map(card => (
          <CoursesCard
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
