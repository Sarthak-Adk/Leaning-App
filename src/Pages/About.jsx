import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-gray-800">
  <div className="container mx-auto px-4 py-8">
   <h1 className="text-4xl font-bold text-center mb-8">
   About
   </h1>
   <div className="flex flex-col lg:flex-row items-center">
    <div className="lg:w-1/2">
     <img alt="A group of diverse people in a meeting, discussing and smiling" className="w-full h-auto rounded-lg shadow-lg" height="400" src="https://storage.googleapis.com/a1aa/image/wVwbUKJGIRPfR3-3kO5IE5wa_8fIQVRcRYRIoOhV0kk.jpg" width="600"/>
    </div>
    <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
     <div className="bg-gray-100 p-6 rounded-lg shadow-lg shadow-blue-500/50 mb-8">
      <h2 className="text-xl font-bold mb-4">
       Why We Do This
      </h2>
      <p className="mb-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus sunt quos, provident amet dolorem incidunt possimus deleniti nulla exercitationem, illum quaerat culpa aspernatur quidem, beatae aperiam cumque dignissimos iure sint. Itaque labore esse expedita repellat temporibus quod asperiores odit!  </p>
      <a className="bg-blue-700 text-white px-4 py-2 rounded-lg" href="#">
       Read More
      </a>
     </div>
     <div>
      <h2 className="text-2xl font-bold mb-4">
       Helping You Grow In Every Stage.
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus perferendis unde architecto labore eaque impedit maiores nemo libero, expedita ratione enim facilis sunt incidunt sapiente?
    </p>
     </div>
    </div>
   </div>
 

  <div className="container text-center px-4 mt-5 mx-auto bg-gray-100  shadow-md shadow-blue-500/50 p-6 rounded-lg">
  <h1 className="text-2xl font-bold mb-4">What’s Different When You Work With Us?</h1>
  <div className="flex flex-col md:flex-row gap-6">
    <div className="md:w-1/2 text-left">
      <p>
        When you engage our digital agency for your project, you get instant access to a team of 120 technology legends, including strategists, designers, developers, quality engineers, and project managers. All working together for a common end goal: to create revenue-generating digital solutions for YOU.
      </p>
      <br />
      <p>
        Having been on the market for more than 11 years, our hybrid business model sets us apart from other digital agencies. We have offices in Sydney, Melbourne, London, and Kathmandu.
      </p>
    </div>
    <div className="md:w-1/2 text-left">
      <p>
        We may be scattered all around the world, but we all speak the same language: code. It’s in our DNA. We run all projects with our inborn passion for programming.
      </p>
      <p>We deliver quickly & efficiently based on three factors:</p>
      <ul className="list-disc ml-5">
        <li>Quality of services is always top-notch</li>
        <li>Time is not an issue due to our large team of designers and developers</li>
        <li>Cost-effective due to our hybrid business model</li>
      </ul>
      <p className="mt-4">
    With over 10 years of experience as a mobile app and website development agency, you can rest assured that you are working with a complete solution provider.
  </p>
    </div>
  </div>
</div>
</div>
      </div>

  );
};

export default About;