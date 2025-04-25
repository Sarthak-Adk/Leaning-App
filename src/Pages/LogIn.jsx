import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  return (
    <div  className="min-h-screen w-full bg-cover bg-no-repeat bg-fixed flex flex-col items-center justify-center"
    style={{ backgroundImage: `url(/src/assets/LandingPageBG.jpg)` }}>
         <div className="back-button  bg-white">
              <Link to="/landingpage">
                  <button  >
      Back
                  </button>
                  </Link>
                  </div>
      <div className="flex w-[800px] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - Sign In Form */}
        <div className="w-1/2 p-10">
          <h2 className="text-2xl font-bold mb-6">Sign In</h2>
          <div className="flex space-x-3 mb-4">
            <button className="p-2 border rounded-full hover:bg-gray-200">G+</button>
            <button className="p-2 border rounded-full hover:bg-gray-200">f</button>
            <button className="p-2 border rounded-full hover:bg-gray-200">P</button>
            <button className="p-2 border rounded-full hover:bg-gray-200">in</button>
          </div>
          <p className="text-gray-500 mb-2">or use your email password</p>
          <input
            type="text"
            placeholder="Email"
            className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <a href="#" className="text-blue-500 text-sm mb-4 inline-block">
            Forgot Your Password?
          </a>
          <button
            onClick={() => navigate("/layout/dashboard")} // FIXED: navigate to the correct path
            className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Log In
          </button>
        </div>

        {/* Right Side - Sign Up Section */}
        <div className="w-1/2 bg-gradient-to-r from-blue-500 to-blue-700 text-white flex flex-col items-center justify-center p-10">
          <h2 className="text-2xl font-bold mb-4">Hello, Friend!</h2>
          <p className="text-center mb-4">
            Register with your personal details to use all site features
          </p>
          <Link to="/signup">
            <button className="px-6 py-2 border border-white rounded-md hover:bg-white hover:text-blue-600">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
