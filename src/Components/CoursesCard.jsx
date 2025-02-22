import React from 'react';
import PropTypes from 'prop-types';

const CoursesCard = ({ image, title, description, link }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md shadow-blue-500/50 overflow-hidden transition duration-300 hover:scale-105 flex flex-col h-full"> {/* h-full for consistent card heights */}
      <img className="w-full h-48 object-cover" src={image} alt={title} />

      <div className="p-6 flex flex-col flex-grow">
        <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-4 text-gray-700 dark:text-gray-400 flex-grow"> {/* flex-grow for description */}
          {description}
        </p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
          >
            Read more
          </a>
        )}
      </div>
    </div>
  );
};

CoursesCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default CoursesCard;