import React from 'react';

const Project = ({ title, description, imageSrc, technologies }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6"> {/* Card styling */}
      <div className="flex flex-col md:flex-row md:items-center"> {/* Responsive layout */}
        {imageSrc && ( // Conditionally render image if available
          <div className="md:w-48 md:mr-6 mb-4 md:mb-0"> {/* Image container */}
            <img
              src={imageSrc}
              alt={title}
              className="rounded-lg object-cover w-full h-32 md:h-full" // Responsive image sizing
            />
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          {technologies && ( // Conditionally render technologies if available
            <div className="flex flex-wrap">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-200 rounded-md px-2 py-1 mr-2 mb-2 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of project 1. What problem does it solve? What technologies were used?',
      imageSrc: '/path/to/project1.jpg', // Replace with your image path
      technologies: ['React', 'Tailwind CSS', 'Node.js'],
    },
    {
      title: 'Project 2',
      description: 'Details about project 2.  Highlight key features and accomplishments.',
      imageSrc: '/path/to/project2.png',
      technologies: ['JavaScript', 'HTML', 'CSS'],
    },
    // Add more projects here
  ];

  return (
    <section className="py-12 bg-white"> {/* Section styling */}
      <div className="container mx-auto px-4"> {/* Container for centering */}
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Responsive grid */}
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;