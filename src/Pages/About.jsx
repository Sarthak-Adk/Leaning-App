import React from 'react';

const About = () => {
  return (
    <div class="bg-white text-gray-800">
  <div class="container mx-auto px-4 py-8">
   <h1 class="text-4xl font-bold text-center mb-8">
   About
   </h1>
   <div class="flex flex-col lg:flex-row items-center">
    <div class="lg:w-1/2">
     <img alt="A group of diverse people in a meeting, discussing and smiling" class="w-full h-auto rounded-lg shadow-lg" height="400" src="https://storage.googleapis.com/a1aa/image/wVwbUKJGIRPfR3-3kO5IE5wa_8fIQVRcRYRIoOhV0kk.jpg" width="600"/>
    </div>
    <div class="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
     <div class="bg-pink-100 p-6 rounded-lg shadow-lg mb-8">
      <h2 class="text-xl font-bold mb-4">
       Why We Do This
      </h2>
      <p class="mb-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus sunt quos, provident amet dolorem incidunt possimus deleniti nulla exercitationem, illum quaerat culpa aspernatur quidem, beatae aperiam cumque dignissimos iure sint. Itaque labore esse expedita repellat temporibus quod asperiores odit!  </p>
      <a class="bg-blue-700 text-white px-4 py-2 rounded-lg" href="#">
       Read More
      </a>
     </div>
     <div>
      <h2 class="text-2xl font-bold mb-4">
       Helping You Grow In Every Stage.
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus perferendis unde architecto labore eaque impedit maiores nemo libero, expedita ratione enim facilis sunt incidunt sapiente?
    </p>
     </div>
    </div>
   </div>
  </div>
      </div>
 

  );
};

export default About;