import React from 'react';
import CoursesCard from '../Components/CoursesCard';

const Courses = () => {
  const cardData = [
    {
      id: 1,
      image: '/src/assets/html.jpg',
      title: 'HTML',
      description: 'The standard markup language for creating web pages.',
      link: '/technology/html'
    },
    {
      id: 2,
      image: '/src/assets/JavaScript.png',
      title: 'JavaScript',
      description: 'A versatile programming language for web development.',
      link: '/technology/javascript'
    },
    {
      id: 3,
      image: '/src/assets/Python.png',
      title: 'Python',
      description: 'A powerful and easy-to-learn programming language.',
      link: '/technology/python'
    },
    {
      id: 4,
      image: '/src/assets/Java.png',
      title: 'Java',
      description: 'A high-level, class-based programming language.',
      link: '/technology/java'
    },
    {
      id: 5,
      image: '/src/assets/c++.png',
      title: 'C++',
      description: 'An extension of C with object-oriented features.',
      link: '/technology/cplusplus'
    },
    {
      id: 6,
      image: '/src/assets/c.png',
      title: 'C',
      description: 'A foundational programming language for system development.',
      link: '/technology/c'
    },
    {
      id: 7,
      image: '/src/assets/React.png',
      title: 'React',
      description: 'A JavaScript library for building user interfaces.',
      link: '/technology/react'
    },
    {
      id: 8,
      image: '/src/assets/mongodb.png',
      title: 'MongoDB',
      description: 'A NoSQL database program using JSON-like documents.',
      link: '/technology/mongodb'
    },
    {
      id: 9,
      image: '/src/assets/express.jpg',
      title: 'ExpressJs',
      description: 'A fast, minimal framework for Node.js web applications.',
      link: '/technology/expressjs'
    }
    
  ];

  return (
    <>
     <section className="bg-white">
    <div className="container mx-auto px-4 py-8">
     <h2 className="text-3xl font-bold text-center">Our Courses</h2>
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
    </div>
    </section>
    </>
  );
};

export default Courses;
