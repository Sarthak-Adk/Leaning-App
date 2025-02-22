import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProjectCard = ({ id, title, description, status, level, techStack }) => {
  return (
    <div key={id} className="bg-gray-100 p-4 rounded-lg shadow-md shadow-md shadow-blue-500 flex flex-col h-full">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">
          {level}
        </span>
        <span className="text-sm text-gray-500">{techStack.join(", ")}</span>
      </div>
      <div className="flex items-center space-x-2 mt-2 mb-2">
        <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">
          status
        </span>
        <span className="text-sm text-gray-500 ">{status}</span>
      </div>

      <button className="mt-auto w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
view details
</button>

    </div>
  );
};

ProjectCard.propTypes = {
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  techStack: PropTypes.array.isRequired, // Fixed incorrect type
  description: PropTypes.string.isRequired,
  level: PropTypes.string,
};

export default ProjectCard;
