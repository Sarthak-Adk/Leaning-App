import React from "react";
import {Link} from "react-router-dom"

const SignUp = () => {
  return (
    <div  className="min-h-screen w-full bg-cover bg-no-repeat bg-fixed flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(/src/assets/LandingPageBG.jpg)` }}>
    
        <div className="back-button bg-white">
        <Link to="/landingpage">
            <button >
Back
            </button>
            </Link>
        </div>
      <div className="flex w-[800px] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - Welcome Back Section */}
        <div className="w-1/2 bg-gradient-to-r from-blue-500 to-blue-700 text-white flex flex-col items-center justify-center p-10">
          <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-center mb-4">
            Enter your personal details to use all site features
          </p>
          <Link to="/login">
            <button className="px-6 py-2 border border-white rounded-md hover:bg-white hover:text-blue-600">
              Log In
            </button>
          </Link>
        </div>

        {/* Right Side - Create Account Form */}
        <div className="w-1/2 p-10">
          <h2 className="text-2xl font-bold mb-6">Create Account</h2>
          <div className="flex space-x-3 mb-4">
            <button className="p-2 border rounded-full hover:bg-gray-200">G+</button>
            <button className="p-2 border rounded-full hover:bg-gray-200">f</button>
            <button className="p-2 border rounded-full hover:bg-gray-200">P</button>
            <button className="p-2 border rounded-full hover:bg-gray-200">in</button>
          </div>
          <p className="text-gray-500 mb-2">or use your email for registration</p>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
